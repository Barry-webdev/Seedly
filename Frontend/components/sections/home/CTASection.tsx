import React from "react";
import { ArrowRight, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { whatsappCTA } from "@/data/contact";

// =============================================
// CTA SECTION — Appel à l'action final
// =============================================

export const CTASection: React.FC = () => {
  return (
    <section
      className="section-padding"
      aria-labelledby="cta-title"
    >
      <div className="container-seedly">
        <div className="relative rounded-3xl overflow-hidden">
          {/* Fond gradient */}
          <div
            className="absolute inset-0 bg-gradient-to-br from-primary via-primary-600 to-primary-700"
            aria-hidden="true"
          />

          {/* Motif décoratif */}
          <div className="absolute inset-0 grid-bg opacity-20" aria-hidden="true" />

          {/* Orbes */}
          <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-accent/10 blur-3xl" aria-hidden="true" />
          <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full bg-white/5 blur-3xl" aria-hidden="true" />

          {/* Contenu */}
          <div className="relative z-10 px-8 py-16 md:py-20 text-center">
            <div className="max-w-2xl mx-auto space-y-6">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-white/80 text-sm font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" aria-hidden="true" />
                Prêt à commencer ?
              </div>

              <h2
                id="cta-title"
                className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight text-balance"
                style={{ fontFamily: "var(--font-plus-jakarta), sans-serif" }}
              >
                Votre projet mérite d&apos;être réalisé.
              </h2>

              <p className="text-lg text-white/70 leading-relaxed">
                Que vous ayez une idée précise ou juste un besoin à exprimer,
                parlons-en. La première consultation est gratuite.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
                <Button
                  as="link"
                  href="/devis"
                  variant="accent"
                  size="lg"
                  icon={<ArrowRight className="w-5 h-5" />}
                >
                  Demander un devis gratuit
                </Button>
                <a
                  href={whatsappCTA("Bonjour Seedly, je veux démarrer un projet.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-4 rounded-xl font-semibold text-white border border-white/20 hover:bg-white/10 transition-all duration-300"
                >
                  <MessageCircle className="w-5 h-5 text-green-400" aria-hidden="true" />
                  Écrire sur WhatsApp
                </a>
              </div>

              <p className="text-sm text-white/40 pt-2">
                Réponse sous 24h · Sans engagement
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
