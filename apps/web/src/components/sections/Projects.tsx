"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, Eye, Heart, Calendar, Tag } from "lucide-react";
import { Card, CardContent } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { FadeIn, SlideIn, ScaleOnHover } from "@/components/animations/FramerWrapper";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/Modal";

type ProjectCategory = "all" | "featured" | "web" | "ai" | "data" | "other";

interface Project {
  id: number;
  title: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  category: Exclude<ProjectCategory, "all">;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  thumbnail: string;
  featured: boolean;
  startDate: string;
  stats?: {
    views: number;
    likes: number;
  };
}

const projects: Project[] = [
  {
    id: 1,
    title: "Brand Pulse",
    slug: "brand-pulse",
    shortDescription: "AI-powered brand sentiment analysis tool",
    fullDescription: "Brand Pulse is an AI-powered brand sentiment analysis tool that helps businesses track and analyze brand perception across social media platforms. Using advanced NLP techniques, it processes customer feedback and provides actionable insights.",
    category: "ai",
    technologies: ["React", "Python", "NLP", "Machine Learning", "Streamlit"],
    githubUrl: "https://github.com/ut-stax",
    liveUrl: "https://brand-pulse.dev",
    thumbnail: "/images/projects/brand-pulse.jpg",
    featured: true,
    startDate: "2025-01-01",
    stats: { views: 1250, likes: 89 },
  },
  {
    id: 2,
    title: "AI Book Recommender",
    slug: "ai-book-recommender",
    shortDescription: "Semantic book recommendation using sentence transformers",
    fullDescription: "AI Book Recommender uses sentence transformers and ChromaDB to provide personalized book recommendations based on semantic similarity. It analyzes reading preferences and suggests books that match your taste.",
    category: "ai",
    technologies: ["Python", "Streamlit", "ChromaDB", "NLP", "Sentence Transformers"],
    githubUrl: "https://github.com/ut-stax",
    liveUrl: "https://book-recommender.dev",
    thumbnail: "/images/projects/ai-book-recommender.jpg",
    featured: true,
    startDate: "2024-12-01",
    stats: { views: 980, likes: 67 },
  },
  {
    id: 3,
    title: "Bookly",
    slug: "bookly",
    shortDescription: "React & Firebase digital library with authentication",
    fullDescription: "Bookly is a digital library application built with React and Firebase. It features user authentication, book management, reading lists, and personalized recommendations.",
    category: "web",
    technologies: ["React", "Firebase", "Authentication", "Tailwind CSS"],
    githubUrl: "https://github.com/ut-stax",
    liveUrl: "https://bookly-87248.web.app/",
    thumbnail: "/images/projects/booky.jpg",
    featured: true,
    startDate: "2024-10-01",
    stats: { views: 2100, likes: 156 },
  },
  {
    id: 4,
    title: "AutoEDA",
    slug: "autoeda",
    shortDescription: "Streamlit automated EDA report generator",
    fullDescription: "AutoEDA is an automated Exploratory Data Analysis tool built with Streamlit. It generates comprehensive reports with visualizations, statistical summaries, and insights from raw datasets.",
    category: "data",
    technologies: ["Python", "Streamlit", "Pandas", "Matplotlib", "Seaborn"],
    githubUrl: "https://github.com/ut-stax",
    liveUrl: "https://autoeda.streamlit.app",
    thumbnail: "/images/projects/autoeda.jpg",
    featured: true,
    startDate: "2024-09-01",
    stats: { views: 1540, likes: 112 },
  },
  {
    id: 5,
    title: "Authentic AI",
    slug: "authentic-ai",
    shortDescription: "Deep learning web app for AI-generated content detection",
    fullDescription: "Authentic AI is a deep learning application that detects AI-generated content. It uses advanced machine learning models to identify text, images, and videos created by AI systems. Runner-Up at Innovate 2025 Smart Hackathon.",
    category: "ai",
    technologies: ["Python", "Deep Learning", "Flask", "TensorFlow"],
    githubUrl: "https://github.com/ut-stax/authentic-ai",
    liveUrl: "https://authentic-ai.dev",
    thumbnail: "/images/projects/authentic-ai.jpg",
    featured: true,
    startDate: "2025-03-01",
    stats: { views: 3200, likes: 245 },
  },
  {
    id: 6,
    title: "Deepfake Detection",
    slug: "deepfake-detection",
    shortDescription: "Real-time deepfake detection system",
    fullDescription: "Deepfake Detection is a real-time system that identifies manipulated videos and images. It achieved 3rd Place in the Cyber Security Hackathon organized by M.P. Police.",
    category: "ai",
    technologies: ["Python", "Computer Vision", "Deep Learning", "OpenCV"],
    githubUrl: "https://github.com/ut-stax/deepfake-detection",
    liveUrl: "https://deepfake-detector.dev",
    thumbnail: "/images/projects/deepfake-detection.jpg",
    featured: true,
    startDate: "2025-02-01",
    stats: { views: 4100, likes: 312 },
  },
  {
    id: 7,
    title: "StudyZen",
    slug: "studyzen",
    shortDescription: "AI study planner with DeepSeek AI",
    fullDescription: "StudyZen is an AI-powered study planner that helps students organize their learning schedule, set goals, and track progress using DeepSeek AI for personalized recommendations.",
    category: "ai",
    technologies: ["React", "Python", "AI", "DeepSeek", "Node.js"],
    githubUrl: "https://github.com/ut-stax/studyzen",
    liveUrl: "https://studyzen.ai",
    thumbnail: "/images/projects/studyzen.jpg",
    featured: false,
    startDate: "2025-01-01",
    stats: { views: 890, likes: 56 },
  },
  {
    id: 8,
    title: "Manasāroha",
    slug: "manasaroha",
    shortDescription: "Streamlit wellness app with mood tracking",
    fullDescription: "Manasāroha is a wellness application focused on mental health. It features mood tracking, meditation guides, and personalized wellness recommendations.",
    category: "other",
    technologies: ["Python", "Streamlit", "Wellness", "Data Visualization"],
    githubUrl: "https://github.com/ut-stax/manasaroha",
    liveUrl: "https://manasaroha.streamlit.app",
    thumbnail: "/images/projects/manasaroha.jpg",
    featured: false,
    startDate: "2024-11-01",
    stats: { views: 650, likes: 43 },
  },
  {
    id: 9,
    title: "DocConvert Pro",
    slug: "docconvert-pro",
    shortDescription: "Image-to-PDF converter with batch processing",
    fullDescription: "DocConvert Pro is a powerful document conversion tool that supports image-to-PDF conversion with batch processing capabilities. Features include drag-and-drop, preview, and customization options.",
    category: "other",
    technologies: ["Python", "GUI", "PDF", "Tkinter"],
    githubUrl: "https://github.com/ut-stax/docconvert-pro",
    liveUrl: "https://docconvert.pro",
    thumbnail: "/images/projects/docconvert-pro.jpg",
    featured: false,
    startDate: "2024-07-01",
    stats: { views: 1800, likes: 134 },
  },
  {
    id: 10,
    title: "Cricket Stats Scraper",
    slug: "cricket-stats",
    shortDescription: "Web scraping ESPN Cricinfo for cricket statistics",
    fullDescription: "Cricket Stats Scraper is a data collection tool that extracts comprehensive cricket statistics from ESPN Cricinfo. It provides player profiles, match data, and historical statistics.",
    category: "data",
    technologies: ["Python", "Web Scraping", "BeautifulSoup", "Pandas"],
    githubUrl: "https://github.com/ut-stax/cricket-stats",
    thumbnail: "/images/projects/cricket-stats.jpg",
    featured: false,
    startDate: "2024-06-01",
    stats: { views: 920, likes: 67 },
  },
  {
    id: 11,
    title: "Adidas Clone",
    slug: "adidas-clone",
    shortDescription: "E-commerce website for Indian cricket team jerseys",
    fullDescription: "Adidas Clone is an e-commerce website focused on selling official Indian cricket team sponsored jerseys. Features include product catalog, cart functionality, and user authentication.",
    category: "web",
    technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    githubUrl: "https://github.com/ut-stax/adidas-clone",
    liveUrl: "https://flipkart-clone.vercel.app",
    thumbnail: "/images/projects/adidas-clone.jpg",
    featured: false,
    startDate: "2024-05-01",
    stats: { views: 3200, likes: 189 },
  },
  {
    id: 12,
    title: "School Website",
    slug: "school-website",
    shortDescription: "Revamped school website with modern design",
    fullDescription: "School Website is a modern, responsive website built for an educational institution. Features include news sections, event calendars, student portals, and administrative dashboards.",
    category: "web",
    technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    githubUrl: "https://github.com/ut-stax/school-website",
    liveUrl: "https://school-portal.dev",
    thumbnail: "/images/projects/school-website.jpg",
    featured: false,
    startDate: "2024-04-01",
    stats: { views: 4500, likes: 234 },
  },
  {
    id: 13,
    title: "PrimeVista Dairy",
    slug: "primevista-dairy",
    shortDescription: "First paid freelance project - Dairy products company website",
    fullDescription: "PrimeVista Dairy is my first paid freelance project - a website for a dairy products company. Features include product catalog, online ordering, and company information.",
    category: "web",
    technologies: ["HTML", "CSS", "JavaScript", "Bootstrap", "PHP"],
    githubUrl: "https://github.com/ut-stax/primevista-dairy",
    liveUrl: "https://primevista.in",
    thumbnail: "/images/projects/primevista-dairy.jpg",
    featured: true,
    startDate: "2023-08-01",
    stats: { views: 5600, likes: 312 },
  },
  {
    id: 14,
    title: "Website Screenshot Generator",
    slug: "screenshot-generator",
    shortDescription: "Flask app for capturing full-page screenshots",
    fullDescription: "Website Screenshot Generator is a Flask-based application that captures full-page screenshots of websites. It uses Playwright for rendering and provides customization options.",
    category: "other",
    technologies: ["Python", "Flask", "Playwright", "Docker"],
    githubUrl: "https://github.com/ut-stax/screenshot-generator",
    liveUrl: "https://screenshot.gen",
    thumbnail: "/images/projects/screenshot-generator.jpg",
    featured: false,
    startDate: "2024-08-01",
    stats: { views: 1100, likes: 78 },
  },
];

