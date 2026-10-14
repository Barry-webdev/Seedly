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

  const handleScroll = useCallback(() => setIsScrolled(window.scrollY > 16), []);

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
            ? "py-3 bg-[#0A0B0E]/95 backdrop-blur-md border-b border-white/8 shadow-lg"
            : "py-5 bg-transparent"
        )}
        role="banner"
      >
        <div className="container-seedly">
          <nav className="flex items-center justify-between" role="navigation" aria-label="Navigation principale">
            <Logo size="md" />

            <ul className="hidden lg:flex items-center gap-1" role="list">
              {mainNavLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={cn(
                      "relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200",
                      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4169E1]",
                      isActive(link.href)
                        ? "text-white bg-white/8"
                        : "text-[#9A9A93] hover:text-white hover:bg-white/5"
                    )}
                    aria-current={isActive(link.href) ? "page" : undefined}
                  >
                    {link.label}
                    {isActive(link.href) && (
                      <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-0.5 rounded-full bg-[#4169E1]" aria-hidden="true" />
                    )}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="hidden lg:flex items-center gap-3">
              <Link href="/devis" className="btn-primary btn-md inline-flex items-center gap-2">
                Demander un devis
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
            </div>

            <button
              type="button"
              onClick={() => setIsMobileMenuOpen((p) => !p)}
              className="lg:hidden flex items-center justify-center w-10 h-10 rounded-xl border border-white/10 text-[#9A9A93] hover:text-white hover:bg-white/5 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4169E1]"
              aria-label={isMobileMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" aria-hidden="true" /> : <Menu className="w-5 h-5" aria-hidden="true" />}
            </button>
          </nav>
        </div>
      </header>

      <div
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Menu de navigation"
        className={cn("fixed inset-0 z-40 lg:hidden transition-all duration-300", isMobileMenuOpen ? "visible opacity-100" : "invisible opacity-0")}
      >
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setIsMobileMenuOpen(false)} aria-hidden="true" />
        <div className={cn(
          "absolute top-0 right-0 bottom-0 w-full max-w-sm flex flex-col bg-[#14161A] border-l border-white/8 transition-transform duration-300",
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}>
          <div className="flex items-center justify-between px-6 py-5 border-b border-white/8">
            <Logo size="sm" />
            <button type="button" onClick={() => setIsMobileMenuOpen(false)} className="w-9 h-9 flex items-center justify-center rounded-lg text-[#9A9A93] hover:text-white hover:bg-white/8 transition-all" aria-label="Fermer le menu">
              <X className="w-5 h-5" aria-hidden="true" />
            </button>
          </div>
          <nav className="flex-1 overflow-y-auto px-4 py-6">
            <ul className="flex flex-col gap-1" role="list">
              {mainNavLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={cn(
                      "flex items-center justify-between px-4 py-3.5 rounded-xl text-base font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4169E1]",
                      isActive(link.href) ? "bg-[#4169E1]/15 text-white border border-[#4169E1]/25" : "text-[#9A9A93] hover:text-white hover:bg-white/5"
                    )}
                    aria-current={isActive(link.href) ? "page" : undefined}
                  >
                    {link.label}
                    {isActive(link.href) && <span className="w-1.5 h-1.5 rounded-full bg-[#4169E1]" aria-hidden="true" />}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="px-4 pb-8 pt-4 border-t border-white/8 space-y-3">
            <Link href="/devis" className="btn-primary btn-lg w-full inline-flex items-center justify-center gap-2">
              Demander un devis
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
            <Link href="/contact" className="btn-outline btn-md w-full inline-flex items-center justify-center">
              Nous contacter
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
