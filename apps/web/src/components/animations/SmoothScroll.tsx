"use client";

import { ReactNode, useEffect } from "react";
import Lenis from "lenis";

interface SmoothScrollProps {
  children: ReactNode;
  options?: {
    duration?: number;
    easing?: (t: number) => number;
    orientation?: "vertical" | "horizontal";
  };
}

// Lenis smooth scrolling implementation
export function SmoothScroll({ children, options = {} }: SmoothScrollProps) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: options.duration || 1.2,
      easing: options.easing || ((t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))),
      orientation: options.orientation || "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, [options]);

  return <>{children}</>;
}

// Hook for using smooth scroll programmatically
export function useSmoothScroll() {
  const scrollTo = (target: number | HTMLElement | string, options?: { offset?: number; duration?: number }) => {
    const lenis = (window as any).__lenis;
    if (lenis) {
      if (typeof target === "string") {
        const element = document.querySelector(target);
        if (element) {
          lenis.scrollTo(element, { offset: options?.offset, duration: options?.duration });
        }
      } else if (typeof target === "number") {
        lenis.scrollTo(target, { duration: options?.duration });
      } else {
        lenis.scrollTo(target, { offset: options?.offset, duration: options?.duration });
      }
    } else {
      // Fallback to native smooth scroll
      if (typeof target === "string") {
        const element = document.querySelector(target);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: options?.offset ? "center" : "start" });
        }
      } else if (typeof target === "number") {
        window.scrollTo({ top: target, behavior: "smooth" });
      } else {
        target.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const stop = () => {
    const lenis = (window as any).__lenis;
    if (lenis) {
      lenis.stop();
    }
  };

  const start = () => {
    const lenis = (window as any).__lenis;
    if (lenis) {
      lenis.start();
    }
  };

  return { scrollTo, stop, start };
}
