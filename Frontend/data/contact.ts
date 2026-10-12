import type { ContactInfo } from "@/types";

// =============================================
// COORDONNÉES SEEDLY — Source unique de vérité
// TODO: Remplacer les placeholders par les vraies données
// =============================================

export const contactInfo: ContactInfo = {
  // TODO: Remplacer par l'email officiel de Seedly
  email: "contact@seedly.tech",

  // TODO: Remplacer par le numéro officiel
  phone: "+224 000 000 000",

  // TODO: Remplacer par le numéro WhatsApp officiel
  whatsapp: "https://wa.me/224000000000",
  whatsappNumber: "+224 000 000 000",

  // TODO: Remplacer par l'adresse exacte
  address: "Conakry, République de Guinée",
  city: "Conakry",
  country: "Guinée",

  socials: [
    {
      platform: "LinkedIn",
      // TODO: Remplacer par l'URL LinkedIn officielle
      url: "https://linkedin.com/company/seedly-tech",
      label: "Suivre Seedly sur LinkedIn",
      icon: "linkedin",
    },
    {
      platform: "Instagram",
      // TODO: Remplacer par l'URL Instagram officielle
      url: "https://instagram.com/seedly.tech",
      label: "Suivre Seedly sur Instagram",
      icon: "instagram",
    },
    {
      platform: "Facebook",
      // TODO: Remplacer par l'URL Facebook officielle
      url: "https://facebook.com/seedlytech",
      label: "Suivre Seedly sur Facebook",
      icon: "facebook",
    },
    {
      platform: "Twitter / X",
      // TODO: Remplacer par l'URL Twitter officielle
      url: "https://x.com/seedlytech",
      label: "Suivre Seedly sur X",
      icon: "twitter",
    },
  ],
};

// Lien WhatsApp pré-rempli pour les CTA
export const whatsappCTA = (message?: string): string => {
  const baseNumber = "224000000000"; // TODO: Remplacer
  const encodedMessage = message
    ? encodeURIComponent(message)
    : encodeURIComponent("Bonjour Seedly, je souhaite discuter d'un projet.");
  return `https://wa.me/${baseNumber}?text=${encodedMessage}`;
};
