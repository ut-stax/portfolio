"use client";

import { useEffect, useRef, useState } from "react";

interface LottiePlayerProps {
  animationData?: Record<string, unknown>;
  url?: string;
  loop?: boolean;
  autoplay?: boolean;
  speed?: number;
  width?: string | number;
  height?: string | number;
  className?: string;
  onComplete?: () => void;
  onLoopComplete?: () => void;
}

export function LottiePlayer({
  animationData,
  url,
  loop = true,
  autoplay = true,
  speed = 1,
  width = "100%",
  height = "100%",
  className = "",
  onComplete,
  onLoopComplete,
}: LottiePlayerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<unknown>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;

    // Cleanup previous animation
    if (animationRef.current && typeof (animationRef.current as { destroy: () => void }).destroy === "function") {
      (animationRef.current as { destroy: () => void }).destroy();
    }

    const loadAnimation = async () => {
      try {
        setIsLoading(true);
        setError(null);

        // Dynamically import lottie
        // eslint-disable-next-line @typescript-eslint/no-require-imports
        const lottieModule = require("lottie-web");
        const lottie = lottieModule.default || lottieModule;

        const loadOptions: {
          container: HTMLElement;
          renderer: string;
          loop: boolean;
          autoplay: boolean;
          animationData?: Record<string, unknown>;
          path?: string;
          rendererSettings?: Record<string, unknown>;
        } = {
          container,
          renderer: "svg",
          loop,
          autoplay,
          rendererSettings: {
            progressiveLoad: true,
          },
        };

        if (animationData) {
          loadOptions.animationData = animationData;
        } else if (url) {
          // Fetch animation JSON from URL
          const response = await fetch(url);
          if (!response.ok) {
            throw new Error("Failed to load animation");
          }
          const data = await response.json();
          loadOptions.animationData = data;
        } else {
          setError("No animation data or URL provided");
          setIsLoading(false);
          return;
        }

        animationRef.current = lottie.loadAnimation(loadOptions);

        // Set speed
        if (typeof (animationRef.current as { setSpeed: (s: number) => void }).setSpeed === "function") {
          (animationRef.current as { setSpeed: (s: number) => void }).setSpeed(speed);
        }

        // Event listeners
        if (typeof (animationRef.current as { addEventListener: (e: string, cb: () => void) => void }).addEventListener === "function") {
          (animationRef.current as { addEventListener: (e: string, cb: () => void) => void }).addEventListener("complete", () => {
            onComplete?.();
          });

          (animationRef.current as { addEventListener: (e: string, cb: () => void) => void }).addEventListener("loopComplete", () => {
            onLoopComplete?.();
          });
        }

        setIsLoading(false);
      } catch (err) {
        setError("Failed to load animation. Install lottie-web: npm install lottie-web");
        setIsLoading(false);
      }
    };

    loadAnimation();

    return () => {
      if (animationRef.current && typeof (animationRef.current as { destroy: () => void }).destroy === "function") {
        (animationRef.current as { destroy: () => void }).destroy();
        animationRef.current = null;
      }
    };
  }, [animationData, url, loop, autoplay, speed, onComplete, onLoopComplete]);

  // Update speed when it changes
  useEffect(() => {
    if (animationRef.current && typeof (animationRef.current as { setSpeed: (s: number) => void }).setSpeed === "function") {
      (animationRef.current as { setSpeed: (s: number) => void }).setSpeed(speed);
    }
  }, [speed]);

  if (error) {
    return (
      <div
        className={`flex items-center justify-center bg-background-secondary rounded ${className}`}
        style={{ width, height }}
      >
        <span className="text-sm text-muted">Animation unavailable</span>
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className={`relative ${className}`}
      style={{ width, height }}
    >
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
        </div>
      )}
    </div>
  );
}
