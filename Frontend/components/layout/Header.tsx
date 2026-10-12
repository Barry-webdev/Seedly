"use client";

import React, { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { Button } from "@/components/ui/Button";
import { mainNavLinks } from "@/data/navigation";
import { cn } from "@/lib/utils";

// =============================================
// HEADER — Navigation principale Seedly
// =============================================

export const Header: React.FC = () => {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Détecter le scroll
  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 20);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  // Fermer le menu mobile au changement de route
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  // Bloquer le scroll du body quand le menu mobile est ouvert
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const isActive = (href: string): boolean => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled
            ? "py-3 bg-dark/95 backdrop-blur-md border-b border-white/5 shadow-xl"
            : "py-5 bg-transparent"
        )}
        role="banner"
      >
        <div className="container-seedly">
          <nav
            className="flex items-center justify-between"
            role="navigation"
            aria-label="Navigation principale"
          >
            {/* Logo */}
            <Logo size="md" />

            {/* Navigation desktop */}
            <ul className="hidden lg:flex items-center gap-1" role="list">
              {mainNavLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={cn(
                      "relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200",
                      "hover:text-white hover:bg-white/5",
                      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent",
                      isActive(link.href)
                        ? "text-white"
                        : "text-neutral-400"
                    )}
                    aria-current={isActive(link.href) ? "page" : undefined}
                  >
                    {link.label}
                    {isActive(link.href) && (
                      <span
                        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-0.5 rounded-full bg-accent"
                        aria-hidden="true"
                      />
                    )}
                  </Link>
                </li>
              ))}
            </ul>

            {/* CTA desktop */}
            <div className="hidden lg:flex items-center gap-3">
              <Button
                as="link"
                href="/devis"
                variant="accent"
                size="sm"
                icon={<ArrowRight className="w-4 h-4" />}
              >
                Demander un devis
              </Button>
            </div>

            {/* Bouton menu mobile */}
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen((prev) => !prev)}
              className={cn(
                "lg:hidden flex items-center justify-center w-10 h-10 rounded-xl",
                "text-neutral-300 hover:text-white hover:bg-white/10",
                "transition-all duration-200",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              )}
              aria-label={isMobileMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5" aria-hidden="true" />
              ) : (
                <Menu className="w-5 h-5" aria-hidden="true" />
              )}
            </button>
          </nav>
        </div>
      </header>

      {/* Menu mobile — Overlay */}
      <div
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Menu de navigation"
        className={cn(
          "fixed inset-0 z-40 lg:hidden transition-all duration-300",
          isMobileMenuOpen ? "visible opacity-100" : "invisible opacity-0"
        )}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          onClick={() => setIsMobileMenuOpen(false)}
          aria-hidden="true"
        />

        {/* Panneau menu */}
        <div
          className={cn(
            "absolute top-0 right-0 bottom-0 w-full max-w-sm",
            "flex flex-col",
            "bg-surface border-l border-white/5",
            "transition-transform duration-300",
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          )}
        >
          {/* Header du menu mobile */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-white/5">
            <Logo size="sm" />
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center justify-center w-9 h-9 rounded-lg text-neutral-400 hover:text-white hover:bg-white/10 transition-all"
              aria-label="Fermer le menu"
            >
              <X className="w-5 h-5" aria-hidden="true" />
            </button>
          </div>

          {/* Liens de navigation */}
          <nav className="flex-1 overflow-y-auto px-4 py-6">
            <ul className="flex flex-col gap-1" role="list">
              {mainNavLinks.map((link, index) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={cn(
                      "flex items-center justify-between px-4 py-3.5 rounded-xl",
                      "text-base font-medium transition-all duration-200",
                      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent",
                      isActive(link.href)
                        ? "bg-primary/15 text-white border border-primary/20"
                        : "text-neutral-300 hover:text-white hover:bg-white/5"
                    )}
                    style={{ animationDelay: `${index * 50}ms` }}
                    aria-current={isActive(link.href) ? "page" : undefined}
                  >
                    {link.label}
                    {isActive(link.href) && (
                      <span className="w-1.5 h-1.5 rounded-full bg-accent" aria-hidden="true" />
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* CTA mobile */}
          <div className="px-4 pb-8 pt-4 border-t border-white/5 space-y-3">
            <Button
              as="link"
              href="/devis"
              variant="accent"
              size="lg"
              fullWidth
              icon={<ArrowRight className="w-4 h-4" />}
            >
              Demander un devis
            </Button>
            <Button
              as="link"
              href="/contact"
              variant="outline"
              size="md"
              fullWidth
            >
              Nous contacter
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
