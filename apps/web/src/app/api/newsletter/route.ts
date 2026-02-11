import { NextRequest, NextResponse } from "next/server";

/**
 * Get Supabase client - lazily initialized to avoid build-time issues
 */
function getSupabaseClient() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!supabaseUrl || !supabaseServiceKey) {
    throw new Error("Supabase configuration is missing");
  }

  // Use dynamic import to avoid top-level initialization
  const { createClient } = require("@supabase/supabase-js");
  return createClient(supabaseUrl, supabaseServiceKey);
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email } = body;

    // Validate email
    if (!email) {
      return NextResponse.json(
        { error: "Email is required" },
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

    const supabase = getSupabaseClient();

    // Check if already subscribed
    const { data: existing } = await supabase
      .from("newsletter_subscribers")
      .select("id, subscribed")
      .eq("email", email)
      .single();

    if (existing) {
      if (existing.subscribed) {
        return NextResponse.json(
          { message: "Email is already subscribed" },
          { status: 200 }
        );
      } else {
        // Re-subscribe
        const { error: updateError } = await supabase
          .from("newsletter_subscribers")
          .update({
            subscribed: true,
            unsubscribed_at: null,
            updated_at: new Date().toISOString(),
          })
          .eq("id", existing.id);

        if (updateError) {
          console.error("Error re-subscribing:", updateError);
          return NextResponse.json(
            { error: "Failed to re-subscribe" },
            { status: 500 }
          );
        }

        return NextResponse.json(
          { message: "Successfully re-subscribed to newsletter" },
          { status: 200 }
        );
      }
    }

    // Store new subscription in database
    const { data, error } = await supabase
      .from("newsletter_subscribers")
      .insert({
        email,
        subscribed: true,
        source: "website",
        subscribed_at: new Date().toISOString(),
      })
      .select()
      .single();

    if (error) {
      console.error("Supabase error:", error);
      return NextResponse.json(
        { error: "Failed to subscribe to newsletter" },
        { status: 500 }
      );
    }

    // Log successful subscription
    console.log("Newsletter subscription stored:", data);

    return NextResponse.json(
      { message: "Successfully subscribed to newsletter", data },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error processing newsletter subscription:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
