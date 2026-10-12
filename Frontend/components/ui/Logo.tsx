import React from "react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

// =============================================
// LOGO SEEDLY — Image officielle /public/Logo.jpeg
// Format carré 1600×1600px
// =============================================

interface LogoProps {
  size?: "sm" | "md" | "lg";
  showTagline?: boolean;
  className?: string;
  asLink?: boolean;
}

// Tailles carrées adaptées à chaque contexte
const sizes = {
  sm: 36,   // Menu mobile header compact
  md: 48,   // Header principal
  lg: 60,   // Footer
};

export const Logo: React.FC<LogoProps> = ({
  size = "md",
  showTagline = false,
  className,
  asLink = true,
}) => {
  const dimension = sizes[size];

  const logoContent = (
    <div className={cn("flex items-center gap-2.5", className)}>
      <Image
        src="/Logo.jpeg"
        alt="Seedly Technology & Apps"
        width={dimension}
        height={dimension}
        className="rounded-lg object-contain"
        priority
      />
      <div className="flex flex-col leading-none">
        <span
          className="font-bold text-neutral-50 tracking-tight"
          style={{
            fontFamily: "var(--font-plus-jakarta), sans-serif",
            fontSize: size === "sm" ? "1rem" : size === "md" ? "1.2rem" : "1.4rem",
          }}
        >
          Seedly
        </span>
        {showTagline && (
          <span className="text-xs text-neutral-400 font-medium mt-0.5">
            Technology & Apps
          </span>
        )}
      </div>
    </div>
  );

  if (asLink) {
    return (
      <Link
        href="/"
        className="inline-flex items-center rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
        aria-label="Seedly Technology & Apps — Retour à l'accueil"
      >
        {logoContent}
      </Link>
    );
  }

  return logoContent;
};

export default Logo;
