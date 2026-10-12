import React from "react";
import { MapPin, Globe, Clock, HeartHandshake } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";

// =============================================
// DIFFERENTIATOR SECTION — Ce qui distingue Seedly
// =============================================

const differentiators = [
  {
    icon: <MapPin className="w-6 h-6" />,
    title: "Ancrage local",
    description:
      "Nous sommes à Conakry, nous comprenons le contexte des entreprises guinéennes. Pas besoin d'expliquer les réalités locales à votre agence.",
  },
  {
    icon: <Globe className="w-6 h-6" />,
    title: "Standards internationaux",
    description:
      "Nos solutions respectent les meilleures pratiques mondiales du développement web, du design et du marketing digital.",
  },
  {
    icon: <Clock className="w-6 h-6" />,
    title: "Délais respectés",
    description:
      "Nous nous engageons sur des calendriers précis et nous les respectons. Votre temps est aussi précieux que le nôtre.",
  },
  {
    icon: <HeartHandshake className="w-6 h-6" />,
    title: "Partenariat, pas prestation",
    description:
      "Nous ne livrons pas juste un site et nous disparaissons. Nous construisons une relation de long terme avec chaque client.",
  },
];

export const DifferentiatorSection: React.FC = () => {
  return (
    <section
      className="section-padding bg-surface/50 relative overflow-hidden"
      aria-labelledby="diff-title"
    >
      {/* Fond décoratif */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-0 left-1/4 w-64 h-64 rounded-full bg-primary/8 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-48 h-48 rounded-full bg-accent/5 blur-3xl" />
      </div>

      <div className="container-seedly relative z-10">
        <SectionHeader
          label="Pourquoi Seedly"
          title="Une agence pensée pour vous"
          description="Ce n'est pas ce que nous faisons qui nous distingue. C'est la façon dont nous le faisons, et pour qui."
        />

        {/* Citation */}
        <blockquote className="mt-12 mb-12 max-w-2xl mx-auto text-center">
          <p className="text-xl md:text-2xl font-medium text-white/80 italic leading-relaxed">
            &ldquo;Notre mission : planter une graine digitale dans chaque business guinéen.&rdquo;
          </p>
          <footer className="mt-4 text-sm text-neutral-500">— Seedly Technology & Apps</footer>
        </blockquote>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {differentiators.map((item, i) => (
            <div
              key={i}
              className="flex flex-col items-start gap-4 p-6 rounded-2xl bg-white/3 border border-white/5 hover:border-accent/20 hover:bg-white/5 transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-2xl bg-primary/15 border border-primary/20 flex items-center justify-center text-accent group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>
              <div className="space-y-2">
                <h3 className="font-bold text-white text-sm">{item.title}</h3>
                <p className="text-xs text-neutral-400 leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DifferentiatorSection;
