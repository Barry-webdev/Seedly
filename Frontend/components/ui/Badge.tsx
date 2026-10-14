import React from "react";
import { cn } from "@/lib/utils";

type BadgeVariant = "primary" | "neutral" | "accent";

interface BadgeProps {
  children: React.ReactNode;
  variant?: BadgeVariant;
  className?: string;
}

const badgeVariants: Record<BadgeVariant, string> = {
  primary: "badge-primary",
  neutral: "badge-neutral",
  accent:  "badge-primary",
};

export const Badge: React.FC<BadgeProps> = ({ children, variant = "neutral", className }) => (
  <span className={cn(badgeVariants[variant], className)}>{children}</span>
);

export default Badge;
