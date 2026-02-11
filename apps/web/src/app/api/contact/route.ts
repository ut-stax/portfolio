import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

// Initialize Supabase client with service role key for admin operations
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;

const supabase = createClient(supabaseUrl, supabaseServiceKey);

/**
 * Verify Google reCAPTCHA token
 */
async function verifyRecaptcha(token: string): Promise<boolean> {
  const secretKey = process.env.RECAPTCHA_SECRET_KEY;
  
  // If no secret key is configured, skip verification in development
  if (!secretKey || secretKey === "your-recaptcha-secret-key") {
    console.warn("reCAPTCHA secret key not configured, skipping verification");
    return true;
  }

  try {
    const response = await fetch(
      `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${token}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );

    const data = await response.json();

    if (!response.ok) {
      console.error("reCAPTCHA verification failed:", data);
      return false;
    }

    return data.success && data.score >= 0.5;
  } catch (error) {
    console.error("Error verifying reCAPTCHA:", error);
    return false;
  }
}

/**
 * Send email notification for new contact message
 * Note: This is a placeholder implementation. For production, integrate with an email service
 * like Resend, SendGrid, AWS SES, or Supabase's email functionality.
 */
async function sendEmailNotification(
  name: string,
  email: string,
  subject: string,
  message: string
): Promise<boolean> {
  const contactEmailTo = process.env.CONTACT_EMAIL_TO;

  // If no email is configured, log the notification instead
  if (!contactEmailTo) {
    console.log("Email notification (mock):", {
      to: "tripathikarsn79@gmail.com", // Default from .env
      subject: `New contact from ${name}: ${subject || "No subject"}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    });
    return true;
  }

  // For production, implement actual email sending here
  // Example with Resend:
  // const { error } = await resend.emails.send({
  //   from: process.env.CONTACT_EMAIL_FROM || "noreply@utkarshtripathi.dev",
  //   to: contactEmailTo,
  //   subject: `New contact from ${name}: ${subject || "No subject"}`,
  //   text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
  // });
  // if (error) throw error;

  // Mock implementation - log to console
  console.log("Email notification would be sent:", {
    to: contactEmailTo,
    subject: `New contact from ${name}: ${subject || "No subject"}`,
  });

  return true;
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, subject, message, recaptchaToken } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required" },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    // Validate message length
    if (message.length < 10) {
      return NextResponse.json(
        { error: "Message must be at least 10 characters" },
        { status: 400 }
      );
    }

    // Verify reCAPTCHA if token is provided
    if (recaptchaToken) {
      const isRecaptchaValid = await verifyRecaptcha(recaptchaToken);
      
      if (!isRecaptchaValid) {
        return NextResponse.json(
          { error: "reCAPTCHA verification failed" },
          { status: 400 }
        );
      }
    }

    // Store message in Supabase
    const { data, error } = await supabase
      .from("contact_messages")
      .insert({
        name,
        email,
        subject: subject || null,
        message,
        read: false,
        created_at: new Date().toISOString(),
      })
      .select()
      .single();

    if (error) {
      console.error("Supabase error:", error);
      return NextResponse.json(
        { error: "Failed to store message" },
        { status: 500 }
      );
    }

    // Send email notification
    try {
      await sendEmailNotification(name, email, subject || "", message);
    } catch (emailError) {
      console.error("Failed to send email notification:", emailError);
      // Don't fail the request if email fails, the message was still stored
    }

    console.log("Contact message stored:", data);

    return NextResponse.json(
      { message: "Message sent successfully", data },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error processing contact form:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
