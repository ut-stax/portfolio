import type { Metadata } from "next";
import { Achievements } from "@/components/sections/Achievements";

export const metadata: Metadata = {
  title: "Achievements | Utkarsh Tripathi",
  description:
    "Showcasing hackathon wins, awards, and professional milestones of Utkarsh Tripathi - B.Tech IT student and developer.",
};

export default function AchievementsPage() {
  return (
    <main className="min-h-screen pt-16">
      <section className="py-20 bg-gradient-to-b from-background-secondary/30 to-background">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              My <span className="text-primary">Achievements</span>
            </h1>
            <p className="text-lg text-muted">
              A journey through hackathon wins, awards, and professional milestones that have shaped my
              development career.
            </p>
          </div>
        </div>
      </section>

      <Achievements />
    </main>
  );
}
