"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Code2, Database, Layout, Server, Terminal, Palette, Brain, Wrench } from "lucide-react";
import { Card, CardContent } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { FadeIn, SlideIn } from "@/components/animations/FramerWrapper";

type SkillCategory = "all" | "programming" | "frontend" | "backend" | "frameworks" | "design" | "database" | "data_science" | "tools";

interface Skill {
  name: string;
  category: SkillCategory;
  proficiency: number;
  level: "Expert" | "Advanced" | "Intermediate" | "Learning";
}

const skills: Skill[] = [
  // Programming
  { name: "C", category: "programming", proficiency: 85, level: "Intermediate" },
  { name: "C++", category: "programming", proficiency: 95, level: "Expert" },
  { name: "Java", category: "programming", proficiency: 92, level: "Expert" },
  { name: "Python", category: "programming", proficiency: 85, level: "Intermediate" },
  { name: "SQL", category: "programming", proficiency: 85, level: "Intermediate" },
  // Frontend
  { name: "HTML", category: "frontend", proficiency: 85, level: "Intermediate" },
  { name: "CSS", category: "frontend", proficiency: 85, level: "Intermediate" },
  { name: "JavaScript", category: "frontend", proficiency: 75, level: "Intermediate" },
  { name: "Tailwind CSS", category: "frontend", proficiency: 75, level: "Intermediate" },
  { name: "Bootstrap", category: "frontend", proficiency: 75, level: "Intermediate" },
  { name: "React", category: "frontend", proficiency: 60, level: "Learning" },
  { name: "Next.js", category: "frontend", proficiency: 55, level: "Learning" },
  // Backend
  { name: "Firebase", category: "backend", proficiency: 75, level: "Intermediate" },
  { name: "Supabase", category: "backend", proficiency: 70, level: "Intermediate" },
  // Frameworks
  { name: "Streamlit", category: "frameworks", proficiency: 60, level: "Learning" },
  { name: "Flask", category: "frameworks", proficiency: 50, level: "Learning" },
  // Design
  { name: "Canva", category: "design", proficiency: 95, level: "Expert" },
  { name: "Figma", category: "design", proficiency: 85, level: "Intermediate" },
  { name: "Framer", category: "design", proficiency: 80, level: "Intermediate" },
  { name: "Adobe XD", category: "design", proficiency: 75, level: "Intermediate" },
  // Database
  { name: "MySQL", category: "database", proficiency: 75, level: "Intermediate" },
  { name: "MongoDB", category: "database", proficiency: 60, level: "Learning" },
  { name: "PostgreSQL", category: "database", proficiency: 65, level: "Learning" },
  // Data Science
  { name: "Machine Learning", category: "data_science", proficiency: 60, level: "Learning" },
  { name: "NLP", category: "data_science", proficiency: 55, level: "Learning" },
  { name: "Data Science", category: "data_science", proficiency: 65, level: "Learning" },
  // Tools
  { name: "Git", category: "tools", proficiency: 80, level: "Learning" },
  { name: "Version Control", category: "tools", proficiency: 80, level: "Learning" },
];

const categories: { id: SkillCategory; label: string; icon: React.ReactNode }[] = [
  { id: "all", label: "All", icon: <Code2 className="h-4 w-4" /> },
  { id: "programming", label: "Programming", icon: <Terminal className="h-4 w-4" /> },
  { id: "frontend", label: "Frontend", icon: <Layout className="h-4 w-4" /> },
  { id: "backend", label: "Backend", icon: <Server className="h-4 w-4" /> },
  { id: "frameworks", label: "Frameworks", icon: <Brain className="h-4 w-4" /> },
  { id: "design", label: "Design", icon: <Palette className="h-4 w-4" /> },
  { id: "database", label: "Database", icon: <Database className="h-4 w-4" /> },
  { id: "data_science", label: "Data Science", icon: <Brain className="h-4 w-4" /> },
  { id: "tools", label: "Tools", icon: <Wrench className="h-4 w-4" /> },
];

const levelColors: Record<string, string> = {
  Expert: "bg-success/20 text-success border-success/30",
  Advanced: "bg-primary/20 text-primary border-primary/30",
  Intermediate: "bg-blue-500/20 text-blue-400 border-blue-500/30",
  Learning: "bg-warning/20 text-warning border-warning/30",
};

export function Skills() {
  const [activeCategory, setActiveCategory] = useState<SkillCategory>("all");

  const filteredSkills = activeCategory === "all"
    ? skills
    : skills.filter((skill) => skill.category === activeCategory);

  return (
    <section id="skills" className="section-padding bg-background-secondary/50">
      <div className="container-custom">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            Technical <span className="text-primary">Skills</span>
          </h2>
          <p className="text-muted text-center max-w-2xl mx-auto mb-12">
            A comprehensive overview of my technical competencies across various domains
          </p>
        </FadeIn>

        {/* Category Filters */}
        <FadeIn delay={0.1}>
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === category.id
                    ? "bg-primary text-primary-foreground shadow-glow"
                    : "bg-background-secondary text-muted hover:text-foreground hover:bg-background-tertiary"
                }`}
              >
                {category.icon}
                {category.label}
              </button>
            ))}
          </div>
        </FadeIn>

        {/* Skills Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
        >
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <SlideIn delay={index * 0.05}>
                  <Card
                    variant="default"
                    hoverEffect="lift"
                    className="group cursor-pointer"
                  >
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="font-semibold group-hover:text-primary transition-colors">
                          {skill.name}
                        </h3>
                        <Badge
                          variant="outline"
                          className={`text-xs ${levelColors[skill.level]}`}
                        >
                          {skill.level}
                        </Badge>
                      </div>

                      {/* Progress Bar */}
                      <div className="space-y-2">
                        <div className="flex justify-between text-xs text-muted">
                          <span>Proficiency</span>
                          <span>{skill.proficiency}%</span>
                        </div>
                        <div className="h-2 bg-background-tertiary rounded-full overflow-hidden">
                          <motion.div
                            className="h-full bg-gradient-to-r from-primary to-primary/60 rounded-full"
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.proficiency}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                          />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </SlideIn>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Stats Summary */}
        <FadeIn delay={0.5}>
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: "Total Skills", value: skills.length },
              { label: "Expert Level", value: skills.filter((s) => s.level === "Expert").length },
              { label: "Categories", value: categories.length - 1 },
              { label: "Learning", value: skills.filter((s) => s.level === "Learning").length },
            ].map((stat, index) => (
              <Card key={stat.label} variant="outlined" className="text-center p-4">
                <CardContent className="p-0">
                  <p className="text-3xl font-bold text-primary">{stat.value}</p>
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
