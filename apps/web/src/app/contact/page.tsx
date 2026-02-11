import type { Metadata } from "next";
import Link from "next/link";
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Send, MessageSquare } from "lucide-react";
import { ContactForm } from "@/components/forms/ContactForm";
import { NewsletterForm } from "@/components/forms/NewsletterForm";
import { FadeIn } from "@/components/animations/FramerWrapper";

export const metadata: Metadata = {
  title: "Contact | Utkarsh Tripathi",
  description:
    "Get in touch with Utkarsh Tripathi for collaborations, projects, or just to say hi. Available for freelance work and exciting opportunities.",
};

export default function ContactPage() {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "tripathiutkarsh790@gmail.com",
      href: "mailto:tripathiutkarsh790@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 6265655707",
      href: "tel:+916265655707",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Gwalior, M.P. 474020, India",
      href: null,
    },
  ];

  const socialLinks = [
    { href: "https://github.com", icon: Github, label: "GitHub" },
    { href: "https://www.linkedin.com/in/utkarsh-tripathi-399206283/", icon: Linkedin, label: "LinkedIn" },
    { href: "https://twitter.com", icon: Twitter, label: "Twitter" },
  ];

  return (
    <main className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-background-secondary/30 to-background">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Get In <span className="text-primary">Touch</span>
            </h1>
            <p className="text-lg text-muted mb-8">
              Have a project in mind or just want to say hi? I'd love to hear from you. Fill out the form below
              and I'll get back to you as soon as possible.
            </p>
            <div className="flex justify-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-background-secondary rounded-full hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Info */}
            <FadeIn>
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                  <p className="text-muted mb-8">
                    Feel free to reach out through any of these channels. I'm always open to discussing new projects,
                    creative ideas, or opportunities to be part of your vision.
                  </p>
                </div>

                <div className="space-y-6">
                  {contactInfo.map((item) => (
                    <div key={item.label} className="flex items-start gap-4">
                      <div className="p-3 bg-primary/10 rounded-lg text-primary">
                        <item.icon className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">{item.label}</h3>
                        {item.href ? (
                          <a
                            href={item.href}
                            className="text-muted hover:text-primary transition-colors"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-muted">{item.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Availability */}
                <div className="mt-8 p-6 bg-gradient-to-r from-primary/10 to-orange-500/10 rounded-xl border border-primary/20">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                    <span className="font-semibold">Available for freelance work</span>
                  </div>
                  <p className="text-sm text-muted">
                    Currently accepting new projects and collaboration opportunities. Response time: within 24-48
                    hours.
                  </p>
                </div>
              </div>
            </FadeIn>

            {/* Contact Form */}
            <FadeIn delay={0.2}>
              <div>
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                  <MessageSquare className="h-6 w-6 text-primary" />
                  Send a Message
                </h2>
                <ContactForm />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-background-secondary/30">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center">
            <FadeIn>
              <h2 className="text-2xl font-bold mb-4">Subscribe to My Newsletter</h2>
              <p className="text-muted mb-6">
                Stay updated with my latest projects, blog posts, and tech insights. No spam, just quality content.
              </p>
              <NewsletterForm />
              <p className="text-xs text-muted mt-4">
                By subscribing, you agree to receive emails from me. You can unsubscribe at any time.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="container-custom">
          <FadeIn>
            <h2 className="text-2xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {[
                {
                  q: "What services do you offer?",
                  a: "I specialize in web development using React, Next.js, and modern frontend technologies. I also work with AI/ML applications, building intelligent solutions using Python and Streamlit.",
                },
                {
                  q: "What is your typical project timeline?",
                  a: "Project timelines vary based on scope and complexity. A simple website takes 2-4 weeks, while more complex applications may take 2-3 months. I'll provide a detailed timeline after understanding your requirements.",
                },
                {
                  q: "Do you work with clients remotely?",
                  a: "Absolutely! I'm open to working with clients worldwide. Most of my collaboration happens remotely through video calls, emails, and project management tools.",
                },
                {
                  q: "What are your payment terms?",
                  a: "I typically require a 50% upfront payment to begin work, with the remaining 50% upon completion. For larger projects, we can discuss milestone-based payments.",
                },
              ].map((faq, index) => (
                <div
                  key={index}
                  className="p-6 bg-background-secondary/50 rounded-xl border border-border"
                >
                  <h3 className="font-semibold mb-2">{faq.q}</h3>
                  <p className="text-sm text-muted">{faq.a}</p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
