import React from "react";
import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";
import { whatsappCTA } from "@/data/contact";

export const CTASection: React.FC = () => {
  return (
    <section className="section-padding bg-[#0A0B0E]" aria-labelledby="cta-title">
      <div className="container-seedly">
        <div className="relative rounded-3xl overflow-hidden bg-[#202326]">
          <div className="absolute inset-0 dot-pattern opacity-20" aria-hidden="true" />
          <div className="relative z-10 px-8 py-16 md:py-20 text-center">
            <div className="max-w-2xl mx-auto space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-white/80 text-sm font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-[#4169E1] animate-pulse" aria-hidden="true" />
                Prêt à commencer ?
              </div>

              <h2
                id="cta-title"
                className="font-bold text-white text-balance"
                style={{ letterSpacing: "-0.025em" }}
              >
                Votre projet mérite d&apos;être réalisé.
              </h2>

              <p className="text-lg text-white/70 leading-relaxed">
                Que vous ayez une idée précise ou juste un besoin à exprimer,
                parlons-en. La première consultation est gratuite.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
                <Link
                  href="/devis"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-[#4169E1] text-white font-semibold hover:bg-[#2F52C8] transition-colors shadow-blue"
                >
                  Demander un devis gratuit
                  <ArrowRight className="w-5 h-5" aria-hidden="true" />
                </Link>
                <a
                  href={whatsappCTA("Bonjour Seedly, je veux démarrer un projet.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-white border border-white/20 hover:bg-white/10 transition-all duration-200"
                >
                  <MessageCircle className="w-5 h-5 text-green-400" aria-hidden="true" />
                  Écrire sur WhatsApp
                </a>
              </div>

              <p className="text-sm text-white/40">Réponse sous 24h · Sans engagement</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