const categories: { id: ProjectCategory; label: string; count: number }[] = [
  { id: "all", label: "All", count: projects.length },
  { id: "featured", label: "Featured", count: projects.filter((p) => p.featured).length },
  { id: "web", label: "Web Dev", count: projects.filter((p) => p.category === "web").length },
  { id: "ai", label: "AI/ML", count: projects.filter((p) => p.category === "ai").length },
  { id: "data", label: "Data", count: projects.filter((p) => p.category === "data").length },
  { id: "other", label: "Other", count: projects.filter((p) => p.category === "other").length },
];

const categoryColors: Record<string, string> = {
  featured: "bg-primary/20 text-primary border-primary/30",
  web: "bg-blue-500/20 text-blue-400 border-blue-500/30",
  ai: "bg-purple-500/20 text-purple-400 border-purple-500/30",
  data: "bg-green-500/20 text-green-400 border-green-500/30",
  other: "bg-orange-500/20 text-orange-400 border-orange-500/30",
};

export function Projects() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = activeCategory === "all"
    ? projects
    : activeCategory === "featured"
    ? projects.filter((p) => p.featured)
    : projects.filter((p) => p.category === activeCategory);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", { month: "short", year: "numeric" });
  };

  return (
    <section id="projects" className="section-padding bg-background-secondary/50">
      <div className="container-custom">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            My <span className="text-primary">Projects</span>
          </h2>
          <p className="text-muted text-center max-w-2xl mx-auto mb-12">
            A showcase of my technical work and innovations
          </p>
        </FadeIn>

        {/* Category Filters */}
        <FadeIn delay={0.1}>
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === category.id
                    ? "bg-primary text-primary-foreground shadow-glow"
                    : "bg-background-secondary text-muted hover:text-foreground hover:bg-background-tertiary"
                }`}
              >
                {category.label}
                <span className="ml-2 text-xs opacity-70">({category.count})</span>
              </button>
            ))}
          </div>
        </FadeIn>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <ScaleOnHover>
                  <Card
                    variant="default"
                    hoverEffect="lift"
                    className="h-full overflow-hidden group cursor-pointer"
                    onClick={() => setSelectedProject(project)}
                  >
                    {/* Thumbnail */}
                    <div className="relative h-48 bg-background-tertiary overflow-hidden">
                      {project.thumbnail && (
                        <Image
                          src={project.thumbnail}
                          alt={project.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent z-10" />
                      {project.featured && (
                        <Badge className={`absolute top-3 left-3 z-20 ${categoryColors.featured}`}>
                          Featured
                        </Badge>
                      )}
                      <div className="absolute top-3 right-3 z-20 flex gap-2">
                        <div className="flex items-center gap-1 text-xs text-muted bg-background/80 px-2 py-1 rounded">
                          <Eye className="h-3 w-3" />
                          {project.stats?.views || 0}
                        </div>
                        <div className="flex items-center gap-1 text-xs text-muted bg-background/80 px-2 py-1 rounded">
                          <Heart className="h-3 w-3" />
                          {project.stats?.likes || 0}
                        </div>
                      </div>
                      <div className="absolute bottom-3 left-3 right-3 z-20">
                        <Badge className={`${categoryColors[project.category]} border`}>
                          {project.category.toUpperCase()}
                        </Badge>
                      </div>
                    </div>

                    <CardContent className="p-5">
                      <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-muted text-sm mb-4 line-clamp-2">
                        {project.shortDescription}
                      </p>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-1 mb-4">
                        {project.technologies.slice(0, 4).map((tech) => (
                          <Badge key={tech} variant="outline" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                        {project.technologies.length > 4 && (
                          <Badge variant="outline" className="text-xs">
                            +{project.technologies.length - 4}
                          </Badge>
                        )}
                      </div>

                      {/* Date */}
                      <div className="flex items-center gap-2 text-xs text-muted">
                        <Calendar className="h-3 w-3" />
                        <span>{formatDate(project.startDate)}</span>
                      </div>
                    </CardContent>
                  </Card>
                </ScaleOnHover>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Stats */}
        <FadeIn delay={0.5}>
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: "Total Projects", value: projects.length },
              { label: "Featured", value: projects.filter((p) => p.featured).length },
              { label: "Live Demos", value: projects.filter((p) => p.liveUrl).length },
              { label: "GitHub", value: projects.length },
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

      {/* Project Detail Modal */}
      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="max-w-2xl">
          {selectedProject && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl">{selectedProject.title}</DialogTitle>
                <DialogDescription className="text-muted">
                  {formatDate(selectedProject.startDate)} •{" "}
                  <Badge className={categoryColors[selectedProject.category]}>
                    {selectedProject.category.toUpperCase()}
                  </Badge>
                </DialogDescription>
              </DialogHeader>

              <div className="space-y-6">
                {/* Stats */}
                <div className="flex items-center gap-6 text-sm">
                  <div className="flex items-center gap-2">
                    <Eye className="h-4 w-4 text-muted" />
                    <span>{selectedProject.stats?.views || 0} views</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Heart className="h-4 w-4 text-muted" />
                    <span>{selectedProject.stats?.likes || 0} likes</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-muted leading-relaxed">
                  {selectedProject.fullDescription}
                </p>

                {/* Technologies */}
                <div>
                  <h4 className="font-semibold mb-2">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Links */}
                <div className="flex flex-wrap gap-3">
                  {selectedProject.githubUrl && (
                    <a href={selectedProject.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Button variant="outline">
                        <Github className="h-4 w-4 mr-2" />
                        View Code
                      </Button>
                    </a>
                  )}
                  {selectedProject.liveUrl && (
                    <a href={selectedProject.liveUrl} target="_blank" rel="noopener noreferrer">
                      <Button>
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Live Demo
                      </Button>
                    </a>
                  )}
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
