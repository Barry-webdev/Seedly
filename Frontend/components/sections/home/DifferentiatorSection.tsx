"use client";

import React from "react";
import { MapPin, Globe, Clock, HeartHandshake } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { useLanguage } from "@/lib/i18n/LanguageContext";

const diffIcons = [
  <MapPin key="map" className="w-6 h-6" />,
  <Globe key="globe" className="w-6 h-6" />,
  <Clock key="clock" className="w-6 h-6" />,
  <HeartHandshake key="heart" className="w-6 h-6" />,
];

export const DifferentiatorSection: React.FC = () => {
  const { t, locale } = useLanguage();

  const differentiators = locale === "en" ? [
    { icon: diffIcons[0], title: "Local expertise",         description: "We're based in Conakry. We understand Guinean businesses. No need to explain local realities to your agency." },
    { icon: diffIcons[1], title: "International standards", description: "Our solutions follow global best practices in web development, design and digital marketing." },
    { icon: diffIcons[2], title: "Deadlines respected",     description: "We commit to precise timelines and stick to them. Your time is as valuable as ours." },
    { icon: diffIcons[3], title: "Partnership, not just delivery", description: "We don't just ship a site and disappear. We build long-term relationships with every client." },
  ] : [
    { icon: diffIcons[0], title: "Ancrage local",             description: "Nous sommes à Conakry, nous comprenons le contexte des entreprises guinéennes. Pas besoin d'expliquer les réalités locales à votre agence." },
    { icon: diffIcons[1], title: "Standards internationaux",  description: "Nos solutions respectent les meilleures pratiques mondiales du développement web, du design et du marketing digital." },
    { icon: diffIcons[2], title: "Délais respectés",          description: "Nous nous engageons sur des calendriers précis et nous les respectons. Votre temps est aussi précieux que le nôtre." },
    { icon: diffIcons[3], title: "Partenariat, pas prestation", description: "Nous ne livrons pas juste un site et nous disparaissons. Nous construisons une relation de long terme avec chaque client." },
  ];

  return (
    <section className="section-padding bg-[#14161A]" aria-labelledby="diff-title">
      <div className="container-seedly">
        <SectionHeader
          label={t.sections.whySeedly}
          title={t.diff.title}
          description={t.diff.description}
        />

        <blockquote className="mt-12 mb-12 max-w-2xl mx-auto text-center">
          <p className="text-xl md:text-2xl font-semibold text-[#F4F3EF] leading-relaxed">
            &ldquo;{t.diff.quote}&rdquo;
          </p>
          <footer className="mt-3 text-sm text-[#9A9A93]">— Seedly Technology &amp; Apps</footer>
        </blockquote>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {differentiators.map((item, i) => (
            <div key={i} className="card-seedly p-6 space-y-4 group">
              <div className="w-12 h-12 rounded-2xl bg-[#4169E1]/10 flex items-center justify-center text-[#7F9FF1] group-hover:bg-[#4169E1] group-hover:text-white transition-all duration-300">
                {item.icon}
              </div>
              <h3 className="font-bold text-[#F4F3EF] text-sm">{item.title}</h3>
              <p className="text-xs text-[#9A9A93] leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DifferentiatorSection;
