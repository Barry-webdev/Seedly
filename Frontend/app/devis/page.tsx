import type { Metadata } from "next";
import { MainLayout } from "@/components/layout/MainLayout";
import { QuoteForm } from "@/components/forms/QuoteForm";

export const metadata: Metadata = {
  title: "Demander un devis",
  description:
    "Décrivez votre projet à Seedly Technology & Apps et recevez un devis personnalisé. Site web, application mobile, design ou marketing digital.",
};

export default function DevisPage() {
  return (
    <MainLayout>
      {/* Hero */}
      <section className="pt-32 pb-12 relative" aria-labelledby="devis-title">
        <div className="absolute inset-0 grid-bg opacity-30" aria-hidden="true" />
        <div className="container-seedly relative z-10">
          <div className="max-w-2xl mx-auto text-center space-y-5">
            <div className="section-label justify-center">
              <span className="w-6 h-0.5 rounded-full bg-accent" aria-hidden="true" />
              Sans engagement
              <span className="w-6 h-0.5 rounded-full bg-accent" aria-hidden="true" />
            </div>
            <h1 id="devis-title" className="section-title text-4xl md:text-5xl">
              Demander un devis
            </h1>
            <p className="section-description text-center mx-auto">
              Remplissez ce formulaire pour nous décrire votre projet.
              Nous vous répondons sous 24h avec une proposition adaptée à vos besoins et votre budget.
            </p>
          </div>
        </div>
      </section>

      {/* Formulaire */}
      <section className="section-padding-sm">
        <div className="container-seedly">
          <div className="max-w-2xl mx-auto">
            <QuoteForm />
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
