"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Twitter, Mail, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Particles } from "@/components/canvas/Particles";
import { FadeIn, SlideIn, TextReveal } from "@/components/animations/FramerWrapper";

const socialLinks = [
  { href: "https://github.com/ut-stax", icon: Github, label: "GitHub" },
  { href: "https://www.linkedin.com/in/utkarsh-tripathi-399206283/", icon: Linkedin, label: "LinkedIn" },
  { href: "https://twitter.com", icon: Twitter, label: "Twitter" },
  { href: "mailto:tripathiutkarsh790@gmail.com", icon: Mail, label: "Email" },
];

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Particle Background */}
      <Particles count={1500} color="#F59E0B" />

      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Name */}
          <FadeIn delay={0.1}>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4">
              <span className="text-gradient">Utkarsh Tripathi</span>
            </h1>
          </FadeIn>

          {/* Role */}
          <FadeIn delay={0.2}>
            <h2 className="text-xl sm:text-2xl md:text-3xl text-muted mb-6 font-mono">
              Developer / Problem Solver
            </h2>
          </FadeIn>

          {/* Tagline */}
          <FadeIn delay={0.3}>
            <p className="text-lg md:text-xl text-muted max-w-2xl mx-auto mb-8">
              Building innovative solutions through web development and AI
            </p>
          </FadeIn>

          {/* CTA Buttons */}
          <FadeIn delay={0.4} className="flex flex-wrap justify-center gap-4 mb-12">
            <Link href="/projects">
              <Button size="xl" className="group">
                View Projects
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="xl" variant="outline">
                Get in Touch
              </Button>
            </Link>
          </FadeIn>

          {/* Social Links */}
          <FadeIn delay={0.5} className="flex justify-center gap-6 mb-12">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted hover:text-primary transition-colors transform hover:scale-110"
                aria-label={social.label}
              >
                <social.icon className="h-6 w-6" />
              </a>
            ))}
          </FadeIn>

          {/* Quick Info */}
          <FadeIn delay={0.6}>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-muted">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                <span>Open to collaborations</span>
              </div>
              <span>•</span>
              <span>Gwalior, M.P.</span>
              <span>•</span>
              <a
                href="mailto:tripathiutkarsh790@gmail.com"
                className="hover:text-primary transition-colors"
              >
                tripathiutkarsh790@gmail.com
              </a>
            </div>
          </FadeIn>

          {/* Scroll Indicator */}
          <motion.div
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
              className="flex flex-col items-center text-muted"
            >
              <span className="text-xs mb-2">Scroll</span>
              <ChevronDown className="h-5 w-5" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
