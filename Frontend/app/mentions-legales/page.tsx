import type { Metadata } from "next";
import { MainLayout } from "@/components/layout/MainLayout";
import { contactInfo } from "@/data/contact";
import { companyInfo } from "@/data/company";

export const metadata: Metadata = {
  title: "Mentions légales",
  description: "Mentions légales de Seedly Technology & Apps.",
  robots: { index: false, follow: false },
};

export default function MentionsLegalesPage() {
  return (
    <MainLayout>
      <section className="pt-32 pb-20">
        <div className="container-seedly">
          <div className="max-w-3xl mx-auto space-y-10">
            {/* Titre */}
            <div className="space-y-3">
              <h1 className="section-title text-3xl md:text-4xl">Mentions légales</h1>
              <p className="text-[#9A9A93] text-sm">
                {/* TODO: Mettre à jour la date lors de la mise en ligne */}
                Dernière mise à jour : à compléter
              </p>
            </div>

            {/* Note */}
            <div className="p-4 rounded-xl bg-yellow-500/5 border border-yellow-500/10">
              <p className="text-sm text-yellow-500/80">
                <span className="font-medium">Note :</span> Ces mentions légales sont un modèle.
                Elles doivent être complétées par un professionnel du droit avant la mise en ligne.
              </p>
            </div>

            {[
              {
                title: "Éditeur du site",
                content: [
                  `Dénomination : ${companyInfo.name}`,
                  `Adresse : ${contactInfo.address}`,
                  `Email : ${contactInfo.email}`,
                  `Téléphone : ${contactInfo.phone}`,
                  // TODO: Ajouter numéro d'enregistrement légal si applicable
                ],
              },
              {
                title: "Hébergement",
                content: [
                  // TODO: Remplacer par les informations de l'hébergeur
                  "Hébergeur : À compléter",
                  "Adresse : À compléter",
                ],
              },
              {
                title: "Propriété intellectuelle",
                content: [
                  `L'ensemble du contenu de ce site (textes, images, éléments graphiques, logo, icônes) est la propriété exclusive de ${companyInfo.name}, sauf mention contraire.`,
                  "Toute reproduction, distribution, modification ou utilisation sans autorisation préalable est interdite.",
                ],
              },
              {
                title: "Limitation de responsabilité",
                content: [
                  `${companyInfo.shortName} s'efforce de maintenir les informations de ce site à jour et exactes. Cependant, nous ne pouvons garantir l'exactitude, l'exhaustivité ou l'actualité des informations publiées.`,
                  `${companyInfo.shortName} ne saurait être tenu responsable de tout dommage direct ou indirect résultant de l'utilisation de ce site.`,
                ],
              },
              {
                title: "Liens externes",
                content: [
                  `Ce site peut contenir des liens vers des sites tiers. ${companyInfo.shortName} n'exerce aucun contrôle sur ces sites et décline toute responsabilité quant à leur contenu.`,
                ],
              },
            ].map((section) => (
              <section key={section.title} className="space-y-3">
                <h2 className="text-lg font-bold text-[#F4F3EF] border-b border-white/8 pb-2">
                  {section.title}
                </h2>
                <div className="space-y-2">
                  {section.content.map((line, i) => (
                    <p key={i} className="text-sm text-[#9A9A93] leading-relaxed">
                      {line}
                    </p>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
