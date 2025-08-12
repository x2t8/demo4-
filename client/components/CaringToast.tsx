import React, { useState, useEffect } from "react";
import { AlertTriangle, Shield, Heart, X } from "lucide-react";

interface ToastProps {
  message: string;
  type: "warning" | "protection" | "care";
  duration?: number;
  onClose: () => void;
}

const ToastIcon = ({ type }: { type: ToastProps["type"] }) => {
  switch (type) {
    case "warning":
      return (
        <AlertTriangle className="h-5 w-5 text-red-500 animate-gentle-wave" />
      );
    case "protection":
      return (
        <Shield className="h-5 w-5 text-green-500 animate-protective-pulse" />
      );
    case "care":
      return <Heart className="h-5 w-5 text-blue-500 animate-heartbeat" />;
  }
};

export default function CaringToast({
  message,
  type,
  duration = 5000,
  onClose,
}: ToastProps) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onClose, 300); // Wait for exit animation
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onClose]);

  const getToastStyles = () => {
    switch (type) {
      case "warning":
        return "bg-red-50 border-red-200 text-red-800";
      case "protection":
        return "bg-green-50 border-green-200 text-green-800";
      case "care":
        return "bg-blue-50 border-blue-200 text-blue-800";
    }
  };

  return (
    <div
      className={`fixed top-20 right-4 z-50 max-w-sm transition-all duration-300 ${
        isVisible
          ? "translate-x-0 opacity-100 animate-slide-up"
          : "translate-x-full opacity-0"
      }`}
    >
      <div className={`rounded-lg border p-4 shadow-lg ${getToastStyles()}`}>
        <div className="flex items-start space-x-3">
          <ToastIcon type={type} />
          <div className="flex-1">
            <p className="text-sm font-medium">{message}</p>
          </div>
          <button
            onClick={() => {
              setIsVisible(false);
              setTimeout(onClose, 300);
            }}
            className="flex-shrink-0 text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}

// Toast provider component
interface CaringToastProviderProps {
  children: React.ReactNode;
}

interface Toast {
  id: string;
  message: string;
  type: "warning" | "protection" | "care";
  duration?: number;
}

export function CaringToastProvider({ children }: CaringToastProviderProps) {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const addToast = (toast: Omit<Toast, "id">) => {
    const id = Math.random().toString(36).substr(2, 9);
    setToasts((prev) => [...prev, { ...toast, id }]);
  };

  const removeToast = (id: string) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  };

  // Auto-show care messages when user stays on page
  useEffect(() => {
    const careMessages = [
      {
        message: "💚 Bạn đang bảo vệ bản thân và gia đình khỏi lừa đảo",
        type: "care" as const,
      },
      {
        message: "🛡️ Kiến thức là vũ khí mạnh nhất chống lại kẻ xấu",
        type: "protection" as const,
      },
      {
        message: "❤️ Hãy chia sẻ kiến thức này với người thân yêu",
        type: "care" as const,
      },
    ];

    const showCareMessage = () => {
      const randomMessage =
        careMessages[Math.floor(Math.random() * careMessages.length)];
      addToast({
        ...randomMessage,
        duration: 4000,
      });
    };

    // Show first care message after 10 seconds
    const firstTimer = setTimeout(showCareMessage, 10000);

    // Show subsequent messages every 30 seconds
    const interval = setInterval(showCareMessage, 30000);

    return () => {
      clearTimeout(firstTimer);
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      {children}
      {toasts.map((toast) => (
        <CaringToast
          key={toast.id}
          message={toast.message}
          type={toast.type}
          duration={toast.duration}
          onClose={() => removeToast(toast.id)}
        />
      ))}
    </>
  );
}
