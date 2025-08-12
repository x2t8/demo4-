import React, { useState, useEffect, useRef, ReactNode } from "react";

interface LazySectionProps {
  children: ReactNode;
  threshold?: number;
  className?: string;
  fallback?: ReactNode;
}

export default function LazySection({
  children,
  threshold = 0.1,
  className = "",
  fallback = (
    <div className="animate-pulse bg-gray-200 rounded-lg h-64 flex items-center justify-center">
      <div className="text-gray-500">Đang tải...</div>
    </div>
  ),
}: LazySectionProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [hasLoaded, setHasLoaded] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasLoaded) {
          setIsVisible(true);
          setHasLoaded(true);
          observer.disconnect();
        }
      },
      {
        threshold,
        rootMargin: "50px",
      },
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [threshold, hasLoaded]);

  return (
    <div ref={ref} className={className}>
      {isVisible ? children : fallback}
    </div>
  );
}
