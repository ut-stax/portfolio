"use client";

import { useState, useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle, AlertCircle, Loader2, User, Mail, MessageSquare, FileText, Shield } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card, CardContent } from "@/components/ui/Card";

// Type declarations for Google reCAPTCHA
declare global {
  interface Window {
    grecaptcha: {
      render: (container: string | HTMLElement, options: { sitekey: string; theme?: string; size?: string }) => Promise<string>;
      execute: (widgetId: string, options: { action: string }) => Promise<string>;
      reset: (widgetId?: string) => void;
    };
  }
}

// Contact form schema
const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().min(5, "Subject must be at least 5 characters").optional().default(""),
  message: z.string().min(10, "Message must be at least 10 characters"),
  recaptchaToken: z.string().optional().default(""),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [recaptchaLoaded, setRecaptchaLoaded] = useState(false);
  const recaptchaRef = useRef<HTMLDivElement>(null);
  const grecaptchaRef = useRef<typeof window.grecaptcha | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
      recaptchaToken: "",
    },
  });

  // Load Google reCAPTCHA script
  useEffect(() => {
    const loadRecaptcha = () => {
      if (typeof window !== "undefined" && window.grecaptcha) {
        setRecaptchaLoaded(true);
        return;
      }

      const script = document.createElement("script");
      script.src = "https://www.google.com/recaptcha/api.js";
      script.async = true;
      script.defer = true;
      script.onload = () => {
        setRecaptchaLoaded(true);
      };
      document.head.appendChild(script);
    };

    loadRecaptcha();
  }, []);

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      // Get reCAPTCHA token if reCAPTCHA is loaded and site key is configured
      let recaptchaToken = data.recaptchaToken;
      const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;
      
      if (siteKey && siteKey !== "your-recaptcha-site-key" && window.grecaptcha && recaptchaRef.current) {
        try {
          recaptchaToken = await window.grecaptcha.render(recaptchaRef.current, {
            sitekey: siteKey,
            theme: "dark",
            size: "invisible",
          });
          // For invisible reCAPTCHA, we need to execute it
          const token = await window.grecaptcha.execute(recaptchaToken, {
            action: "contact_form",
          });
          recaptchaToken = token;
        } catch (recaptchaError) {
          console.warn("reCAPTCHA error:", recaptchaError);
          // Continue without reCAPTCHA token if it fails
        }
      }

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...data,
          recaptchaToken,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to send message");
      }

      setSubmitStatus("success");
      reset();
    } catch (error) {
      console.error("Contact form error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card variant="default" className="w-full">
      <CardContent className="p-6">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Name Field */}
          <div className="space-y-2">
            <label htmlFor="name" className="text-sm font-medium">
              Your Name <span className="text-primary">*</span>
            </label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted" />
              <input
                id="name"
                type="text"
                placeholder="John Doe"
                {...register("name")}
                className={`w-full pl-10 pr-4 py-3 bg-background-secondary border rounded-lg focus:outline-none focus:ring-2 transition-colors ${
                  errors.name
                    ? "border-destructive focus:ring-destructive"
                    : "border-border focus:ring-primary"
                }`}
              />
            </div>
            {errors.name && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-sm text-destructive flex items-center gap-1"
              >
                <AlertCircle className="h-3 w-3" />
                {errors.name.message}
              </motion.p>
            )}
          </div>

          {/* Email Field */}
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium">
              Email Address <span className="text-primary">*</span>
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted" />
              <input
                id="email"
                type="email"
                placeholder="john@example.com"
                {...register("email")}
                className={`w-full pl-10 pr-4 py-3 bg-background-secondary border rounded-lg focus:outline-none focus:ring-2 transition-colors ${
                  errors.email
                    ? "border-destructive focus:ring-destructive"
                    : "border-border focus:ring-primary"
                }`}
              />
            </div>
            {errors.email && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-sm text-destructive flex items-center gap-1"
              >
                <AlertCircle className="h-3 w-3" />
                {errors.email.message}
              </motion.p>
            )}
          </div>

          {/* Subject Field */}
          <div className="space-y-2">
            <label htmlFor="subject" className="text-sm font-medium">
              Subject <span className="text-muted text-xs">(optional)</span>
            </label>
            <div className="relative">
              <FileText className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted" />
              <input
                id="subject"
                type="text"
                placeholder="What's this about?"
                {...register("subject")}
                className={`w-full pl-10 pr-4 py-3 bg-background-secondary border rounded-lg focus:outline-none focus:ring-2 transition-colors ${
                  errors.subject
                    ? "border-destructive focus:ring-destructive"
                    : "border-border focus:ring-primary"
                }`}
              />
            </div>
            {errors.subject && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-sm text-destructive flex items-center gap-1"
              >
                <AlertCircle className="h-3 w-3" />
                {errors.subject.message}
              </motion.p>
            )}
          </div>

          {/* Message Field */}
          <div className="space-y-2">
            <label htmlFor="message" className="text-sm font-medium">
              Message <span className="text-primary">*</span>
            </label>
            <div className="relative">
              <MessageSquare className="absolute left-3 top-4 h-4 w-4 text-muted" />
              <textarea
                id="message"
                rows={5}
                placeholder="Tell me about your project, idea, or just say hi!"
                {...register("message")}
                className={`w-full pl-10 pr-4 py-3 bg-background-secondary border rounded-lg focus:outline-none focus:ring-2 transition-colors resize-none ${
                  errors.message
                    ? "border-destructive focus:ring-destructive"
                    : "border-border focus:ring-primary"
                }`}
              />
            </div>
            {errors.message && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-sm text-destructive flex items-center gap-1"
              >
                <AlertCircle className="h-3 w-3" />
                {errors.message.message}
              </motion.p>
            )}
          </div>

          {/* reCAPTCHA */}
          <div className="flex items-center gap-2 text-sm text-muted">
            {/* reCAPTCHA container - will be rendered by Google reCAPTCHA */}
            <div ref={recaptchaRef} id="recaptcha-container" />
            <Shield className="h-4 w-4" />
            <span>This site is protected by reCAPTCHA and the Google Privacy Policy apply.</span>
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            size="lg"
            className="w-full"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                Sending...
              </>
            ) : (
              <>
                <Send className="h-4 w-4 mr-2" />
                Send Message
              </>
            )}
          </Button>

          {/* Success/Error Messages */}
          <AnimatePresence mode="wait">
            {submitStatus === "success" && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="flex items-center gap-2 p-4 bg-emerald-500/10 border border-emerald-500/30 rounded-lg text-emerald-400"
              >
                <CheckCircle className="h-5 w-5" />
                <span>Thanks for reaching out! I'll get back to you soon.</span>
              </motion.div>
            )}

            {submitStatus === "error" && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="flex items-center gap-2 p-4 bg-destructive/10 border border-destructive/30 rounded-lg text-destructive"
              >
                <AlertCircle className="h-5 w-5" />
                <span>Oops! Something went wrong. Please try again.</span>
              </motion.div>
            )}
          </AnimatePresence>
        </form>
      </CardContent>
    </Card>
  );
}
