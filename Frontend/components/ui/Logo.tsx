import React from "react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

// =============================================
// LOGO SEEDLY — Image officielle /public/Logo.jpeg
// =============================================

interface LogoProps {
  size?: "sm" | "md" | "lg";
  showTagline?: boolean;
  className?: string;
  asLink?: boolean;
}

const sizes = {
  sm: 36,
  md: 48,
  lg: 60,
};

export const Logo: React.FC<LogoProps> = ({
  size = "md",
  // showTagline accepté mais non affiché — le logo suffit
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  showTagline: _showTagline,
  className,
  asLink = true,
}) => {
  const dimension = sizes[size];

  const logoContent = (
    <div className={cn("flex items-center", className)}>
      <Image
        src="/Logo Seedly.png"
        alt="Seedly Technology & Apps"
        width={dimension}
        height={dimension}
        className="rounded-lg object-contain"
        priority
      />
    </div>
  );

  if (asLink) {
    return (
      <Link
        href="/"
        className="inline-flex items-center rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4169E1]"
        aria-label="Seedly Technology & Apps — Retour à l'accueil"
      >
        {logoContent}
      </Link>
    );
  }

  return logoContent;
};

export default Logo;
