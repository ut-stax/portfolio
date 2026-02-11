import type { Metadata } from "next";
import { Projects } from "@/components/sections/Projects";

export const metadata: Metadata = {
  title: "Projects | Utkarsh Tripathi",
  description:
    "Explore my portfolio of web development and AI projects - showcasing innovative solutions using React, Next.js, Python, and modern technologies.",
};

export default function ProjectsPage() {
  return (
    <main className="min-h-screen pt-16">
      <Projects />
    </main>
  );
}
