import React from "react";
import Link from "next/link";
import { Monitor, Smartphone, PenTool, TrendingUp, ArrowRight } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { services } from "@/data/services";

// =============================================
// SERVICES SECTION — Page d'accueil
// =============================================

const serviceIcons: Record<string, React.ReactNode> = {
  monitor: <Monitor className="w-6 h-6" />,
  smartphone: <Smartphone className="w-6 h-6" />,
  "pen-tool": <PenTool className="w-6 h-6" />,
  "trending-up": <TrendingUp className="w-6 h-6" />,
};

export const ServicesSection: React.FC = () => {
  return (
    <section className="section-padding" aria-labelledby="services-title">
      <div className="container-seedly">
        <SectionHeader
          label="Ce que nous faisons"
          title="Des solutions digitales pour chaque besoin"
          description="De la création de votre site web à la gestion de votre présence en ligne, nous vous accompagnons à chaque étape de votre développement digital."
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
                {/* Icon + number */}
                <div className="flex items-start justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-primary/15 border border-primary/20 flex items-center justify-center text-accent group-hover:bg-primary/25 transition-all duration-300">
                    {serviceIcons[service.icon] ?? <Monitor className="w-6 h-6" />}
                  </div>
                  <span className="text-xs font-mono text-neutral-600">
                    0{index + 1}
                  </span>
                </div>

                {/* Titre et description */}
                <div className="flex-1 space-y-2">
                  <h3 className="text-lg font-bold text-white group-hover:text-accent transition-colors duration-200">
                    {service.shortTitle}
                  </h3>
                  <p className="text-sm text-neutral-400 leading-relaxed">
                    {service.shortDescription}
                  </p>
                </div>

                {/* Points clés */}
                <ul className="space-y-1.5" aria-label={`Inclus dans ${service.shortTitle}`}>
                  {service.deliverables.slice(0, 3).map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-xs text-neutral-500">
                      <span className="w-1 h-1 rounded-full bg-accent/60 shrink-0" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>

                {/* CTA inline */}
                <div className="flex items-center gap-2 text-sm font-medium text-neutral-400 group-hover:text-accent transition-colors duration-200 pt-2 border-t border-white/5">
                  <span>En savoir plus</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" aria-hidden="true" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA central */}
        <div className="mt-10 text-center">
          <Link
            href="/services"
            className="btn-outline btn-md inline-flex"
          >
            Voir tous les services
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
