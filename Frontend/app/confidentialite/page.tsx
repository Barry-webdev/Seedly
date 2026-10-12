import type { Metadata } from "next";
import { MainLayout } from "@/components/layout/MainLayout";
import { contactInfo } from "@/data/contact";
import { companyInfo } from "@/data/company";

export const metadata: Metadata = {
  title: "Politique de confidentialité",
  description: "Politique de confidentialité de Seedly Technology & Apps.",
  robots: { index: false, follow: false },
};

export default function ConfidentialitePage() {
  return (
    <MainLayout>
      <section className="pt-32 pb-20">
        <div className="container-seedly">
          <div className="max-w-3xl mx-auto space-y-10">
            <div className="space-y-3">
              <h1 className="section-title text-3xl md:text-4xl">
                Politique de confidentialité
              </h1>
              <p className="text-neutral-500 text-sm">
                Dernière mise à jour : à compléter
              </p>
            </div>

            <div className="p-4 rounded-xl bg-yellow-500/5 border border-yellow-500/10">
              <p className="text-sm text-yellow-500/80">
                <span className="font-medium">Note :</span> Ce document est un modèle.
                Il doit être revu et adapté par un professionnel du droit avant la mise en ligne,
                notamment pour la conformité RGPD ou les réglementations locales applicables.
              </p>
            </div>

            {[
              {
                title: "Données collectées",
                content: [
                  "Lors de l'utilisation du formulaire de demande de devis, nous collectons : nom, prénom, email, téléphone, et les informations relatives à votre projet.",
                  "Ces données sont collectées uniquement dans le but de vous répondre et de traiter votre demande.",
                ],
              },
              {
                title: "Utilisation des données",
                content: [
                  "Les données collectées sont utilisées exclusivement pour traiter votre demande et vous contacter.",
                  `Nous ne vendons ni ne transmettons vos données à des tiers, sauf obligation légale.`,
                ],
              },
              {
                title: "Conservation des données",
                content: [
                  "Vos données sont conservées le temps nécessaire au traitement de votre demande, et au maximum 3 ans à compter de notre dernier contact.",
                ],
              },
              {
                title: "Vos droits",
                content: [
                  "Vous disposez d'un droit d'accès, de rectification, de suppression et de portabilité de vos données personnelles.",
                  `Pour exercer ces droits, contactez-nous à : ${contactInfo.email}`,
                ],
              },
              {
                title: "Cookies",
                content: [
                  // TODO: Compléter selon la politique de cookies réelle
                  "Ce site peut utiliser des cookies techniques nécessaires à son fonctionnement. À compléter selon la politique réelle.",
                ],
              },
              {
                title: "Contact",
                content: [
                  `Pour toute question relative à vos données personnelles : ${contactInfo.email}`,
                  `${companyInfo.name} — ${contactInfo.address}`,
                ],
              },
            ].map((section) => (
              <section key={section.title} className="space-y-3">
                <h2 className="text-lg font-bold text-white border-b border-white/5 pb-2">
                  {section.title}
                </h2>
                <div className="space-y-2">
                  {section.content.map((line, i) => (
                    <p key={i} className="text-sm text-neutral-400 leading-relaxed">
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
