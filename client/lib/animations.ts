import React from "react";

// Optimized animation utilities for better performance

export const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
};

export const fadeInLeft = {
  initial: { opacity: 0, x: -20 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
};

export const fadeInRight = {
  initial: { opacity: 0, x: 20 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
};

export const scaleIn = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.5, ease: "easeOut" },
};

export const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

// Performance-optimized CSS classes for common animations
export const optimizedAnimations = {
  "slide-up":
    "transform transition-all duration-500 ease-out translate-y-0 opacity-100",
  "slide-up-initial": "transform translate-y-4 opacity-0",
  "fade-in": "transition-opacity duration-700 ease-out opacity-100",
  "fade-in-initial": "opacity-0",
  "scale-hover": "transition-transform duration-200 ease-out hover:scale-105",
  "glow-hover": "transition-shadow duration-300 ease-out hover:shadow-lg",
  "caring-lift":
    "transition-transform duration-300 ease-out hover:-translate-y-1",
  "protective-pulse": "animate-pulse",
  heartbeat: "animate-bounce",
  "warning-glow": "animate-pulse shadow-lg shadow-red-500/20",
  "text-breathe": "animate-pulse",
};

// Utility function to apply optimized animations with intersection observer
export const useOptimizedAnimation = (
  elementRef: React.RefObject<HTMLElement>,
  animationClass: string,
) => {
  React.useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          element.classList.add(animationClass);
          observer.unobserve(element);
        }
      },
      {
        threshold: 0.1,
        rootMargin: "50px",
      },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [animationClass]);
};

// Debounced scroll handler for performance
export const useDebounce = (callback: Function, delay: number) => {
  const timeoutRef = React.useRef<NodeJS.Timeout>();

  return React.useCallback(
    (...args: any[]) => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      timeoutRef.current = setTimeout(() => callback(...args), delay);
    },
    [callback, delay],
  );
};

// Preload critical resources
export const preloadCriticalResources = () => {
  // Preload critical images
  const criticalImages = [
    "/placeholder.svg", // Add your critical images here
  ];

  criticalImages.forEach((src) => {
    const link = document.createElement("link");
    link.rel = "preload";
    link.as = "image";
    link.href = src;
    document.head.appendChild(link);
  });
};
