"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

interface TimelineConfig {
  duration?: number;
  ease?: string;
  stagger?: number;
  start?: string;
  end?: string;
  scrub?: number | boolean;
}

interface GsapTimelineProps {
  children: React.ReactNode;
  animation?: "fade" | "slide" | "scale" | "stagger" | "draw";
  config?: TimelineConfig;
  triggerRef?: React.RefObject<HTMLElement>;
  className?: string;
}

export function GsapTimeline({
  children,
  animation = "fade",
  config = {},
  triggerRef,
  className = "",
}: GsapTimelineProps) {
  const elementRef = useRef<HTMLDivElement>(null);
  const defaultConfig = {
    duration: 0.6,
    ease: "power3.out",
    stagger: 0.1,
    start: "top 85%",
    end: "bottom 20%",
    scrub: false,
    ...config,
  };

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const ctx = gsap.context(() => {
      const animations = {
        fade: () => {
          gsap.fromTo(
            element,
            { opacity: 0, y: 30 },
            {
              opacity: 1,
              y: 0,
              duration: defaultConfig.duration,
              ease: defaultConfig.ease,
              scrollTrigger: {
                trigger: triggerRef?.current || element,
                start: defaultConfig.start,
                end: defaultConfig.end,
                scrub: defaultConfig.scrub,
              },
            }
          );
        },
        slide: () => {
          gsap.fromTo(
            element,
            { opacity: 0, x: -50 },
            {
              opacity: 1,
              x: 0,
              duration: defaultConfig.duration,
              ease: defaultConfig.ease,
              scrollTrigger: {
                trigger: triggerRef?.current || element,
                start: defaultConfig.start,
                end: defaultConfig.end,
                scrub: defaultConfig.scrub,
              },
            }
          );
        },
        scale: () => {
          gsap.fromTo(
            element,
            { opacity: 0, scale: 0.8 },
            {
              opacity: 1,
              scale: 1,
              duration: defaultConfig.duration,
              ease: defaultConfig.ease,
              scrollTrigger: {
                trigger: triggerRef?.current || element,
                start: defaultConfig.start,
                end: defaultConfig.end,
                scrub: defaultConfig.scrub,
              },
            }
          );
        },
        stagger: () => {
          const children = element.children;
          gsap.fromTo(
            children,
            { opacity: 0, y: 20 },
            {
              opacity: 1,
              y: 0,
              duration: defaultConfig.duration,
              ease: defaultConfig.ease,
              stagger: defaultConfig.stagger,
              scrollTrigger: {
                trigger: triggerRef?.current || element,
                start: defaultConfig.start,
                end: defaultConfig.end,
                scrub: defaultConfig.scrub,
              },
            }
          );
        },
        draw: () => {
          gsap.fromTo(
            element,
            { strokeDasharray: 1000, strokeDashoffset: 1000 },
            {
              strokeDasharray: 1000,
              strokeDashoffset: 0,
              duration: defaultConfig.duration * 2,
              ease: "power2.inOut",
              scrollTrigger: {
                trigger: triggerRef?.current || element,
                start: defaultConfig.start,
                end: defaultConfig.end,
                scrub: defaultConfig.scrub,
              },
            }
          );
        },
      };

      animations[animation]?.();
    }, element);

    return () => ctx.revert();
  }, [animation, defaultConfig, triggerRef]);

  return (
    <div ref={elementRef} className={className}>
      {children}
    </div>
  );
}

// Utility hook for using GSAP in components
export function useGsapAnimations() {
  const timeline = useRef<gsap.core.Timeline | null>(null);

  useEffect(() => {
    timeline.current = gsap.timeline();

    return () => {
      if (timeline.current) {
        timeline.current.kill();
        timeline.current = null;
      }
    };
  }, []);

  const createTimeline = (config?: gsap.TimelineVars) => {
    if (timeline.current) {
      timeline.current.kill();
    }
    timeline.current = gsap.timeline(config);
    return timeline.current;
  };

  return { timeline: timeline.current, createTimeline };
}

// Scroll progress hook
export function useScrollProgress(triggerRef: React.RefObject<HTMLElement>) {
  const progressRef = useRef(0);

  useEffect(() => {
    const trigger = triggerRef.current;
    if (!trigger) return;

    ScrollTrigger.create({
      trigger,
      start: "top top",
      end: "bottom bottom",
      onUpdate: (self) => {
        progressRef.current = self.progress;
      },
    });
  }, [triggerRef]);

  return progressRef;
}

// Parallax effect hook
export function useParallax(
  speed: number = 0.5,
  direction: "vertical" | "horizontal" = "vertical"
) {
  const elementRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const axis = direction === "vertical" ? "y" : "x";

    gsap.to(element, {
      [axis]: `*=${speed}`,
      ease: "none",
      scrollTrigger: {
        trigger: element,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });
  }, [speed, direction]);

  return elementRef;
}
