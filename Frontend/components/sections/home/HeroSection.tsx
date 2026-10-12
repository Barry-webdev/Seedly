"use client";

import React from "react";
import { ArrowRight, MessageCircle, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { companyInfo } from "@/data/company";
import { whatsappCTA } from "@/data/contact";

// =============================================
// HERO SECTION — Page d'accueil Seedly
// =============================================

export const HeroSection: React.FC = () => {
  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      aria-labelledby="hero-title"
    >
      {/* Fond avec grille décorative */}
      <div className="absolute inset-0 grid-bg opacity-50" aria-hidden="true" />

      {/* Orbes lumineux de fond */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-accent/5 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-3xl" />
      </div>

      <div className="container-seedly relative z-10 pt-32 pb-20">
        <div className="max-w-4xl mx-auto">
          {/* Badge d'accroche */}
          <div className="flex justify-center mb-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent/20 bg-accent/5 text-accent text-sm font-medium">
              <Sparkles className="w-4 h-4" aria-hidden="true" />
              <span>Agence digitale à Conakry, Guinée</span>
            </div>
          </div>

          {/* Nom complet */}
          <p className="text-center text-sm font-semibold text-neutral-400 uppercase tracking-widest mb-4">
            Seedly Technology &amp; Apps
          </p>

          {/* Titre principal */}
          <h1
            id="hero-title"
            className="text-center text-4xl sm:text-5xl md:text-6xl lg:text-display-xl font-bold text-white leading-tight text-balance mb-6"
            style={{ fontFamily: "var(--font-plus-jakarta), sans-serif" }}
          >
            Votre{" "}
            <span className="text-gradient">présence digitale</span>
            {" "}commence ici.
          </h1>

          {/* Description */}
          <p className="text-center text-lg md:text-xl text-neutral-400 leading-relaxed max-w-2xl mx-auto mb-4">
            Seedly Technology &amp; Apps accompagne les entreprises guinéennes dans leur transformation digitale.
            Sites web, applications mobiles, design et marketing — nous construisons les outils
            qui font grandir votre activité.
          </p>

          {/* Signature de marque */}
          <p className="text-center text-sm font-medium text-accent/80 italic mb-10">
            « {companyInfo.taglineFr} »
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              as="link"
              href="/devis"
              variant="accent"
              size="lg"
              icon={<ArrowRight className="w-5 h-5" />}
            >
              Parlons de votre projet
            </Button>
            <Button
              as="link"
              href="/services"
              variant="outline"
              size="lg"
            >
              Découvrir nos services
            </Button>
          </div>

          {/* WhatsApp CTA */}
          <div className="flex justify-center mt-6">
            <a
              href={whatsappCTA()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-neutral-500 hover:text-neutral-300 transition-colors duration-200"
            >
              <MessageCircle className="w-4 h-4 text-green-500" aria-hidden="true" />
              Ou écrivez-nous directement sur WhatsApp
              <ArrowRight className="w-3 h-3" aria-hidden="true" />
            </a>
          </div>
        </div>

        {/* Visual Hero — Composition graphique */}
        <div className="mt-20 relative max-w-5xl mx-auto" aria-hidden="true">
          <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-surface/50 backdrop-blur-sm p-6 md:p-8">
            {/* Barre de fenêtre décorative */}
            <div className="flex items-center gap-2 mb-6">
              <div className="w-3 h-3 rounded-full bg-red-500/70" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
              <div className="w-3 h-3 rounded-full bg-green-500/70" />
              <div className="flex-1 mx-4 h-6 rounded-md bg-white/5 flex items-center px-3">
                <span className="text-xs text-neutral-500">seedly.tech</span>
              </div>
            </div>

            {/* Grille de cards décorative */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {[
                { label: "Sites Web", icon: "🌐", color: "from-green-900/40 to-green-800/20" },
                { label: "Apps Mobiles", icon: "📱", color: "from-emerald-900/40 to-emerald-800/20" },
                { label: "Design UI/UX", icon: "🎨", color: "from-teal-900/40 to-teal-800/20" },
                { label: "Marketing", icon: "📈", color: "from-cyan-900/40 to-cyan-800/20" },
              ].map((item) => (
                <div
                  key={item.label}
                  className={`p-4 rounded-xl bg-gradient-to-br ${item.color} border border-white/5 flex flex-col items-center gap-2`}
                >
                  <span className="text-2xl">{item.icon}</span>
                  <span className="text-xs font-medium text-neutral-300 text-center">{item.label}</span>
                </div>
              ))}
            </div>

            {/* Ligne de progression décorative */}
            <div className="mt-6 space-y-2">
              {[
                { label: "Conception", width: "85%" },
                { label: "Développement", width: "70%" },
                { label: "Lancement", width: "95%" },
              ].map((bar) => (
                <div key={bar.label} className="flex items-center gap-3">
                  <span className="text-xs text-neutral-500 w-24 text-right">{bar.label}</span>
                  <div className="flex-1 h-1.5 rounded-full bg-white/5">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-primary to-accent"
                      style={{ width: bar.width }}
                    />
                  </div>
                  <span className="text-xs text-neutral-500 w-8">{bar.width}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Glow effect sous la card */}
          <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-3/4 h-12 bg-primary/20 blur-2xl rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
