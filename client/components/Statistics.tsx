import React from "react";
import { Card, CardContent } from "@/components/ui/card";

interface StatisticItem {
  value: string;
  label: string;
  color: string;
  description?: string;
}

interface StatisticsProps {
  title: string;
  subtitle: string;
  stats: StatisticItem[];
  backgroundGradient?: string;
}

export default function Statistics({
  title,
  subtitle,
  stats,
  backgroundGradient = "from-gray-50 to-blue-50",
}: StatisticsProps) {
  return (
    <div className={`bg-gradient-to-br ${backgroundGradient} py-16`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {title}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">{subtitle}</p>
        </div>

        <div
          className={`grid grid-cols-1 ${stats.length === 4 ? "md:grid-cols-4" : "md:grid-cols-3"} gap-8`}
        >
          {stats.map((stat, index) => (
            <Card
              key={index}
              className="text-center bg-white hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <CardContent className="p-6">
                <div
                  className={`text-4xl font-bold mb-2 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent animate-pulse`}
                >
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600 font-medium">
                  {stat.label}
                </div>
                {stat.description && (
                  <div className="text-xs text-gray-500 mt-2">
                    {stat.description}
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
