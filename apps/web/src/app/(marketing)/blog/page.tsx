import type { Metadata } from "next";
import { Blog } from "@/components/sections/Blog";

export const metadata: Metadata = {
  title: "Blog | Utkarsh Tripathi",
  description:
    "Insights, tutorials, and thoughts on web development, AI, and technology. Read about Next.js, React, TypeScript, and more.",
};

export default function BlogPage() {
  return (
    <main className="min-h-screen pt-16">
      <section className="py-20 bg-gradient-to-b from-background-secondary/30 to-background">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              My <span className="text-primary">Blog</span>
            </h1>
            <p className="text-lg text-muted">
              Insights, tutorials, and thoughts on web development, AI, and technology. Sharing knowledge and
              experiences from my journey as a developer.
            </p>
          </div>
        </div>
      </section>

      <Blog />
    </main>
  );
}
