import React from "react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

// =============================================
// LOGO SEEDLY — Image officielle depuis /public/Logo.jpeg
// =============================================

interface LogoProps {
  size?: "sm" | "md" | "lg";
  showTagline?: boolean;
  className?: string;
  asLink?: boolean;
}

const sizes = {
  sm: { width: 100, height: 36 },
  md: { width: 130, height: 46 },
  lg: { width: 160, height: 56 },
};

export const Logo: React.FC<LogoProps> = ({
  size = "md",
  showTagline = false,
  className,
  asLink = true,
}) => {
  const { width, height } = sizes[size];

  const logoContent = (
    <div className={cn("flex flex-col", className)}>
      <Image
        src="/Logo.jpeg"
        alt="Seedly Technology & Apps"
        width={width}
        height={height}
        className="object-contain"
        priority
      />
      {showTagline && (
        <span className="text-xs font-medium text-neutral-400 mt-0.5 leading-tight">
          Technology & Apps
        </span>
      )}
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
