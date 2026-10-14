import React from "react";
import { Zap, Users, TrendingUp, Shield } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";

const pillars = [
  { icon: <Zap className="w-5 h-5" />,        title: "Des solutions rapides à déployer",      description: "Nous privilégions les approches pragmatiques qui permettent de lancer rapidement, puis d'améliorer dans la durée." },
  { icon: <Users className="w-5 h-5" />,       title: "Pensées pour votre contexte",           description: "Nos solutions sont adaptées aux réalités des entreprises guinéennes : connectivité, budget, pratiques locales." },
  { icon: <TrendingUp className="w-5 h-5" />,  title: "Orientées résultats commerciaux",       description: "Chaque décision de design ou technique est prise en fonction d'un objectif : faire croître votre activité." },
  { icon: <Shield className="w-5 h-5" />,      title: "Accompagnement dans la durée",          description: "Notre relation ne s'arrête pas au lancement. Nous restons disponibles pour faire évoluer vos outils." },
];

export const ValuePropositionSection: React.FC = () => {
  return (
    <section className="section-padding bg-[#14161A]" aria-labelledby="value-prop-title">
      <div className="container-seedly">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Texte */}
          <div className="space-y-6">
            <SectionHeader
              label="Notre approche"
              title="La transformation digitale, sans la complexité"
              description="Beaucoup d'entreprises guinéennes n'ont pas encore de présence digitale solide. Ce n'est pas un manque de volonté — c'est souvent un manque d'accompagnement adapté. C'est exactement ce que Seedly propose."
              align="left"
            />
            <div className="space-y-3 pt-2">
              {[
                "Nous partons de votre situation réelle, pas d'un modèle standard.",
                "Nous expliquons clairement ce que nous faisons et pourquoi.",
                "Nous livrons des outils que vous comprendrez et pourrez utiliser.",
                "Nous restons disponibles même après la livraison.",
              ].map((point, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#4169E1]/15 border border-[#4169E1]/20 flex items-center justify-center shrink-0 mt-0.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#4169E1]" />
                  </div>
                  <p className="text-[#9A9A93] text-sm leading-relaxed">{point}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {pillars.map((p, i) => (
              <div key={i} className="card-seedly p-5 space-y-3 group">
                <div className="w-10 h-10 rounded-xl bg-[#EEF1FD] flex items-center justify-center text-[#4169E1]">
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
