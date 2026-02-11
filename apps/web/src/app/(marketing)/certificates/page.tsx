import type { Metadata } from "next";
import { Certificates } from "@/components/sections/Certificates";

export const metadata: Metadata = {
  title: "Certificates | Utkarsh Tripathi",
  description:
    "Professional certifications and credentials earned by Utkarsh Tripathi - including hackathon awards, workshops, and open source contributions.",
};

export default function CertificatesPage() {
  return (
    <main className="min-h-screen pt-16">
      <section className="py-20 bg-gradient-to-b from-background-secondary/30 to-background">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              My <span className="text-primary">Certificates</span>
            </h1>
            <p className="text-lg text-muted">
              Professional certifications, verified credentials, and achievements that demonstrate my
              commitment to continuous learning and excellence.
            </p>
          </div>
        </div>
      </section>

      <Certificates />
    </main>
  );
}
