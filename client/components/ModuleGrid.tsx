import React from "react";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
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

interface ModuleGridProps {
  modules: Module[];
}

export default function ModuleGrid({ modules }: ModuleGridProps) {
  return (
    <div className="relative">
      {/* Desktop Grid Layout */}
      <div className="hidden md:block">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {/* First two modules in top row */}
          <div className="lg:col-span-1">
            <ModuleCard module={modules[0]} index={0} featured={false} />
          </div>
          <div className="lg:col-span-1">
            <ModuleCard module={modules[1]} index={1} featured={false} />
          </div>
          
          {/* Featured center module spanning full height */}
          <div className="lg:col-span-1 lg:row-span-2">
            <ModuleCard module={modules[2]} index={2} featured={true} />
          </div>
          
          {/* Last two modules in bottom row */}
          <div className="lg:col-span-1">
            <ModuleCard module={modules[3]} index={3} featured={false} />
          </div>
          <div className="lg:col-span-1">
            <ModuleCard module={modules[4]} index={4} featured={false} />
          </div>
        </div>
      </div>

      {/* Tablet Layout */}
      <div className="hidden sm:block md:hidden">
        <div className="grid grid-cols-2 gap-4 mb-6">
          {modules.slice(0, 4).map((module, index) => (
            <ModuleCard 
              key={index} 
              module={module} 
              index={index} 
              featured={false}
              compact={true}
            />
          ))}
        </div>
        <div className="max-w-md mx-auto">
          <ModuleCard module={modules[4]} index={4} featured={true} />
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="sm:hidden space-y-4">
        {modules.map((module, index) => (
          <ModuleCard 
            key={index} 
            module={module} 
            index={index} 
            featured={index === 2}
            mobile={true}
          />
        ))}
      </div>
    </div>
  );
}

interface ModuleCardProps {
  module: Module;
  index: number;
  featured: boolean;
  compact?: boolean;
  mobile?: boolean;
}

function ModuleCard({ module, index, featured, compact = false, mobile = false }: ModuleCardProps) {
  const cardContent = (
    <Card
      className={cn(
        "group relative overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2",
        featured 
          ? "bg-gradient-to-br from-white to-blue-50/50 dark:from-gray-800 dark:to-blue-900/20 shadow-xl ring-2 ring-blue-500/20" 
          : "bg-white/95 dark:bg-gray-800/95 shadow-lg hover:shadow-xl",
        compact ? "h-48" : featured ? "h-full min-h-[400px]" : mobile ? "h-auto" : "h-64"
      )}
    >
      <CardContent className={cn(
        "relative z-10 h-full flex flex-col",
        compact ? "p-4" : featured ? "p-6 lg:p-8" : "p-6"
      )}>
        {/* Icon */}
        <div className={cn(
          "inline-flex rounded-2xl mb-4 transition-all group-hover:scale-110",
          module.color,
          compact ? "p-3" : featured ? "p-4 lg:p-5" : "p-4"
        )}>
          <module.icon className={cn(
            "transition-all",
            compact ? "h-6 w-6" : featured ? "h-8 w-8 lg:h-10 lg:w-10" : "h-7 w-7"
          )} />
        </div>

        {/* Content */}
        <div className="flex-1 flex flex-col">
          <div className="flex items-start justify-between mb-3">
            <h3 className={cn(
              "font-bold text-gray-900 dark:text-white leading-tight",
              compact ? "text-base" : featured ? "text-xl lg:text-2xl" : "text-lg"
            )}>
              {module.title}
            </h3>
            <Badge 
              variant="outline" 
              className={cn(
                "flex-shrink-0 ml-2",
                module.color.split(" ")[0], 
                "border-current"
              )}
            >
              {index + 1}
            </Badge>
          </div>
          
          <p className={cn(
            "text-gray-600 dark:text-gray-300 leading-relaxed flex-1",
            compact ? "text-sm line-clamp-2" : featured ? "text-base lg:text-lg mb-6" : "text-sm line-clamp-3"
          )}>
            {module.description}
          </p>

          {/* Action Button */}
          <div className="mt-auto pt-4">
            <Link to={module.link} className="block">
              <Button 
                className={cn(
                  "w-full group/btn transition-all",
                  featured 
                    ? "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg" 
                    : "bg-gray-900 dark:bg-white text-white dark:text-gray-900 hover:bg-gray-800 dark:hover:bg-gray-100"
                )}
                size={compact ? "sm" : "default"}
              >
                {featured ? "Khám phá ngay" : "Tìm hiểu"}
                <ChevronRight className="h-4 w-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>

        {/* Background decoration for featured card */}
        {featured && (
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-cyan-500/5 pointer-events-none" />
        )}
      </CardContent>
    </Card>
  );

  return cardContent;
}
