"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Download, MapPin, Calendar, Award, Code, Brain, Users } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card, CardContent } from "@/components/ui/Card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/Avatar";
import { FadeIn, SlideIn, ScaleOnHover } from "@/components/animations/FramerWrapper";

const bio = `B.Tech IT student with a specialization in Data Science, demonstrating skills in web development and artificial intelligence. Committed to solving real-world problems through innovative projects and teamwork. Proven ability to contribute effectively in collaborative environments.`;

const stats = [
  { icon: Calendar, label: "Education", value: "B.Tech IT (6th Sem)" },
  { icon: Code, label: "Skills", value: "15+ Technical" },
  { icon: Award, label: "Projects", value: "5+ Completed" },
  { icon: Users, label: "Hackathons", value: "2+ Won" },
];

const journey = [
  { year: "2023", title: "Started B.Tech IT", description: "Embarked on journey at Amity University Madhya Pradesh" },
  { year: "2024", title: "First Hackathon", description: "Won multiple hackathons including AmiHack 2K24" },
  { year: "2025", title: "SIH 2025", description: "3rd Place in Internal Smart India Hackathon" },
];

export function About() {
  return (
    <section id="about" className="section-padding">
      <div className="container-custom">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            About <span className="text-primary">Me</span>
          </h2>
        </FadeIn>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Profile Section */}
          <div className="space-y-8">
            <FadeIn delay={0.1}>
              <Card variant="glass" className="overflow-hidden">
                <CardContent className="p-8">
                  <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
                    {/* Avatar */}
                    <ScaleOnHover scale={1.05}>
                      <Avatar size="xl" className="border-4 border-primary/20">
                        <AvatarImage src="/images/profile/avatar.jpg" alt="Utkarsh Tripathi" />
                        <AvatarFallback className="text-2xl">UT</AvatarFallback>
                      </Avatar>
                    </ScaleOnHover>

                    {/* Info */}
                    <div className="flex-1 text-center md:text-left">
                      <h3 className="text-2xl font-bold mb-2">Utkarsh Tripathi</h3>
                      <p className="text-muted mb-4 font-mono">Developer / Problem Solver</p>

                      <div className="flex flex-wrap justify-center md:justify-start gap-4 text-sm text-muted">
                        <div className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          <span>Gwalior, M.P.</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          <span>6th Sem, GPA: 8.85</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </FadeIn>

            {/* Bio */}
            <FadeIn delay={0.2}>
              <Card variant="default" hoverEffect="lift">
                <CardContent className="p-6">
                  <h4 className="text-lg font-semibold mb-4">My Story</h4>
                  <p className="text-muted leading-relaxed">{bio}</p>
                </CardContent>
              </Card>
            </FadeIn>

            {/* Quick Stats */}
            <FadeIn delay={0.3}>
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, index) => (
                  <ScaleOnHover key={stat.label}>
                    <Card variant="outlined" className="text-center p-4">
                      <CardContent className="p-0">
                        <stat.icon className="h-6 w-6 mx-auto mb-2 text-primary" />
                        <p className="text-2xl font-bold">{stat.value}</p>
                        <p className="text-sm text-muted">{stat.label}</p>
                      </CardContent>
                    </Card>
                  </ScaleOnHover>
                ))}
              </div>
            </FadeIn>

            {/* Resume Download */}
            <FadeIn delay={0.4}>
              <Link href="/resume.pdf" target="_blank">
                <Button size="lg" className="w-full group">
                  <Download className="mr-2 h-5 w-5" />
                  Download Resume
                </Button>
              </Link>
            </FadeIn>
          </div>

          {/* Journey Timeline */}
          <div className="space-y-6">
            <FadeIn delay={0.2}>
              <h3 className="text-xl font-semibold mb-6">My Journey</h3>
            </FadeIn>

            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary to-primary/20" />

              {journey.map((item, index) => (
                <SlideIn
                  key={item.year}
                  direction="up"
                  delay={0.3 + index * 0.1}
                  className="relative pl-10 pb-8 last:pb-0"
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-2 top-2 w-5 h-5 rounded-full bg-primary border-4 border-background-secondary" />

                  {/* Content */}
                  <Card variant="outlined" hoverEffect="scale">
                    <CardContent className="p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-sm font-mono text-primary">{item.year}</span>
                        <h4 className="font-semibold">{item.title}</h4>
                      </div>
                      <p className="text-sm text-muted">{item.description}</p>
                    </CardContent>
                  </Card>
                </SlideIn>
              ))}
            </div>

            {/* Values/Passion */}
            <FadeIn delay={0.6}>
              <Card variant="default">
                <CardContent className="p-6">
                  <h4 className="text-lg font-semibold mb-4">What I Do</h4>
                  <div className="grid gap-4">
                    <div className="flex gap-3">
                      <Brain className="h-5 w-5 text-primary shrink-0 mt-1" />
                      <div>
                        <p className="font-medium">AI & Machine Learning</p>
                        <p className="text-sm text-muted">Building intelligent systems</p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <Code className="h-5 w-5 text-primary shrink-0 mt-1" />
                      <div>
                        <p className="font-medium">Web Development</p>
                        <p className="text-sm text-muted">Modern, responsive websites</p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <Users className="h-5 w-5 text-primary shrink-0 mt-1" />
                      <div>
                        <p className="font-medium">Team Collaboration</p>
                        <p className="text-sm text-muted">Working together to solve problems</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
