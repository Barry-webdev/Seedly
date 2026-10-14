"use client";

import React, { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { mainNavLinks } from "@/data/navigation";
import { cn } from "@/lib/utils";

export const Header: React.FC = () => {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 16);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  useEffect(() => { setIsMobileMenuOpen(false); }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isMobileMenuOpen]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled
            ? "py-3 bg-white/95 backdrop-blur-md border-b border-[#DADAD5] shadow-sm"
            : "py-5 bg-transparent"
        )}
        role="banner"
      >
        <div className="container-seedly">
          <nav className="flex items-center justify-between" role="navigation" aria-label="Navigation principale">

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
                      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue",
                      isActive(link.href)
                        ? "text-[#4169E1] bg-[#EEF1FD]"
                        : "text-[#62666A] hover:text-[#202326] hover:bg-[#F4F3EF]"
                    )}
                    aria-current={isActive(link.href) ? "page" : undefined}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* CTA desktop */}
            <div className="hidden lg:flex items-center gap-3">
              <Link
                href="/contact"
                className="text-sm font-medium text-[#62666A] hover:text-[#202326] transition-colors px-3 py-2"
              >
                Contact
              </Link>
              <Link
                href="/devis"
                className="btn-primary btn-md inline-flex items-center gap-2"
              >
                Demander un devis
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
            </div>

            {/* Burger mobile */}
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen((p) => !p)}
              className="lg:hidden flex items-center justify-center w-10 h-10 rounded-xl border border-[#DADAD5] text-[#62666A] hover:text-[#202326] hover:bg-[#F4F3EF] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue"
              aria-label={isMobileMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
            >
              {isMobileMenuOpen
                ? <X className="w-5 h-5" aria-hidden="true" />
                : <Menu className="w-5 h-5" aria-hidden="true" />
              }
            </button>
          </nav>
        </div>
      </header>

      {/* ── Menu mobile ────────────────────────────────── */}
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
          className="absolute inset-0 bg-ink/30 backdrop-blur-sm"
          onClick={() => setIsMobileMenuOpen(false)}
          aria-hidden="true"
        />

        {/* Panneau */}
        <div className={cn(
          "absolute top-0 right-0 bottom-0 w-full max-w-sm flex flex-col bg-white border-l border-[#DADAD5]",
          "transition-transform duration-300",
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}>
          {/* Header panneau */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-[#DADAD5]">
            <Logo size="sm" />
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-9 h-9 flex items-center justify-center rounded-lg text-[#62666A] hover:text-[#202326] hover:bg-[#F4F3EF] transition-all"
              aria-label="Fermer le menu"
            >
              <X className="w-5 h-5" aria-hidden="true" />
            </button>
          </div>

          {/* Liens */}
          <nav className="flex-1 overflow-y-auto px-4 py-6">
            <ul className="flex flex-col gap-1" role="list">
              {mainNavLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={cn(
                      "flex items-center justify-between px-4 py-3.5 rounded-xl text-base font-medium transition-all duration-200",
                      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue",
                      isActive(link.href)
                        ? "bg-[#EEF1FD] text-[#4169E1] font-semibold"
                        : "text-[#62666A] hover:text-[#202326] hover:bg-[#F4F3EF]"
                    )}
                    aria-current={isActive(link.href) ? "page" : undefined}
                  >
                    {link.label}
                    {isActive(link.href) && (
                      <span className="w-1.5 h-1.5 rounded-full bg-[#4169E1]" aria-hidden="true" />
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* CTA mobile */}
          <div className="px-4 pb-8 pt-4 border-t border-[#DADAD5] space-y-3">
            <Link
              href="/devis"
              className="btn-primary btn-lg w-full inline-flex items-center justify-center gap-2"
            >
              Demander un devis
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
            <Link
              href="/contact"
              className="btn-outline btn-md w-full inline-flex items-center justify-center"
            >
              Nous contacter
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
