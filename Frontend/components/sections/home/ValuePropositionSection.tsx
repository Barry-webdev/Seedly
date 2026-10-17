"use client";

import React from "react";
import { Zap, Users, TrendingUp, Shield } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { useLanguage } from "@/lib/i18n/LanguageContext";

const pillarIcons = [
  <Zap key="zap" className="w-5 h-5" />,
  <Users key="users" className="w-5 h-5" />,
  <TrendingUp key="trend" className="w-5 h-5" />,
  <Shield key="shield" className="w-5 h-5" />,
];

export const ValuePropositionSection: React.FC = () => {
  const { t } = useLanguage();

  const pillars = [
    { icon: pillarIcons[0], title: t.locale === "en" ? "Fast to deploy" : "Des solutions rapides à déployer", description: t.locale === "en" ? "We favor pragmatic approaches that allow you to launch quickly, then improve over time." : "Nous privilégions les approches pragmatiques qui permettent de lancer rapidement, puis d'améliorer dans la durée." },
    { icon: pillarIcons[1], title: t.locale === "en" ? "Built for your context" : "Pensées pour votre contexte", description: t.locale === "en" ? "Our solutions are adapted to Guinean business realities: connectivity, budget, local practices." : "Nos solutions sont adaptées aux réalités des entreprises guinéennes : connectivité, budget, pratiques locales." },
    { icon: pillarIcons[2], title: t.locale === "en" ? "Results-driven" : "Orientées résultats commerciaux", description: t.locale === "en" ? "Every design or technical decision is made with one goal: growing your business." : "Chaque décision de design ou technique est prise en fonction d'un objectif : faire croître votre activité." },
    { icon: pillarIcons[3], title: t.locale === "en" ? "Long-term support" : "Accompagnement dans la durée", description: t.locale === "en" ? "Our relationship doesn't end at launch. We stay available to evolve your tools." : "Notre relation ne s'arrête pas au lancement. Nous restons disponibles pour faire évoluer vos outils." },
  ];

  return (
    <section className="section-padding bg-[#14161A]" aria-labelledby="value-prop-title">
      <div className="container-seedly">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="space-y-6">
            <SectionHeader
              label={t.sections.ourApproach}
              title={t.value.title}
              description={t.value.description}
              align="left"
            />
            <div className="space-y-3 pt-2">
              {t.value.points.map((point: string, i: number) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#4169E1]/15 border border-[#4169E1]/20 flex items-center justify-center shrink-0 mt-0.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#4169E1]" />
                  </div>
                  <p className="text-[#9A9A93] text-sm leading-relaxed">{point}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {pillars.map((p, i) => (
              <div key={i} className="card-seedly p-5 space-y-3 group">
                <div className="w-10 h-10 rounded-xl bg-[#4169E1]/10 flex items-center justify-center text-[#7F9FF1]">
                  {p.icon}
                </div>
                <h3 className="text-sm font-semibold text-[#F4F3EF] leading-snug">{p.title}</h3>
                <p className="text-xs text-[#9A9A93] leading-relaxed">{p.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValuePropositionSection;
