"use client";

import React from "react";
import Link from "next/link";
import { Monitor, Smartphone, PenTool, TrendingUp, ArrowRight } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { services } from "@/data/services";
import { useLanguage } from "@/lib/i18n/LanguageContext";

const serviceIcons: Record<string, React.ReactNode> = {
  monitor:       <Monitor className="w-6 h-6" />,
  smartphone:    <Smartphone className="w-6 h-6" />,
  "pen-tool":    <PenTool className="w-6 h-6" />,
  "trending-up": <TrendingUp className="w-6 h-6" />,
};

export const ServicesSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="section-padding bg-[#0A0B0E]" aria-labelledby="services-title">
      <div className="container-seedly">
        <SectionHeader
          label={t.sections.whatWeDo}
          title={t.services.title}
          description={t.services.description}
        />

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-5">
          {services.map((service, index) => (
            <Link
              key={service.id}
              href={`/services#${service.id}`}
              className="card-seedly p-6 md:p-8 group block"
              aria-label={`En savoir plus sur ${service.title}`}
            >
              <div className="flex flex-col h-full gap-5">
                <div className="flex items-start justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-[#4169E1]/10 flex items-center justify-center text-[#7F9FF1] group-hover:bg-[#4169E1] group-hover:text-white transition-all duration-300">
                    {serviceIcons[service.icon] ?? <Monitor className="w-6 h-6" />}
                  </div>
                  <span className="text-xs font-mono text-[#9A9A93]">0{index + 1}</span>
                </div>
                <div className="flex-1 space-y-2">
                  <h3 className="text-lg font-bold text-[#F4F3EF] group-hover:text-[#7F9FF1] transition-colors duration-200">
                    {service.shortTitle}
                  </h3>
                  <p className="text-sm text-[#9A9A93] leading-relaxed">{service.shortDescription}</p>
                </div>
                <ul className="space-y-1.5">
                  {service.deliverables.slice(0, 3).map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-xs text-[#9A9A93]">
                      <span className="w-1 h-1 rounded-full bg-[#4169E1]/40 shrink-0" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="flex items-center gap-2 text-sm font-medium text-[#9A9A93] group-hover:text-[#7F9FF1] transition-colors pt-2 border-t border-white/8">
                  <span>{t.services.learnMore}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/services" className="btn-outline btn-md inline-flex items-center gap-2">
            {t.services.viewAll}
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </Link>
          <Link href="/devis" className="btn-primary btn-md inline-flex items-center gap-2">
            {t.nav.cta}
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
