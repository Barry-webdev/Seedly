"use client";

import React from "react";
import Link from "next/link";
import { Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

// =============================================
// BUTTON — Composant atomique Seedly
// =============================================

type ButtonVariant = "primary" | "accent" | "outline" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonBaseProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  loading?: boolean;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  fullWidth?: boolean;
  className?: string;
  children: React.ReactNode;
}

interface ButtonAsButtonProps extends ButtonBaseProps {
  as?: "button";
  href?: never;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

interface ButtonAsLinkProps extends ButtonBaseProps {
  as: "link";
  href: string;
  onClick?: never;
  type?: never;
  disabled?: never;
  external?: boolean;
}

type ButtonProps = ButtonAsButtonProps | ButtonAsLinkProps;

const variantClasses: Record<ButtonVariant, string> = {
  primary: "btn-primary",
  accent: "btn-accent",
  outline: "btn-outline",
  ghost: "btn-ghost",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "btn-sm",
  md: "btn-md",
  lg: "btn-lg",
};

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "md",
  loading = false,
  icon,
  iconPosition = "right",
  fullWidth = false,
  className,
  children,
  ...props
}) => {
  const baseClasses = cn(
    variantClasses[variant],
    sizeClasses[size],
    fullWidth && "w-full",
    loading && "opacity-80 pointer-events-none",
    className
  );

  const content = (
    <>
      {loading && <Loader2 className="w-4 h-4 animate-spin" aria-hidden="true" />}
      {!loading && icon && iconPosition === "left" && (
        <span aria-hidden="true">{icon}</span>
      )}
      <span>{children}</span>
      {!loading && icon && iconPosition === "right" && (
        <span aria-hidden="true">{icon}</span>
      )}
    </>
  );

  if (props.as === "link") {
    const { href, external } = props as ButtonAsLinkProps;
    return (
      <Link
        href={href}
        className={baseClasses}
        {...(external
          ? { target: "_blank", rel: "noopener noreferrer" }
          : {})}
      >
        {content}
      </Link>
    );
  }

  const { onClick, type = "button", disabled } = props as ButtonAsButtonProps;

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className={baseClasses}
      aria-busy={loading}
    >
      {content}
    </button>
  );
};

export default Button;
