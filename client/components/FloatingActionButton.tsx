import React, { useState } from "react";
import { Phone, AlertTriangle, X, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function FloatingActionButton() {
  const [isExpanded, setIsExpanded] = useState(false);

  const emergencyActions = [
    {
      icon: Phone,
      label: "Gọi 113",
      color: "bg-red-600 hover:bg-red-700",
      action: () => window.open("tel:113"),
    },
    {
      icon: MessageCircle,
      label: "Chat hỗ trợ",
      color: "bg-blue-600 hover:bg-blue-700",
      action: () => {
        // Implement chat support
        console.log("Open chat support");
      },
    },
  ];

  return (
    <div className="fixed bottom-6 right-6 z-50 no-print">
      {/* Expanded Actions */}
      {isExpanded && (
        <div className="absolute bottom-16 right-0 space-y-3 mb-2">
          {emergencyActions.map((action, index) => (
            <Card
              key={index}
              className="transform transition-all duration-300 hover:scale-105 shadow-lg"
              style={{
                animationDelay: `${index * 100}ms`,
                animation: "stagger-in 0.3s ease forwards",
              }}
            >
              <CardContent className="p-3">
                <Button
                  onClick={action.action}
                  className={`${action.color} text-white shadow-md hover:shadow-lg transition-all w-full`}
                  size="sm"
                >
                  <action.icon className="h-4 w-4 mr-2" />
                  {action.label}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      {/* Main FAB */}
      <Button
        onClick={() => setIsExpanded(!isExpanded)}
        className={`
          h-14 w-14 rounded-full shadow-lg transition-all duration-300 
          ${
            isExpanded
              ? "bg-gray-600 hover:bg-gray-700 rotate-45"
              : "bg-red-600 hover:bg-red-700 emergency-pulse"
          }
          text-white
        `}
        aria-label={isExpanded ? "Đóng menu khẩn cấp" : "Mở menu khẩn cấp"}
      >
        {isExpanded ? (
          <X className="h-6 w-6" />
        ) : (
          <AlertTriangle className="h-6 w-6" />
        )}
      </Button>

      {/* Backdrop */}
      {isExpanded && (
        <div
          className="fixed inset-0 bg-black bg-opacity-20 -z-10"
          onClick={() => setIsExpanded(false)}
        />
      )}
    </div>
  );
}
