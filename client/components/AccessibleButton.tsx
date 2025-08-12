import React from "react";
import { Button, ButtonProps } from "@/components/ui/button";

interface AccessibleButtonProps extends ButtonProps {
  ariaLabel?: string;
  ariaDescribedBy?: string;
  role?: string;
  tabIndex?: number;
}

export default function AccessibleButton({
  children,
  ariaLabel,
  ariaDescribedBy,
  role,
  tabIndex,
  className,
  onKeyDown,
  ...props
}: AccessibleButtonProps) {
  const handleKeyDown = (e: React.KeyboardEvent) => {
    // Enhanced keyboard navigation
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      if (props.onClick) {
        props.onClick(e as any);
      }
    }
    if (onKeyDown) {
      onKeyDown(e);
    }
  };

  return (
    <Button
      {...props}
      className={`focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${className}`}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      role={role}
      tabIndex={tabIndex}
      onKeyDown={handleKeyDown}
    >
      {children}
    </Button>
  );
}
