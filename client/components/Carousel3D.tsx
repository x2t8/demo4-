import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface Module {
  icon: any;
  title: string;
  description: string;
  color: string;
  gradient?: string;
  level?: string;
  badge?: string;
  stats?: string;
  duration?: string;
  difficulty?: number;
  link: string;
}

interface Carousel3DProps {
  modules: Module[];
  onModuleChange?: (index: number) => void;
}

export default function Carousel3D({ modules, onModuleChange }: Carousel3DProps) {
  const [activeIndex, setActiveIndex] = useState(2); // Start with middle module
  const [isAnimating, setIsAnimating] = useState(false);
  const [direction, setDirection] = useState<'left' | 'right' | null>(null);

  const nextModule = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setDirection('right'); // Moving to next = sliding left

    // Add slide animation effect
    setTimeout(() => {
      const newIndex = (activeIndex + 1) % modules.length;
      setActiveIndex(newIndex);
      onModuleChange?.(newIndex);

      setTimeout(() => {
        setIsAnimating(false);
        setDirection(null);
      }, 600);
    }, 100);
  };

  const prevModule = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setDirection('left'); // Moving to prev = sliding right

    // Add slide animation effect
    setTimeout(() => {
      const newIndex = (activeIndex - 1 + modules.length) % modules.length;
      setActiveIndex(newIndex);
      onModuleChange?.(newIndex);

      setTimeout(() => {
        setIsAnimating(false);
        setDirection(null);
      }, 600);
    }, 100);
  };

  const handleModuleClick = (index: number) => {
    if (index !== activeIndex && !isAnimating) {
      setIsAnimating(true);

      setTimeout(() => {
        setActiveIndex(index);
        onModuleChange?.(index);

        setTimeout(() => setIsAnimating(false), 300);
      }, 100);
    }
  };

  const getVisibleModules = () => {
    const visibleModules = [];
    
    for (let i = -2; i <= 2; i++) {
      const index = (activeIndex + i + modules.length) % modules.length;
      visibleModules.push({
        module: modules[index],
        originalIndex: index,
        position: i
      });
    }
    
    return visibleModules;
  };

  const getModuleStyles = (position: number) => {
    const baseStyles = "absolute top-1/2 transform transition-all duration-700 ease-out cursor-pointer";

    // Animation logic: when going next (right direction), all modules slide left
    // When going prev (left direction), all modules slide right
    let slideTransform = "";
    if (isAnimating && direction) {
      if (direction === 'right') {
        // Next button: slide all modules left
        slideTransform = "-translate-x-16";
      } else if (direction === 'left') {
        // Prev button: slide all modules right
        slideTransform = "translate-x-16";
      }
    }

    switch (position) {
      case 0: // Center: 40-45% width with enhanced animation
        return `${baseStyles} left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 scale-100 opacity-100 ${slideTransform}`;
      case -1: // Left adjacent: 30-35%, overlaps center by 20%
        return `${baseStyles} left-[22%] -translate-x-1/2 -translate-y-1/2 z-40 scale-90 opacity-95 hover:scale-92 hover:opacity-100 ${slideTransform}`;
      case 1: // Right adjacent: 30-35%, overlaps center by 20%
        return `${baseStyles} right-[22%] translate-x-1/2 -translate-y-1/2 z-40 scale-90 opacity-95 hover:scale-92 hover:opacity-100 ${slideTransform}`;
      case -2: // Left outer: 25-28%, 60-70% opacity
        return `${baseStyles} left-[5%] -translate-x-1/2 -translate-y-1/2 z-30 scale-75 opacity-65 hover:scale-78 hover:opacity-75 ${slideTransform}`;
      case 2: // Right outer: 25-28%, 60-70% opacity
        return `${baseStyles} right-[5%] translate-x-1/2 -translate-y-1/2 z-30 scale-75 opacity-65 hover:scale-78 hover:opacity-75 ${slideTransform}`;
      default:
        return `${baseStyles} opacity-0 pointer-events-none scale-60 ${slideTransform}`;
    }
  };

  const getModuleWidth = (position: number) => {
    switch (position) {
      case 0: // Center: 40-45% width
        return "w-80 lg:w-88";
      case -1:
      case 1: // Adjacent: 30-35% width
        return "w-64 lg:w-72";
      case -2:
      case 2: // Outer: 25-28% width
        return "w-56 lg:w-64";
      default:
        return "w-48";
    }
  };

  const visibleModules = getVisibleModules();

  return (
    <div className="relative w-full">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute -top-10 -left-10 w-20 h-20 bg-gradient-to-r from-blue-400/15 to-purple-400/15 rounded-full blur-xl animate-pulse" />
        <div className="absolute -top-5 right-1/4 w-16 h-16 bg-gradient-to-r from-pink-400/15 to-red-400/15 rounded-full blur-lg animate-pulse delay-1000" />
        <div className="absolute -bottom-10 -right-10 w-24 h-24 bg-gradient-to-r from-green-400/15 to-cyan-400/15 rounded-full blur-xl animate-pulse delay-2000" />
        <div className="absolute top-1/2 -left-5 w-12 h-12 bg-gradient-to-r from-indigo-400/15 to-blue-400/15 rounded-full blur-md animate-pulse delay-500" />
      </div>

      {/* Floating sparkles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute"
            style={{
              left: `${15 + i * 12}%`,
              top: `${25 + (i % 3) * 20}%`,
              animationDelay: `${i * 800}ms`,
            }}
          >
            <div className="w-1 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-40 animate-ping" />
          </div>
        ))}
      </div>

      <div
        className="relative w-full"
        style={{
          perspective: "1200px",
          transformStyle: "preserve-3d"
        }}
      >
        {/* Desktop: 5 modules, Mobile/Tablet: 3 modules */}
        <div className="relative h-[28rem] lg:h-[32rem] overflow-visible">
          {/* Enhanced Navigation Buttons - 10-15% larger with round background */}
          <Button
            variant="outline"
            size="lg"
            onClick={prevModule}
            disabled={isAnimating}
            className={cn(
              "absolute left-2 lg:left-4 top-1/2 -translate-y-1/2 z-60 w-16 h-16 lg:w-18 lg:h-18 rounded-full bg-gradient-to-br from-white via-blue-50 to-purple-50 dark:from-gray-800 dark:via-gray-700 dark:to-gray-800 backdrop-blur-md shadow-xl hover:shadow-2xl border-2 border-blue-200/60 hover:border-blue-400/80 hover:scale-110 transition-all duration-300 group hover:bg-gradient-to-br hover:from-blue-50 hover:to-purple-100",
              isAnimating && "animate-pulse scale-95 opacity-70"
            )}
          >
            <ChevronLeft className={cn(
              "h-8 w-8 lg:h-9 lg:w-9 text-blue-600 dark:text-blue-400 group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-all duration-300",
              isAnimating && "animate-bounce"
            )} />
          </Button>

          <Button
            variant="outline"
            size="lg"
            onClick={nextModule}
            disabled={isAnimating}
            className={cn(
              "absolute right-2 lg:right-4 top-1/2 -translate-y-1/2 z-60 w-16 h-16 lg:w-18 lg:h-18 rounded-full bg-gradient-to-br from-white via-blue-50 to-purple-50 dark:from-gray-800 dark:via-gray-700 dark:to-gray-800 backdrop-blur-md shadow-xl hover:shadow-2xl border-2 border-blue-200/60 hover:border-blue-400/80 hover:scale-110 transition-all duration-300 group hover:bg-gradient-to-br hover:from-blue-50 hover:to-purple-100",
              isAnimating && "animate-pulse scale-95 opacity-70"
            )}
          >
            <ChevronRight className={cn(
              "h-8 w-8 lg:h-9 lg:w-9 text-blue-600 dark:text-blue-400 group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-all duration-300",
              isAnimating && "animate-bounce"
            )} />
          </Button>

          {/* 5 Module Cards with overlapping effect */}
          {visibleModules.map(({ module, originalIndex, position }) => {
            const isCenter = position === 0;
            const isAdjacent = Math.abs(position) === 1;
            const isOuter = Math.abs(position) === 2;

            // Responsive visibility: Mobile shows 3 modules, Desktop shows 5
            const hiddenOnMobile = Math.abs(position) > 1;

            return (
              <div
                key={`${originalIndex}-${position}`}
                className={cn(
                  getModuleStyles(position),
                  hiddenOnMobile && "md:block hidden",
                  // Enhanced animation effects
                  isAnimating && "animate-pulse",
                  "transform-gpu" // GPU acceleration
                )}
                onClick={() => !isCenter && handleModuleClick(originalIndex)}
                style={{
                  transformStyle: "preserve-3d",
                  // Add entrance animation
                  animationDelay: `${Math.abs(position) * 50}ms`
                }}
              >
                <Card
                  className={cn(
                    getModuleWidth(position),
                    "bg-gradient-to-br from-white via-white to-gray-50/50 dark:from-gray-800 dark:via-gray-800 dark:to-gray-900 border-2 transition-all duration-800 relative overflow-hidden group",
                    isCenter && "shadow-2xl border-blue-300/70 hover:shadow-3xl hover:border-blue-400/80 ring-1 ring-blue-200/30",
                    isAdjacent && "shadow-xl border-gray-200/60 hover:shadow-2xl hover:border-blue-300/50",
                    isOuter && "shadow-lg border-gray-200/40 hover:shadow-xl hover:border-gray-300/60",
                    // Animation effects during transition
                    isAnimating && isCenter && "ring-2 ring-blue-400/50 animate-pulse",
                    isAnimating && "border-blue-300/80"
                  )}
                  style={{
                    transformStyle: "preserve-3d",
                    backfaceVisibility: "hidden"
                  }}
                >
                  {/* Subtle gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50/20 via-transparent to-purple-50/20 dark:from-blue-900/10 dark:to-purple-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Glowing border effect on hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-blue-500/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm" />

                  {/* Animation wave effect during transition */}
                  {isAnimating && (
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-400/30 to-transparent animate-pulse opacity-50" />
                  )}

                  {/* Shimmer effect during transition */}
                  {isAnimating && isCenter && (
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full animate-pulse"
                         style={{ animationDuration: '1000ms' }} />
                  )}
                  <CardContent className={cn(
                    "h-full flex flex-col text-center transition-all duration-700",
                    isCenter ? "p-8 lg:p-10" : isAdjacent ? "p-6 lg:p-7" : "p-5 lg:p-6"
                  )}>
                    {/* Icon - Centered at top with gradient background */}
                    <div className="flex justify-center mb-6 relative">
                      <div className={cn(
                        "inline-flex items-center justify-center rounded-xl transition-all duration-700 relative overflow-hidden",
                        isCenter ? "p-6 lg:p-7" : isAdjacent ? "p-5 lg:p-6" : "p-4 lg:p-5"
                      )}>
                        {/* Gradient background */}
                        <div className={cn(
                          "absolute inset-0 bg-gradient-to-br opacity-10",
                          module.gradient || "from-blue-500 to-cyan-500"
                        )} />
                        {/* Pattern overlay */}
                        <div className="absolute inset-0 bg-white/60 dark:bg-gray-800/60" />

                        <module.icon className={cn(
                          "relative z-10 transition-all duration-700",
                          module.color?.includes('text-') ? module.color.split(' ').find(c => c.startsWith('text-')) : "text-blue-600",
                          // 10-15% larger icons
                          isCenter ? "h-12 w-12 lg:h-14 lg:w-14" :
                          isAdjacent ? "h-10 w-10 lg:h-12 lg:w-12" :
                          "h-8 w-8 lg:h-10 lg:w-10"
                        )} />
                      </div>

                      {/* Badge */}
                      {module.badge && isCenter && (
                        <div className="absolute -top-2 -right-2 z-20">
                          <span className={cn(
                            "px-2 py-1 text-xs font-semibold rounded-full text-white shadow-lg",
                            module.badge === "Trending" && "bg-gradient-to-r from-blue-500 to-cyan-500",
                            module.badge === "Hot" && "bg-gradient-to-r from-red-500 to-orange-500",
                            module.badge === "Thiết yếu" && "bg-gradient-to-r from-red-600 to-red-700",
                            module.badge === "Quan trọng" && "bg-gradient-to-r from-purple-500 to-pink-500",
                            module.badge === "Cần thiết" && "bg-gradient-to-r from-indigo-500 to-blue-500"
                          )}>
                            {module.badge}
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Title */}
                    <h3 className={cn(
                      "font-bold text-gray-900 dark:text-white mb-4 leading-tight transition-all duration-700",
                      isCenter ? "text-2xl lg:text-3xl" : isAdjacent ? "text-xl lg:text-2xl" : "text-lg lg:text-xl"
                    )}>
                      {module.title}
                    </h3>

                    {/* Description - only for center and adjacent */}
                    {(isCenter || isAdjacent) && (
                      <p className={cn(
                        "text-gray-600 dark:text-gray-300 mb-6 leading-relaxed flex-1 transition-all duration-700",
                        isCenter ? "text-base lg:text-lg" : "text-sm lg:text-base"
                      )}>
                        {module.description}
                      </p>
                    )}

                    {/* Module info and stats */}
                    <div className="flex flex-col items-center space-y-3 mb-6">
                      {/* Level and difficulty */}
                      {(isCenter || isAdjacent) && module.level && (
                        <div className="flex items-center space-x-2">
                          <Badge
                            variant="outline"
                            className={cn(
                              "px-2 py-1 text-xs font-medium",
                              "border-gray-300/35 dark:border-gray-600/35 bg-gray-100/20 dark:bg-gray-700/20"
                            )}
                          >
                            {module.level}
                          </Badge>

                          {module.difficulty && (
                            <div className="flex space-x-1">
                              {[...Array(3)].map((_, i) => (
                                <div
                                  key={i}
                                  className={cn(
                                    "w-2 h-2 rounded-full",
                                    i < module.difficulty ? "bg-blue-500" : "bg-gray-200 dark:bg-gray-600"
                                  )}
                                />
                              ))}
                            </div>
                          )}
                        </div>
                      )}

                      {/* Stats */}
                      {isCenter && (module.stats || module.duration) && (
                        <div className="flex items-center space-x-4 text-xs text-gray-500 dark:text-gray-400">
                          {module.stats && (
                            <span className="flex items-center space-x-1">
                              <span>📚</span>
                              <span>{module.stats}</span>
                            </span>
                          )}
                          {module.duration && (
                            <span className="flex items-center space-x-1">
                              <span>⏱️</span>
                              <span>{module.duration}</span>
                            </span>
                          )}
                        </div>
                      )}

                    </div>

                    {/* Action Button - only for center */}
                    {isCenter && (
                      <div className="mt-auto relative z-10">
                        <Link to={module.link}>
                          <Button className="bg-gradient-to-r from-blue-600 via-blue-700 to-purple-600 hover:from-blue-700 hover:via-purple-700 hover:to-blue-800 text-white shadow-xl hover:shadow-2xl transition-all w-full hover:scale-105 group duration-300 rounded-xl border border-blue-500/20 hover:border-blue-400/40 relative overflow-hidden">
                            {/* Shimmer effect */}
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

                            <span className="relative z-10 flex items-center justify-center">
                              ✨ Khám phá ngay
                              <ChevronRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                            </span>
                          </Button>
                        </Link>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </div>
            );
          })}
        </div>

      </div>

    </div>
  );
}
