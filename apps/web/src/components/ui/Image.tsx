"use client";

import Image, { ImageProps } from "next/image";
import { useState, useEffect } from "react";

interface OptimizedImageProps extends Omit<ImageProps, "src"> {
  src: string;
  alt: string;
  placeholder?: "blur" | "empty";
  blurDataURL?: string;
  priority?: boolean;
  sizes?: string;
}

export function OptimizedImage({
  src,
  alt,
  placeholder = "blur",
  blurDataURL,
  priority = false,
  sizes,
  className,
  ...props
}: OptimizedImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentSrc, setCurrentSrc] = useState(src);

  // Generate blur placeholder if not provided
  useEffect(() => {
    if (placeholder === "blur" && !blurDataURL) {
      // Use a simple gray placeholder for now
      // In production, you could generate real blurDataURL from the image
      setCurrentSrc(src);
    }
  }, [src, placeholder, blurDataURL]);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <Image
        src={currentSrc}
        alt={alt}
        placeholder={placeholder}
        blurDataURL={blurDataURL}
        priority={priority}
        sizes={sizes}
        className={`transition-opacity duration-500 ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
        onLoad={() => setIsLoaded(true)}
        {...props}
      />
      {/* Skeleton loader while image loads */}
      {!isLoaded && (
        <div className="absolute inset-0 bg-background-secondary animate-pulse" />
      )}
    </div>
  );
}

// Avatar image with fallback
interface AvatarImageProps extends Omit<ImageProps, "src"> {
  src?: string;
  alt: string;
  fallback?: string;
}

export function AvatarImage({ src, alt, fallback, className, ...props }: AvatarImageProps) {
  const [error, setError] = useState(false);

  if (error || !src) {
    return (
      <div
        className={`flex items-center justify-center bg-primary/20 text-primary font-medium rounded-full ${className}`}
        {...props}
      >
        {fallback || alt.charAt(0).toUpperCase()}
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      onError={() => setError(true)}
      className={className}
      {...props}
    />
  );
}

// Gallery image with zoom effect
interface GalleryImageProps extends OptimizedImageProps {
  onClick?: () => void;
}

export function GalleryImage({
  src,
  alt,
  onClick,
  className,
  ...props
}: GalleryImageProps) {
  return (
    <div
      className={`relative overflow-hidden rounded-lg cursor-pointer group ${className}`}
      onClick={onClick}
    >
      <OptimizedImage
        src={src}
        alt={alt}
        fill
        className="object-cover transition-transform duration-300 group-hover:scale-105"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        {...props}
      />
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
    </div>
  );
}
