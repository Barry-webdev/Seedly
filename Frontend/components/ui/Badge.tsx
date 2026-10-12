import React from "react";
import { cn } from "@/lib/utils";

// =============================================
// BADGE — Composant atomique Seedly
// =============================================

type BadgeVariant = "primary" | "neutral" | "accent";

interface BadgeProps {
  children: React.ReactNode;
  variant?: BadgeVariant;
  className?: string;
}

const badgeVariants: Record<BadgeVariant, string> = {
  primary: "badge-primary",
  neutral: "badge-neutral",
  accent:
    "badge text-xs font-semibold px-3 py-1 rounded-full border border-accent/30 text-accent bg-accent/10",
};

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = "neutral",
  className,
}) => {
  return (
    <span className={cn(badgeVariants[variant], className)}>
      {children}
    </span>
  );
};

export default Badge;
