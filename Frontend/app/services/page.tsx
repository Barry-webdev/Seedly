import type { Metadata } from "next";
import { ArrowRight, Check, Monitor, Smartphone, PenTool, TrendingUp } from "lucide-react";
import { MainLayout } from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/Button";
import { services } from "@/data/services";
import { CTASection } from "@/components/sections/home/CTASection";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Nos services",
  description:
    "Découvrez tous les services de Seedly Technology & Apps : création de sites web, développement d'applications mobiles, design UI/UX et marketing digital à Conakry.",
};

const serviceIcons: Record<string, React.ReactNode> = {
  monitor: <Monitor className="w-8 h-8" />,
  smartphone: <Smartphone className="w-8 h-8" />,
  "pen-tool": <PenTool className="w-8 h-8" />,
  "trending-up": <TrendingUp className="w-8 h-8" />,
};

export default function ServicesPage() {
  return (
    <MainLayout>
      {/* Hero */}
      <section className="pt-32 pb-16 relative" aria-labelledby="services-page-title">
        <div className="absolute inset-0 grid-bg opacity-30" aria-hidden="true" />
        <div className="container-seedly relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <div className="section-label justify-center">
              <span className="w-6 h-0.5 rounded-full bg-accent" aria-hidden="true" />
              Ce que nous proposons
              <span className="w-6 h-0.5 rounded-full bg-accent" aria-hidden="true" />
            </div>
            <h1 id="services-page-title" className="section-title text-4xl md:text-5xl">
              Nos services
            </h1>
            <p className="section-description text-center mx-auto">
              Des solutions digitales complètes pour accompagner votre entreprise dans sa
              transformation numérique, de la stratégie à la mise en ligne.
            </p>
          </div>
        </div>
      </section>

      {/* Services détaillés */}
      <section className="section-padding-sm">
        <div className="container-seedly space-y-24">
          {services.map((service, index) => (
            <div
              key={service.id}
              id={service.id}
              className={cn(
                "grid lg:grid-cols-2 gap-12 lg:gap-20 items-start",
                index % 2 !== 0 && "lg:flex lg:flex-row-reverse"
              )}
            >
              {/* Contenu */}
              <div className="space-y-8">
                {/* En-tête service */}
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-primary/15 border border-primary/20 flex items-center justify-center text-accent">
                      {serviceIcons[service.icon]}
                    </div>
                    <div>
                      <span className="text-xs font-semibold text-accent uppercase tracking-widest">
                        Service 0{index + 1}
                      </span>
                      <h2 className="text-2xl md:text-3xl font-bold text-white mt-1">
                        {service.shortTitle}
                      </h2>
                    </div>
                  </div>
                  <p className="text-neutral-400 leading-relaxed">{service.description}</p>
                </div>

                {/* Besoins */}
                <div className="space-y-3">
                  <h3 className="text-sm font-semibold text-white uppercase tracking-wider">
                    Pour qui c&apos;est fait ?
                  </h3>
                  <ul className="space-y-2" aria-label="Profils concernés">
                    {service.needs.map((need, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-sm text-neutral-400">
                        <span className="w-4 h-4 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center shrink-0 mt-0.5" aria-hidden="true">
                          <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                        </span>
                        {need}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA */}
                <Button
                  as="link"
                  href={`/devis?service=${service.id}`}
                  variant="primary"
                  size="md"
                  icon={<ArrowRight className="w-4 h-4" />}
                >
                  {service.cta}
                </Button>
              </div>

              {/* Détails (features + bénéfices) */}
              <div className="space-y-6">
                {/* Prestations */}
                <div className="card-seedly p-6 space-y-4">
                  <h3 className="text-sm font-semibold text-white uppercase tracking-wider">
                    Ce qui est inclus
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {service.features.map((feature, i) => (
                      <div key={i} className="space-y-1">
                        <h4 className="text-sm font-semibold text-white">{feature.title}</h4>
                        <p className="text-xs text-neutral-500 leading-relaxed">{feature.description}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bénéfices */}
                <div className="card-seedly p-6 space-y-4">
                  <h3 className="text-sm font-semibold text-white uppercase tracking-wider">
                    Les bénéfices pour vous
                  </h3>
                  <ul className="space-y-2.5" aria-label="Bénéfices">
                    {service.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <Check className="w-4 h-4 text-accent shrink-0 mt-0.5" aria-hidden="true" />
                        <span className="text-sm text-neutral-400">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <CTASection />
    </MainLayout>
  );
}
