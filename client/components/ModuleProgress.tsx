import React from "react";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { BookOpen, CheckCircle } from "lucide-react";
import { cn } from "@/lib/utils";

interface ModuleProgressProps {
  currentModule: number;
  totalModules: number;
  moduleTitle: string;
  completedModules?: number[];
}

export default function ModuleProgress({ 
  currentModule, 
  totalModules, 
  moduleTitle,
  completedModules = [] 
}: ModuleProgressProps) {
  const progressPercentage = ((currentModule + 1) / totalModules) * 100;
  const completedCount = completedModules.length;

  return (
    <div className="bg-white/95 dark:bg-gray-800/95 backdrop-blur-md border border-gray-200/50 dark:border-gray-700/50 rounded-xl p-6 shadow-lg">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className="flex items-center justify-center w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-full">
            <BookOpen className="h-5 w-5 text-blue-600 dark:text-blue-400" />
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white">
              Tiến trình học tập
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Bạn đang ở <span className="font-medium text-blue-600">{moduleTitle}</span>
            </p>
          </div>
        </div>
        
        <div className="text-right">
          <Badge 
            variant="outline" 
            className="bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-700 text-blue-700 dark:text-blue-300"
          >
            {currentModule + 1}/{totalModules}
          </Badge>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="space-y-3">
        <div className="flex justify-between items-center text-sm">
          <span className="text-gray-600 dark:text-gray-400">
            Hoàn thành: {completedCount}/{totalModules} mô-đun
          </span>
          <span className="font-medium text-blue-600 dark:text-blue-400">
            {Math.round(progressPercentage)}%
          </span>
        </div>
        
        <Progress 
          value={progressPercentage} 
          className="h-2 bg-gray-200 dark:bg-gray-700"
        />
        
        {/* Module dots */}
        <div className="flex justify-between items-center">
          {Array.from({ length: totalModules }, (_, index) => {
            const isCompleted = completedModules.includes(index);
            const isCurrent = index === currentModule;
            
            return (
              <div
                key={index}
                className={cn(
                  "flex flex-col items-center space-y-1 transition-all",
                  isCurrent && "scale-110"
                )}
              >
                <div
                  className={cn(
                    "w-8 h-8 rounded-full flex items-center justify-center text-xs font-medium transition-all",
                    isCompleted 
                      ? "bg-green-500 text-white shadow-md" 
                      : isCurrent 
                        ? "bg-blue-500 text-white shadow-md ring-2 ring-blue-200 dark:ring-blue-800" 
                        : "bg-gray-200 dark:bg-gray-700 text-gray-500 dark:text-gray-400"
                  )}
                >
                  {isCompleted ? (
                    <CheckCircle className="h-4 w-4" />
                  ) : (
                    index + 1
                  )}
                </div>
                <span className={cn(
                  "text-xs transition-all",
                  isCurrent 
                    ? "text-blue-600 dark:text-blue-400 font-medium" 
                    : "text-gray-500 dark:text-gray-400"
                )}>
                  {index === 0 && "An Toàn"}
                  {index === 1 && "Đạo Đức"}
                  {index === 2 && "AI Safe"}
                  {index === 3 && "Pháp Luật"}
                  {index === 4 && "Kỹ Năng"}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Additional info */}
      <div className="mt-4 pt-4 border-t border-gray-200/50 dark:border-gray-700/50">
        <div className="flex items-center justify-between text-sm">
          <span className="text-gray-600 dark:text-gray-400">
            Thời gian học ước tính: {totalModules * 15} phút
          </span>
          {completedCount > 0 && (
            <span className="text-green-600 dark:text-green-400 flex items-center space-x-1">
              <CheckCircle className="h-4 w-4" />
              <span>{completedCount} mô-đun hoàn thành</span>
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
