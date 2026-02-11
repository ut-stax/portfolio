"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Trophy, Medal, Newspaper, GraduationCap, ExternalLink, Calendar } from "lucide-react";
import { Card, CardContent } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { FadeIn, SlideIn, GlowOnHover, ScaleOnHover } from "@/components/animations/FramerWrapper";

interface Achievement {
  id: number;
  icon: string;
  title: string;
  organization: string;
  date: string;
  description: string;
  type: "award" | "media" | "milestone";
  credentialLink?: string;
}

const achievements: Achievement[] = [
  {
    id: 1,
    icon: "🥇",
    title: "3rd Place – Internal Smart India Hackathon (SIH) 2025",
    organization: "Amity University Madhya Pradesh",
    date: "February 2025",
    description:
      "Won 3rd place in the Internal Smart India Hackathon 2025. Developed an innovative solution addressing real-world problems through technology and teamwork.",
    type: "award",
    credentialLink: "https://sih.gov.in",
  },
  {
    id: 2,
    icon: "🥈",
    title: "Runner-Up – Innovate 2025 Smart Hackathon",
    organization: "Smart India Hackathon",
    date: "April 2025",
    description:
      "Achieved Runner-Up position among 300+ teams in the Innovate 2025 Smart Hackathon. Demonstrated excellence in problem-solving and implementation.",
    type: "award",
    credentialLink: "https://innovate.gov.in",
  },
  {
    id: 3,
    icon: "🥉",
    title: "3rd Place – Cyber Security Hackathon",
    organization: "M.P. Police",
    date: "February 2025",
    description:
      "Secured 3rd place in the Cyber Security Hackathon organized by M.P. Police. Focused on cybersecurity awareness and practical solutions.",
    type: "award",
    credentialLink: "https://mppolice.gov.in",
  },
  {
    id: 4,
    icon: "📰",
    title: "Media Feature – Dainik Bhaskar",
    organization: "Dainik Bhaskar",
    date: "February 2025",
    description:
      "Featured in Dainik Bhaskar newspaper for the Cybersecurity Awareness Hackathon. Recognized for contributions to cybersecurity awareness and innovation.",
    type: "media",
  },
  {
    id: 5,
    icon: "🎓",
    title: "First Paid Freelance Project – PrimeVista Dairy",
    organization: "PrimeVista Dairy",
    date: "August 2023",
    description:
      "Completed my first paid freelance project – a professional website for PrimeVista Dairy. Marked the beginning of my professional web development journey.",
    type: "milestone",
    credentialLink: "https://primevista.in",
  },
];

const achievementColors: Record<string, string> = {
  award: "from-yellow-500/20 to-amber-500/20 border-yellow-500/30",
  media: "from-blue-500/20 to-cyan-500/20 border-blue-500/30",
  milestone: "from-green-500/20 to-emerald-500/20 border-green-500/30",
};

const achievementBadges: Record<string, string> = {
  award: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
  media: "bg-blue-500/20 text-blue-400 border-blue-500/30",
  milestone: "bg-green-500/20 text-green-400 border-green-500/30",
};

export function Achievements() {
  const [selectedAchievement, setSelectedAchievement] = useState<Achievement | null>(null);

  const stats = [
    { label: "Hackathons Won", value: 3, icon: Trophy },
    { label: "Awards", value: 3, icon: Medal },
    { label: "Media Features", value: 1, icon: Newspaper },
    { label: "Freelance Projects", value: 1, icon: GraduationCap },
  ];

  return (
    <section id="achievements" className="section-padding bg-background-secondary/30">
      <div className="container-custom">
        {/* Section Header */}
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            Achievements & <span className="text-primary">Awards</span>
          </h2>
          <p className="text-muted text-center max-w-2xl mx-auto mb-12">
            A showcase of hackathon wins, awards, and professional milestones
          </p>
        </FadeIn>

        {/* Stats */}
        <FadeIn delay={0.1}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {stats.map((stat, index) => (
              <Card key={stat.label} variant="outlined" className="text-center p-4">
                <CardContent className="p-0">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, type: "spring", stiffness: 200 }}
                    className="flex flex-col items-center"
                  >
                    <stat.icon className="h-8 w-8 text-primary mb-2" />
                    <p className="text-3xl font-bold text-primary">{stat.value}</p>
                    <p className="text-sm text-muted">{stat.label}</p>
                  </motion.div>
                </CardContent>
              </Card>
            ))}
          </div>
        </FadeIn>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <ScaleOnHover>
                <Card
                  variant="default"
                  hoverEffect="lift"
                  className={`h-full overflow-hidden relative bg-gradient-to-br ${achievementColors[achievement.type]} border`}
                  onClick={() => setSelectedAchievement(achievement)}
                >
                  {/* Trophy Glow Effect */}
                  <motion.div
                    className="absolute top-0 right-0 p-2 opacity-20"
                    animate={{
                      rotate: [0, 10, -10, 0],
                      scale: [1, 1.1, 1],
                    }}
                    transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                  >
                    <Trophy className="h-12 w-12 text-primary" />
                  </motion.div>

                  <CardContent className="p-6 relative z-10">
                    {/* Icon */}
                    <div className="text-4xl mb-4">{achievement.icon}</div>

                    {/* Badge */}
                    <Badge className={`mb-3 ${achievementBadges[achievement.type]} border capitalize`}>
                      {achievement.type}
                    </Badge>

                    {/* Title */}
                    <h3 className="text-lg font-semibold mb-2">{achievement.title}</h3>

                    {/* Organization */}
                    <p className="text-primary text-sm mb-2">{achievement.organization}</p>

                    {/* Date */}
                    <div className="flex items-center gap-2 text-xs text-muted mb-3">
                      <Calendar className="h-3 w-3" />
                      <span>{achievement.date}</span>
                    </div>

                    {/* Description */}
                    <p className="text-muted text-sm line-clamp-3">{achievement.description}</p>

                    {/* Credential Link */}
                    {achievement.credentialLink && (
                      <div className="mt-4 pt-4 border-t border-border/50">
                        <a
                          href={achievement.credentialLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-xs text-primary hover:text-primary/80 transition-colors"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <ExternalLink className="h-3 w-3" />
                          Verify Credential
                        </a>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </ScaleOnHover>
            </motion.div>
          ))}
        </div>

        {/* Media Coverage Section */}
        <FadeIn delay={0.3}>
          <div className="mt-16">
            <h3 className="text-2xl font-bold mb-6 text-center">
              Media <span className="text-primary">Coverage</span>
            </h3>
            <Card variant="outlined" className="p-6 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border-blue-500/20">
              <CardContent className="p-0 flex flex-col md:flex-row items-center gap-6">
                <Newspaper className="h-16 w-16 text-blue-400" />
                <div className="flex-1 text-center md:text-left">
                  <Badge className="mb-2 bg-blue-500/20 text-blue-400 border-blue-500/30">
                    Featured
                  </Badge>
                  <h4 className="text-lg font-semibold mb-1">Dainik Bhaskar</h4>
                  <p className="text-muted text-sm mb-2">
                    Recognized in Dainik Bhaskar newspaper for contributions to the Cybersecurity Awareness
                    Hackathon organized by M.P. Police.
                  </p>
                  <p className="text-xs text-muted">February 2025</p>
                </div>
                <Button variant="outline" size="sm">
                  Read Article
                </Button>
              </CardContent>
            </Card>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
