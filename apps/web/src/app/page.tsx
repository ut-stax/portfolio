import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Experience } from "@/components/sections/Experience";
import { Projects } from "@/components/sections/Projects";
import { Blog } from "@/components/sections/Blog";
import { Certificates } from "@/components/sections/Certificates";

export const metadata: Metadata = {
  title: "Utkarsh Tripathi | Developer Portfolio",
  description:
    "B.Tech IT student specializing in Data Science. Building innovative solutions through web development and AI.",
};

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Blog />
      <Certificates />
    </main>
  );
}
