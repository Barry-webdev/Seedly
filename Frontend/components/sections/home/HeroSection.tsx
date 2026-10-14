"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";
import { companyInfo } from "@/data/company";
import { whatsappCTA } from "@/data/contact";

export const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#0A0B0E]" aria-labelledby="hero-title">
      <div className="absolute inset-0 dot-pattern opacity-50 pointer-events-none" aria-hidden="true" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A0B0E] via-[#0A0B0E]/90 to-[#0A0B0E] pointer-events-none" aria-hidden="true" />

      <div className="container-seedly relative z-10 pt-32 pb-20">
        <div className="max-w-4xl mx-auto">

          <div className="flex justify-center mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#EEF1FD] border border-[#4169E1]/20 text-[#4169E1] text-sm font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-[#4169E1] animate-pulse" aria-hidden="true" />
              Agence digitale · Conakry, Guinée
            </div>
          </div>

          <p className="text-center text-xs font-semibold tracking-[0.18em] uppercase text-[#9A9A93] mb-4">            Seedly Technology &amp; Apps
          </p>

          <h1
            id="hero-title"
            className="text-center font-bold text-balance text-[#F4F3EF] mb-6"
            style={{ fontSize: "clamp(2.25rem, 6vw, 4.25rem)", lineHeight: 1.06, letterSpacing: "-0.035em" }}
          >
            Votre{" "}
            <span className="text-gradient">présence digitale</span>
            {" "}commence ici.
          </h1>

          <p className="text-center text-lg md:text-xl text-[#9A9A93] leading-relaxed max-w-2xl mx-auto mb-4">
            Seedly Technology &amp; Apps accompagne les entreprises guinéennes dans leur
            transformation digitale. Sites web, applications mobiles, design et marketing —
            nous construisons les outils qui font grandir votre activité.
          </p>

          <p className="text-center text-sm font-medium text-[#4169E1]/70 italic mb-10">
            « {companyInfo.taglineFr} »
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link href="/devis" className="btn-primary btn-lg inline-flex items-center gap-2">
              Parlons de votre projet
              <ArrowRight className="w-5 h-5" aria-hidden="true" />
            </Link>
            <Link href="/services" className="btn-outline btn-lg inline-flex items-center gap-2">
              Découvrir nos services
            </Link>
          </div>

          <div className="flex justify-center mt-6">
            <a
              href={whatsappCTA()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-[#9A9A93] hover:text-[#F4F3EF] transition-colors"
            >
              <MessageCircle className="w-4 h-4 text-green-500" aria-hidden="true" />
              Ou écrivez-nous directement sur WhatsApp
              <ArrowRight className="w-3 h-3" aria-hidden="true" />
            </a>
          </div>
        </div>

        {/* Visual mockup */}
        <div className="mt-20 relative max-w-4xl mx-auto" aria-hidden="true">
          <div className="rounded-2xl overflow-hidden border border-white/10 bg-[#14161A] shadow-lg">
            <div className="flex items-center gap-2 px-5 py-4 border-b border-white/8 bg-[#1C1F26]">
              <div className="w-3 h-3 rounded-full bg-red-400/70" />
              <div className="w-3 h-3 rounded-full bg-yellow-400/70" />
              <div className="w-3 h-3 rounded-full bg-green-400/70" />
              <div className="flex-1 mx-4 h-7 rounded-lg bg-[#0A0B0E] border border-white/10 flex items-center px-3">
                <div className="w-2 h-2 rounded-full bg-green-400 mr-2" />
                <span className="text-xs text-[#9A9A93]">seedly.tech</span>
              </div>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
                {[
                  { label: "Sites Web",    icon: "🌐" },
                  { label: "Apps Mobiles", icon: "📱" },
                  { label: "Design UI/UX", icon: "🎨" },
                  { label: "Marketing",    icon: "📈" },
                ].map((item) => (
                  <div key={item.label} className="p-4 rounded-xl border border-white/8 bg-white/5 flex flex-col items-center gap-2">
                    <span className="text-2xl">{item.icon}</span>
                    <span className="text-xs font-medium text-[#F4F3EF] text-center">{item.label}</span>
                  </div>
                ))}
              </div>
              <div className="space-y-3">
                {[
                  { label: "Conception",    width: "88%" },
                  { label: "Développement", width: "74%" },
                  { label: "Lancement",     width: "96%" },
                ].map((bar) => (
                  <div key={bar.label} className="flex items-center gap-3">
                    <span className="text-xs text-[#9A9A93] w-28 text-right">{bar.label}</span>
                    <div className="flex-1 h-1.5 rounded-full bg-white/8">
                      <div className="h-full rounded-full bg-[#4169E1]" style={{ width: bar.width }} />
                    </div>
                    <span className="text-xs text-[#9A9A93] w-8">{bar.width}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="absolute -bottom-4 left-8 right-8 h-6 bg-[#4169E1]/15 rounded-full blur-xl" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
