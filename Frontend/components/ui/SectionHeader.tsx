import React from "react";
import { cn } from "@/lib/utils";

// =============================================
// SECTION HEADER — Titre de section réutilisable
// =============================================

interface SectionHeaderProps {
  label?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  titleClassName?: string;
  className?: string;
  titleAs?: "h1" | "h2" | "h3";
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  label,
  title,
  description,
  align = "center",
  titleClassName,
  className,
  titleAs: TitleTag = "h2",
}) => {
  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        align === "center" ? "items-center text-center" : "items-start text-left",
        className
      )}
    >
      {label && (
        <div className="flex items-center gap-2">
          <span className="w-6 h-0.5 rounded-full bg-accent" aria-hidden="true" />
          <span className="section-label">{label}</span>
          <span className="w-6 h-0.5 rounded-full bg-accent" aria-hidden="true" />
        </div>
      )}

      <TitleTag
        className={cn(
          "section-title text-balance",
          align === "center" && "max-w-2xl",
          titleClassName
        )}
      >
        {title}
      </TitleTag>

      {description && (
        <p
          className={cn(
            "section-description",
            align === "center" && "text-center mx-auto"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;
