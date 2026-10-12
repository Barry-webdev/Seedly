import React from "react";
import {
  Search, Target, PenTool, Code2, CheckCircle, Rocket,
} from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { workSteps } from "@/data/company";

// =============================================
// PROCESS SECTION — Méthode de travail
// =============================================

const stepIcons: Record<string, React.ReactNode> = {
  search: <Search className="w-5 h-5" />,
  target: <Target className="w-5 h-5" />,
  "pen-tool": <PenTool className="w-5 h-5" />,
  "code-2": <Code2 className="w-5 h-5" />,
  "check-circle": <CheckCircle className="w-5 h-5" />,
  rocket: <Rocket className="w-5 h-5" />,
};

export const ProcessSection: React.FC = () => {
  return (
    <section className="section-padding" aria-labelledby="process-title">
      <div className="container-seedly">
        <SectionHeader
          label="Notre méthode"
          title="Comment nous travaillons ensemble"
          description="Un processus structuré pour livrer des résultats prévisibles, dans les délais convenus et avec la qualité attendue."
        />

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {workSteps.map((step, index) => (
            <div
              key={step.number}
              className="card-seedly p-6 space-y-4 group relative overflow-hidden"
            >
              {/* Numéro de fond décoratif */}
              <span
                className="absolute -right-2 -top-4 text-7xl font-black text-white/3 select-none pointer-events-none"
                aria-hidden="true"
              >
                {step.number}
              </span>

              {/* Icône et numéro */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-primary/15 border border-primary/20 flex items-center justify-center text-accent group-hover:bg-primary/25 transition-colors">
                  {stepIcons[step.icon] ?? <Search className="w-5 h-5" />}
                </div>
                <span className="text-xs font-mono font-bold text-neutral-600">
                  Étape {step.number}
                </span>
              </div>

              {/* Titre */}
              <h3 className="text-base font-bold text-white">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-neutral-400 leading-relaxed">
                {step.description}
              </p>

              {/* Durée */}
              {step.duration && (
                <div className="pt-2 border-t border-white/5">
                  <span className="text-xs text-neutral-600">
                    Durée estimée : <span className="text-neutral-400">{step.duration}</span>
                  </span>
                </div>
              )}

              {/* Connecteur entre étapes (sauf dernier de la ligne) */}
              {index < workSteps.length - 1 && (
                <div
                  className="hidden lg:block absolute -right-2 top-1/2 -translate-y-1/2 w-4 h-0.5 bg-white/5"
                  aria-hidden="true"
                />
              )}
            </div>
          ))}
        </div>

        {/* Note de bas */}
        <p className="mt-8 text-center text-sm text-neutral-500">
          Les délais varient selon la complexité du projet. Chaque engagement est précisé dans le devis.
        </p>
      </div>
    </section>
  );
};

export default ProcessSection;
