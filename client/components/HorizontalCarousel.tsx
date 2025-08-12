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
  link: string;
}

interface HorizontalCarouselProps {
  modules: Module[];
  onModuleChange?: (index: number) => void;
}

export default function HorizontalCarousel({ modules, onModuleChange }: HorizontalCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(2); // Start with middle module

  const nextModule = () => {
    const newIndex = (activeIndex + 1) % modules.length;
    setActiveIndex(newIndex);
    onModuleChange?.(newIndex);
  };

  const prevModule = () => {
    const newIndex = (activeIndex - 1 + modules.length) % modules.length;
    setActiveIndex(newIndex);
    onModuleChange?.(newIndex);
  };

  const handleModuleClick = (index: number) => {
    if (index !== activeIndex) {
      setActiveIndex(index);
      onModuleChange?.(index);
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
    const baseStyles = "absolute top-1/2 transform transition-all duration-500 ease-in-out cursor-pointer";
    
    switch (position) {
      case 0: // center - scale 1.0, moved down 10px, overlaps 20% on adjacent
        return `${baseStyles} left-1/2 -translate-x-1/2 -translate-y-1/2 translate-y-2.5 z-50 scale-100 opacity-100`;
      case -1: // left adjacent - scale 0.9, opacity 0.8, behind center
        return `${baseStyles} left-[35%] -translate-x-1/2 -translate-y-1/2 z-40 scale-90 opacity-80 hover:scale-95 hover:opacity-90`;
      case 1: // right adjacent - scale 0.9, opacity 0.8, behind center
        return `${baseStyles} right-[35%] translate-x-1/2 -translate-y-1/2 z-40 scale-90 opacity-80 hover:scale-95 hover:opacity-90`;
      case -2: // left outer - scale 0.8, opacity 0.5
        return `${baseStyles} left-[10%] -translate-x-1/2 -translate-y-1/2 z-30 scale-80 opacity-50 hover:scale-85 hover:opacity-60`;
      case 2: // right outer - scale 0.8, opacity 0.5
        return `${baseStyles} right-[10%] translate-x-1/2 -translate-y-1/2 z-30 scale-80 opacity-50 hover:scale-85 hover:opacity-60`;
      default:
        return `${baseStyles} opacity-0 pointer-events-none scale-75`;
    }
  };

  const visibleModules = getVisibleModules();

  return (
    <div className="relative w-full">
      {/* Main Carousel */}
      <div className="relative h-[28rem] lg:h-[32rem] overflow-visible">
        {/* Navigation Buttons */}
        <Button
          variant="outline"
          size="lg"
          onClick={prevModule}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-60 w-12 h-12 lg:w-14 lg:h-14 rounded-full bg-white/95 dark:bg-gray-800/95 backdrop-blur-md shadow-xl hover:shadow-2xl border-blue-200/50 hover:border-blue-400/70 hover:scale-110 transition-all duration-300"
        >
          <ChevronLeft className="h-6 w-6 lg:h-7 lg:w-7 text-blue-600 dark:text-blue-400" />
        </Button>

        <Button
          variant="outline"
          size="lg"
          onClick={nextModule}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-60 w-12 h-12 lg:w-14 lg:h-14 rounded-full bg-white/95 dark:bg-gray-800/95 backdrop-blur-md shadow-xl hover:shadow-2xl border-blue-200/50 hover:border-blue-400/70 hover:scale-110 transition-all duration-300"
        >
          <ChevronRight className="h-6 w-6 lg:h-7 lg:w-7 text-blue-600 dark:text-blue-400" />
        </Button>

        {/* Module Cards */}
        {visibleModules.map(({ module, originalIndex, position }) => {
          const isCenter = position === 0;
          const isAdjacent = Math.abs(position) === 1;
          const isOuter = Math.abs(position) === 2;

          return (
            <div
              key={`${originalIndex}-${position}`}
              className={getModuleStyles(position)}
              onClick={() => !isCenter && handleModuleClick(originalIndex)}
            >
              <Card
                className={cn(
                  "w-72 lg:w-80 bg-white/98 dark:bg-gray-800/98 backdrop-blur-md border transition-all duration-500",
                  isCenter && "shadow-2xl ring-2 ring-blue-500/40 border-blue-200/60 hover:ring-blue-500/60",
                  isAdjacent && "shadow-xl border-gray-200/50 hover:shadow-2xl hover:ring-2 hover:ring-blue-400/30",
                  isOuter && "shadow-lg border-gray-200/30 hover:shadow-xl hover:ring-1 hover:ring-blue-300/20"
                )}
              >
                <CardContent className={cn(
                  "h-full flex flex-col text-center transition-all duration-500",
                  isCenter ? "p-8 lg:p-10" : isAdjacent ? "p-6 lg:p-8" : "p-5 lg:p-6"
                )}>
                  {/* Icon - Centered */}
                  <div className="flex justify-center mb-6">
                    <div className={cn(
                      "inline-flex items-center justify-center rounded-2xl transition-all duration-500",
                      module.color,
                      isCenter ? "p-6 lg:p-7 shadow-lg" : isAdjacent ? "p-5 lg:p-6" : "p-4 lg:p-5"
                    )}>
                      <module.icon className={cn(
                        "transition-all duration-500",
                        isCenter ? "h-12 w-12 lg:h-14 lg:w-14" : isAdjacent ? "h-10 w-10 lg:h-12 lg:w-12" : "h-8 w-8 lg:h-10 lg:w-10"
                      )} />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className={cn(
                    "font-bold text-gray-900 dark:text-white mb-4 leading-tight transition-all duration-500",
                    isCenter ? "text-2xl lg:text-3xl" : isAdjacent ? "text-xl lg:text-2xl" : "text-lg lg:text-xl"
                  )}>
                    {module.title}
                  </h3>

                  {/* Description - only for center and adjacent */}
                  {(isCenter || isAdjacent) && (
                    <p className={cn(
                      "text-gray-600 dark:text-gray-300 mb-6 leading-relaxed flex-1 transition-all duration-500",
                      isCenter ? "text-base lg:text-lg" : "text-sm lg:text-base"
                    )}>
                      {module.description}
                    </p>
                  )}

                  {/* Badge - Subtle with opacity 0.3 border */}
                  <div className="flex justify-center mb-6">
                    <Badge 
                      variant="outline" 
                      className={cn(
                        "px-3 py-1 text-xs font-normal transition-all duration-500",
                        "text-gray-500 dark:text-gray-400", 
                        "border-gray-400/30 dark:border-gray-500/30 bg-gray-100/30 dark:bg-gray-700/30"
                      )}
                    >
                      Mô-đun {originalIndex + 1}
                    </Badge>
                  </div>

                  {/* Action Button - only for center */}
                  {isCenter && (
                    <div className="mt-auto">
                      <Link to={module.link}>
                        <Button className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 hover:from-blue-700 hover:via-purple-700 hover:to-blue-800 text-white shadow-xl hover:shadow-2xl transition-all w-full hover:scale-105 group duration-500">
                          Khám phá ngay
                          <ChevronRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
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

      {/* Indicators */}
      <div className="flex justify-center mt-8 space-x-3">
        {modules.map((_, index) => (
          <button
            key={index}
            onClick={() => handleModuleClick(index)}
            className={cn(
              "w-3 h-3 rounded-full transition-all duration-500",
              index === activeIndex
                ? "bg-blue-600 scale-125 shadow-lg"
                : "bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500 hover:scale-110"
            )}
          />
        ))}
      </div>

      {/* Mobile Version */}
      <div className="lg:hidden mt-8">
        <div className="relative h-80 overflow-visible">
          {/* Mobile Navigation */}
          <Button
            variant="outline" 
            size="sm"
            onClick={prevModule}
            className="absolute left-2 top-1/2 -translate-y-1/2 z-50 w-10 h-10 rounded-full bg-white/95 backdrop-blur-md shadow-lg"
          >
            <ChevronLeft className="h-4 w-4 text-blue-600" />
          </Button>

          <Button
            variant="outline"
            size="sm" 
            onClick={nextModule}
            className="absolute right-2 top-1/2 -translate-y-1/2 z-50 w-10 h-10 rounded-full bg-white/95 backdrop-blur-md shadow-lg"
          >
            <ChevronRight className="h-4 w-4 text-blue-600" />
          </Button>

          {/* Mobile Card - Only center */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-40">
            <Card className="w-80 bg-white/98 backdrop-blur-md border shadow-xl ring-2 ring-blue-500/40">
              <CardContent className="p-6 text-center h-full flex flex-col">
                <div className="flex justify-center mb-4">
                  <div className={cn("inline-flex rounded-2xl p-5", modules[activeIndex].color)}>
                    {React.createElement(modules[activeIndex].icon, { className: "h-10 w-10" })}
                  </div>
                </div>
                <h3 className="font-bold text-gray-900 mb-3 text-xl">
                  {modules[activeIndex].title}
                </h3>
                <p className="text-sm text-gray-600 mb-4 leading-relaxed flex-1">
                  {modules[activeIndex].description}
                </p>
                <div className="flex justify-center mb-4">
                  <Badge variant="outline" className="px-3 py-1 text-xs font-normal text-gray-500 border-gray-400/30 bg-gray-100/30">
                    Mô-đun {activeIndex + 1}
                  </Badge>
                </div>
                <Link to={modules[activeIndex].link}>
                  <Button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white w-full">
                    Khám phá ngay
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
