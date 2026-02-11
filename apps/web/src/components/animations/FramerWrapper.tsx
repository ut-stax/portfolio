"use client";

import { motion, Variants } from "framer-motion";
import { ReactNode } from "react";

const defaultVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export function FramerWrapper({
  children,
  className,
  variants = defaultVariants,
  viewport = { once: true },
}: {
  children: ReactNode;
  className?: string;
  variants?: Variants;
  viewport?: { once?: boolean; margin?: string };
}) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      transition={{ duration: 0.6, ease: "easeOut" }}
      variants={variants}
    >
      {children}
    </motion.div>
  );
}

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

export function FadeIn({ children, delay = 0, className }: FadeInProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

interface SlideInProps {
  children: ReactNode;
  direction?: "left" | "right" | "up" | "down";
  delay?: number;
  className?: string;
}

export function SlideIn({ children, direction = "up", delay = 0, className }: SlideInProps) {
  const directions: Record<string, { x: number; y: number }> = {
    left: { x: -50, y: 0 },
    right: { x: 50, y: 0 },
    up: { x: 0, y: 50 },
    down: { x: 0, y: -50 },
  };

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, ...directions[direction] }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

interface ScaleOnHoverProps {
  children: ReactNode;
  scale?: number;
  className?: string;
}

export function ScaleOnHover({ children, scale = 1.05, className }: ScaleOnHoverProps) {
  return (
    <motion.div className={className} whileHover={{ scale }} transition={{ duration: 0.2 }}>
      {children}
    </motion.div>
  );
}

interface TextRevealProps {
  text: string;
  className?: string;
  delay?: number;
}

export function TextReveal({ text, className, delay = 0 }: TextRevealProps) {
  const words = text.split(" ");

  return (
    <motion.span className={className}>
      {words.map((word, index) => (
        <motion.span
          key={index}
          className="inline-block mr-[0.25em]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.5,
            delay: delay + index * 0.05,
            ease: "easeOut",
          }}
        >
          {word}
        </motion.span>
      ))}
    </motion.span>
  );
}

interface GlowOnHoverProps {
  children: ReactNode;
  className?: string;
}

export function GlowOnHover({ children, className }: GlowOnHoverProps) {
  return (
    <motion.div
      className={className}
      whileHover={{
        boxShadow: "0 0 30px rgba(245, 158, 11, 0.4)",
      }}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  );
}
