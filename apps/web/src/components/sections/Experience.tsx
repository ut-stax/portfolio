"use client";

import { motion } from "framer-motion";
import { Calendar, MapPin, Building2, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { FadeIn, SlideIn } from "@/components/animations/FramerWrapper";

interface Experience {
  id: number;
  title: string;
  company: string;
  location: string;
  type: "education" | "work" | "hackathon";
  startDate: string;
  endDate: string | null;
  current: boolean;
  description: string;
  achievements?: string[];
}

const experiences: Experience[] = [
  {
    id: 1,
    title: "B.Tech IT with Data Science",
    company: "Amity University Madhya Pradesh",
    location: "Gwalior, M.P.",
    type: "education",
    startDate: "2023-07-01",
    endDate: null,
    current: true,
    description: "Currently in 6th Semester with a GPA of 8.85. Specialization in Data Science.",
    achievements: ["GPA: 8.85", "Data Science specialization"],
  },
  {
    id: 2,
    title: "Web Developer",
    company: "Freelance",
    location: "Remote",
    type: "work",
    startDate: "2025-08-01",
    endDate: "2025-11-30",
    current: false,
    description: "Building web applications for clients using modern technologies.",
    achievements: ["Delivered 5+ projects", "Client satisfaction: 100%"],
  },
  {
    id: 3,
    title: "Summer Virtual Intern",
    company: "Intern Vision",
    location: "Remote",
    type: "work",
    startDate: "2025-07-01",
    endDate: "2025-08-31",
    current: false,
    description: "Web development internship focusing on frontend technologies and best practices.",
    achievements: ["Completed 1 major project"],
  },
  {
    id: 4,
    title: "Web Developer",
    company: "Freelance",
    location: "Remote",
    type: "work",
    startDate: "2023-08-01",
    endDate: "2024-08-31",
    current: false,
    description: "First paid freelance project - PrimeVista Dairy website.",
    achievements: ["First paid project", "PrimeVista Dairy website"],
  },
  {
    id: 5,
    title: "3rd Place - Internal Smart India Hackathon (SIH) 2025",
    company: "Amity University Madhya Pradesh",
    location: "Gwalior, M.P.",
    type: "hackathon",
    startDate: "2025-02-01",
    endDate: null,
    current: true,
    description: "Won 3rd place in Internal Smart India Hackathon 2025.",
    achievements: ["3rd Place", "Innovative solution presentation"],
  },
  {
    id: 6,
    title: "Runner-Up - Innovate 2025 Smart Hackathon",
    company: "Smart India Hackathon",
    location: "Gwalior, M.P.",
    type: "hackathon",
    startDate: "2025-04-01",
    endDate: null,
    current: true,
    description: "Runner-Up position among 300+ teams in Innovate 2025 Smart Hackathon.",
    achievements: ["Runner-Up", "300+ teams participated"],
  },
  {
    id: 7,
    title: "3rd Place - Cyber Security Hackathon",
    company: "M.P. Police",
    location: "Gwalior, M.P.",
    type: "hackathon",
    startDate: "2025-02-01",
    endDate: null,
    current: true,
    description: "3rd Place in Cyber Security Hackathon organized by M.P. Police.",
    achievements: ["3rd Place", "Security solution implementation"],
  },
];

const typeColors = {
  education: "bg-blue-500/20 text-blue-400 border-blue-500/30",
  work: "bg-primary/20 text-primary border-primary/30",
  hackathon: "bg-purple-500/20 text-purple-400 border-purple-500/30",
};

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", { month: "short", year: "numeric" });
};

export function Experience() {
  return (
    <section id="experience" className="section-padding">
      <div className="container-custom">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            Experience & <span className="text-primary">Achievements</span>
          </h2>
          <p className="text-muted text-center max-w-2xl mx-auto mb-12">
            My professional journey and accomplishments
          </p>
        </FadeIn>

        {/* Experience Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-transparent md:-translate-x-0.5" />

          <div className="space-y-8">
            {experiences.map((experience, index) => (
              <SlideIn
                key={experience.id}
                direction={index % 2 === 0 ? "right" : "left"}
                delay={index * 0.1}
                className={`relative flex flex-col md:flex-row gap-4 ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background md:-translate-x-1/2 z-10" />

                {/* Content Card */}
                <div className="ml-12 md:ml-0 md:w-[calc(50%-2rem)]">
                  <Card variant="default" hoverEffect="lift">
                    <CardContent className="p-6">
                      {/* Type Badge */}
                      <div className="flex items-center gap-2 mb-3">
                        <Badge className={`${typeColors[experience.type]} border`}>
                          <Award className="h-3 w-3 mr-1" />
                          {experience.type.charAt(0).toUpperCase() + experience.type.slice(1)}
                        </Badge>
                        {experience.current && (
                          <Badge variant="success">Current</Badge>
                        )}
                      </div>

                      {/* Title & Company */}
                      <h3 className="text-lg font-semibold mb-1">{experience.title}</h3>
                      <div className="flex items-center gap-2 text-muted mb-3">
                        <Building2 className="h-4 w-4" />
                        <span>{experience.company}</span>
                      </div>

                      {/* Location & Dates */}
                      <div className="flex flex-wrap items-center gap-3 text-sm text-muted mb-4">
                        <div className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          <span>{experience.location}</span>
                        </div>
                        <span>•</span>
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          <span>
                            {formatDate(experience.startDate)} -{" "}
                            {experience.endDate ? formatDate(experience.endDate) : "Present"}
                          </span>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-muted text-sm mb-4">{experience.description}</p>

                      {/* Achievements */}
                      {experience.achievements && experience.achievements.length > 0 && (
                        <div className="space-y-2">
                          <p className="text-xs font-medium text-muted uppercase tracking-wider">
                            Key Achievements
                          </p>
                          <ul className="space-y-1">
                            {experience.achievements.map((achievement, i) => (
                              <li
                                key={i}
                                className="flex items-center gap-2 text-sm text-muted"
                              >
                                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                                {achievement}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </div>
              </SlideIn>
            ))}
          </div>
        </div>

        {/* Summary Stats */}
        <FadeIn delay={0.5}>
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: "Years Experience", value: "2+" },
              { label: "Hackathons Won", value: "2+" },
              { label: "Projects Completed", value: "5+" },
              { label: "Technologies", value: "15+" },
            ].map((stat, index) => (
              <Card key={stat.label} variant="outlined" className="text-center p-6">
                <CardContent className="p-0">
                  <p className="text-4xl font-bold text-primary mb-1">{stat.value}</p>
                  <p className="text-sm text-muted">{stat.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
