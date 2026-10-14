import React from "react";
import { MapPin, Globe, Clock, HeartHandshake } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";

const differentiators = [
  { icon: <MapPin className="w-6 h-6" />,        title: "Ancrage local",           description: "Nous sommes à Conakry, nous comprenons le contexte des entreprises guinéennes. Pas besoin d'expliquer les réalités locales à votre agence." },
  { icon: <Globe className="w-6 h-6" />,          title: "Standards internationaux", description: "Nos solutions respectent les meilleures pratiques mondiales du développement web, du design et du marketing digital." },
  { icon: <Clock className="w-6 h-6" />,          title: "Délais respectés",         description: "Nous nous engageons sur des calendriers précis et nous les respectons. Votre temps est aussi précieux que le nôtre." },
  { icon: <HeartHandshake className="w-6 h-6" />, title: "Partenariat, pas prestation", description: "Nous ne livrons pas juste un site et nous disparaissons. Nous construisons une relation de long terme avec chaque client." },
];

export const DifferentiatorSection: React.FC = () => {
  return (
    <section className="section-padding bg-[#14161A]" aria-labelledby="diff-title">
      <div className="container-seedly">
        <SectionHeader
          label="Pourquoi Seedly"
          title="Une agence pensée pour vous"
          description="Ce n'est pas ce que nous faisons qui nous distingue. C'est la façon dont nous le faisons, et pour qui."
        />

        <blockquote className="mt-12 mb-12 max-w-2xl mx-auto text-center">
          <p className="text-xl md:text-2xl font-semibold text-[#F4F3EF] leading-relaxed">
            &ldquo;Notre mission : planter une graine digitale dans chaque business guinéen.&rdquo;
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
