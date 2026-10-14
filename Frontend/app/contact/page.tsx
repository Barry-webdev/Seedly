import type { Metadata } from "next";
import { Mail, Phone, MapPin, MessageCircle, Clock, ArrowRight } from "lucide-react";
import { MainLayout } from "@/components/layout/MainLayout";
import { contactInfo, whatsappCTA } from "@/data/contact";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contactez Seedly Technology & Apps à Conakry. Email, téléphone, WhatsApp ou formulaire — nous vous répondons rapidement.",
};

const SocialIcon: React.FC<{ platform: string }> = ({ platform }) => {
  const icons: Record<string, React.ReactNode> = {
    linkedin: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
    instagram: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    ),
    facebook: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
    twitter: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  };
  return <>{icons[platform] ?? null}</>;
};

export default function ContactPage() {
  return (
    <MainLayout>
      {/* Hero */}
      <section className="pt-32 pb-16 relative" aria-labelledby="contact-title">
        <div className="absolute inset-0 grid-bg opacity-30" aria-hidden="true" />
        <div className="container-seedly relative z-10">
          <div className="max-w-2xl mx-auto text-center space-y-6">
            <div className="section-label justify-center">
              <span className="w-6 h-0.5 rounded-full bg-[#4169E1]" aria-hidden="true" />
              Parlons
              <span className="w-6 h-0.5 rounded-full bg-[#4169E1]" aria-hidden="true" />
            </div>
            <h1 id="contact-title" className="section-title text-4xl md:text-5xl">
              Prenons contact
            </h1>
            <p className="section-description text-center mx-auto">
              Vous avez un projet, une question ou juste envie d&apos;en savoir plus ?
              Nous vous répondons dans les 24 heures.
            </p>
          </div>
        </div>
      </section>

      {/* Section contact */}
      <section className="section-padding-sm">
        <div className="container-seedly">
          <div className="grid lg:grid-cols-2 gap-10 max-w-5xl mx-auto">
            {/* Informations de contact */}
            <div className="space-y-8">
              <div className="space-y-2">
                <h2 className="text-xl font-bold text-white">Nos coordonnées</h2>
                <p className="text-[#9A9A93] text-sm leading-relaxed">
                  Choisissez le canal qui vous convient le mieux. WhatsApp est le moyen
                  le plus rapide pour obtenir une réponse.
                </p>
              </div>

              <ul className="space-y-4" aria-label="Moyens de contact">
                <li>
                  <a
                    href={contactInfo.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-4 p-5 rounded-2xl border border-green-500/20 bg-green-500/5 hover:bg-green-500/10 transition-all duration-200 group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-green-500/15 flex items-center justify-center shrink-0">
                      <MessageCircle className="w-5 h-5 text-green-400" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="font-semibold text-white text-sm group-hover:text-green-400 transition-colors">
                        WhatsApp
                      </p>
                      <p className="text-[#9A9A93] text-sm">{contactInfo.whatsappNumber}</p>
                      <p className="text-xs text-green-500/70 mt-1">Réponse la plus rapide</p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-[#9A9A93] group-hover:text-green-400 ml-auto mt-1 transition-all group-hover:translate-x-1" aria-hidden="true" />
                  </a>
                </li>

                <li>
                  <a
                    href={`mailto:${contactInfo.email}`}
                    className="flex items-start gap-4 p-5 rounded-2xl card-seedly group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-[#4169E1]/15 border border-primary/20 flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5 text-[#7F9FF1]" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="font-semibold text-white text-sm group-hover:text-[#7F9FF1] transition-colors">
                        Email
                      </p>
                      <p className="text-[#9A9A93] text-sm">{contactInfo.email}</p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-[#9A9A93] group-hover:text-[#7F9FF1] ml-auto mt-1 transition-all group-hover:translate-x-1" aria-hidden="true" />
                  </a>
                </li>

                <li>
                  <a
                    href={`tel:${contactInfo.phone}`}
                    className="flex items-start gap-4 p-5 rounded-2xl card-seedly group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-[#4169E1]/15 border border-primary/20 flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5 text-[#7F9FF1]" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="font-semibold text-white text-sm group-hover:text-[#7F9FF1] transition-colors">
                        Téléphone
                      </p>
                      <p className="text-[#9A9A93] text-sm">{contactInfo.phone}</p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-[#9A9A93] group-hover:text-[#7F9FF1] ml-auto mt-1 transition-all group-hover:translate-x-1" aria-hidden="true" />
                  </a>
                </li>

                <li>
                  <div className="flex items-start gap-4 p-5 rounded-2xl card-seedly">
                    <div className="w-10 h-10 rounded-xl bg-[#4169E1]/15 border border-primary/20 flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5 text-[#7F9FF1]" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="font-semibold text-white text-sm">Localisation</p>
                      <p className="text-[#9A9A93] text-sm">{contactInfo.address}</p>
                    </div>
                  </div>
                </li>
              </ul>

              {/* Horaires */}
              <div className="flex items-start gap-3 p-4 rounded-xl bg-white/3 border border-white/8">
                <Clock className="w-4 h-4 text-[#62666A] shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <p className="text-sm font-medium text-[#F4F3EF]">
                    Disponibilité
                  </p>
                  <p className="text-xs text-[#62666A] mt-0.5">
                    Du lundi au vendredi, 8h — 18h (GMT)
                    <br />
                    Réponse sous 24h garantie
                  </p>
                </div>
              </div>

              {/* Réseaux sociaux */}
              <div className="space-y-3">
                <p className="text-sm font-semibold text-white">Suivez-nous</p>
                <div className="flex items-center gap-3" aria-label="Réseaux sociaux de Seedly">
                  {contactInfo.socials.map((social) => (
                    <a
                      key={social.platform}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-white/10 text-[#9A9A93] hover:text-[#7F9FF1] hover:border-accent/30 hover:bg-[#4169E1]/5 transition-all duration-200 text-sm"
                    >
                      <SocialIcon platform={social.icon} />
                      <span className="text-xs">{social.platform}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Panel projet rapide */}
            <div className="card-seedly p-8 space-y-6">
              <div className="space-y-2">
                <h2 className="text-xl font-bold text-white">
                  Vous avez un projet ?
                </h2>
                <p className="text-[#9A9A93] text-sm leading-relaxed">
                  Pour un projet structuré, notre formulaire de devis est le meilleur
                  point de départ. Il nous permet de mieux comprendre votre besoin
                  et de vous répondre avec précision.
                </p>
              </div>

              <a
                href="/devis"
                className="btn-accent btn-lg w-full group"
              >
                Remplir le formulaire de devis
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
              </a>

              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-white/8" />
                </div>
                <div className="relative flex justify-center">
                  <span className="px-3 bg-surface-card text-xs text-[#9A9A93]">ou</span>
                </div>
              </div>

              <a
                href={whatsappCTA("Bonjour Seedly, je veux vous parler d'un projet.")}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline btn-md w-full group"
              >
                <MessageCircle className="w-4 h-4 text-green-400" aria-hidden="true" />
                Écrire sur WhatsApp
              </a>

              <p className="text-xs text-[#9A9A93] text-center">
                La première consultation est gratuite et sans engagement.
              </p>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
