"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { whatsappCTA } from "@/data/contact";

export const CTASection: React.FC = () => {
  const { t } = useLanguage();
  return (
    <section className="section-padding bg-[#0A0B0E]" aria-labelledby="cta-title">
      <div className="container-seedly">
        <div className="relative rounded-3xl overflow-hidden bg-[#14161A] border border-white/8">
          <div className="absolute inset-0 dot-pattern opacity-20" aria-hidden="true" />
          <div className="relative z-10 px-8 py-16 md:py-20 text-center">
            <div className="max-w-2xl mx-auto space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#4169E1]/10 text-[#7F9FF1] text-sm font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-[#4169E1] animate-pulse" aria-hidden="true" />
                {t.cta.ready}
              </div>
              <h2 id="cta-title" className="font-bold text-[#F4F3EF] text-balance" style={{ letterSpacing: "-0.025em" }}>
                {t.cta.title}
              </h2>
              <p className="text-lg text-[#9A9A93] leading-relaxed">{t.cta.description}</p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
                <Link href="/devis" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-[#4169E1] text-[#F4F3EF] font-semibold hover:bg-[#2F52C8] transition-colors">
                  {t.cta.primary}
                  <ArrowRight className="w-5 h-5" aria-hidden="true" />
                </Link>
                <a
                  href={whatsappCTA("Bonjour Seedly, je veux démarrer un projet.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-[#F4F3EF] border border-white/15 hover:bg-white/5 transition-all duration-200"
                >
                  <WhatsAppIcon className="w-5 h-5 text-green-400" />
                  {t.cta.whatsapp}
                </a>
              </div>
              <p className="text-sm text-[#9A9A93]/60">{t.cta.note}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
