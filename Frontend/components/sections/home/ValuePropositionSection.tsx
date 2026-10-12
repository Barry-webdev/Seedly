import React from "react";
import { TrendingUp, Users, Zap, Shield } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";

// =============================================
// VALUE PROPOSITION — Proposition de valeur
// =============================================

const pillars = [
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Des solutions rapides à déployer",
    description:
      "Nous privilégions les approches pragmatiques qui permettent de lancer rapidement, puis d'améliorer dans la durée.",
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Pensées pour votre contexte",
    description:
      "Nos solutions sont adaptées aux réalités des entreprises guinéennes : connectivité, budget, pratiques locales.",
  },
  {
    icon: <TrendingUp className="w-6 h-6" />,
    title: "Orientées résultats commerciaux",
    description:
      "Chaque décision de design ou technique est prise en fonction d'un objectif : faire croître votre activité.",
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Accompagnement dans la durée",
    description:
      "Notre relation ne s'arrête pas au lancement. Nous restons disponibles pour faire évoluer vos outils.",
  },
];

export const ValuePropositionSection: React.FC = () => {
  return (
    <section
      className="section-padding bg-surface/50"
      aria-labelledby="value-prop-title"
    >
      <div className="container-seedly">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Texte gauche */}
          <div className="space-y-6">
            <SectionHeader
              label="Notre approche"
              title="La transformation digitale, sans la complexité"
              description="Beaucoup d'entreprises guinéennes n'ont pas encore de présence digitale solide. Ce n'est pas un manque de volonté — c'est souvent un manque d'accompagnement adapté. C'est exactement ce que Seedly propose."
              align="left"
            />

            <div className="pt-2 space-y-4">
              {[
                "Nous partons de votre situation réelle, pas d'un modèle standard.",
                "Nous expliquons clairement ce que nous faisons et pourquoi.",
                "Nous livrons des outils que vous comprendrez et pourrez utiliser.",
                "Nous restons disponibles même après la livraison.",
              ].map((point, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div
                    className="w-5 h-5 rounded-full bg-accent/20 border border-accent/30 flex items-center justify-center shrink-0 mt-0.5"
                    aria-hidden="true"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                  </div>
                  <p className="text-neutral-300 text-sm leading-relaxed">{point}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Grille droite */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {pillars.map((pillar, i) => (
              <div
                key={i}
                className="card-seedly p-5 space-y-3 group"
              >
                <div className="w-10 h-10 rounded-xl bg-primary/15 border border-primary/20 flex items-center justify-center text-accent group-hover:bg-primary/25 transition-colors">
                  {pillar.icon}
                </div>
                <h3 className="text-sm font-semibold text-white leading-snug">
                  {pillar.title}
                </h3>
                <p className="text-xs text-neutral-400 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValuePropositionSection;
