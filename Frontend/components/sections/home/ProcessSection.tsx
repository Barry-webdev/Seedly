import React from "react";
import { Search, Target, PenTool, Code2, CheckCircle, Rocket } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { workSteps } from "@/data/company";

const stepIcons: Record<string, React.ReactNode> = {
  search:         <Search className="w-5 h-5" />,
  target:         <Target className="w-5 h-5" />,
  "pen-tool":     <PenTool className="w-5 h-5" />,
  "code-2":       <Code2 className="w-5 h-5" />,
  "check-circle": <CheckCircle className="w-5 h-5" />,
  rocket:         <Rocket className="w-5 h-5" />,
};

export const ProcessSection: React.FC = () => {
  return (
    <section className="section-padding bg-[#0A0B0E]" aria-labelledby="process-title">
      <div className="container-seedly">
        <SectionHeader
          label="Notre méthode"
          title="Comment nous travaillons ensemble"
          description="Un processus structuré pour livrer des résultats prévisibles, dans les délais convenus."
        />

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {workSteps.map((step) => (
            <div key={step.number} className="card-seedly p-6 space-y-4 group relative overflow-hidden">
              <span className="absolute -right-1 -top-3 text-7xl font-black text-white/5 select-none pointer-events-none" aria-hidden="true">
                {step.number}
              </span>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#4169E1]/10 flex items-center justify-center text-[#7F9FF1] group-hover:bg-[#4169E1] group-hover:text-white transition-all duration-300">
                  {stepIcons[step.icon] ?? <Search className="w-5 h-5" />}
                </div>
                <span className="text-xs font-mono font-bold text-[#9A9A93]">Étape {step.number}</span>
              </div>
              <h3 className="text-base font-bold text-[#F4F3EF]">{step.title}</h3>
              <p className="text-sm text-[#9A9A93] leading-relaxed">{step.description}</p>
              {step.duration && (
                <div className="pt-2 border-t border-white/8">
                  <span className="text-xs text-[#9A9A93]">
                    Durée estimée : <span className="text-[#62666A]">{step.duration}</span>
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>
        <p className="mt-8 text-center text-sm text-[#62666A]">
          Les délais varient selon la complexité du projet. Chaque engagement est précisé dans le devis.
        </p>
      </div>
    </section>
  );
};

export default ProcessSection;
