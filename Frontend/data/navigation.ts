import type { NavLink } from "@/types";

// =============================================
// NAVIGATION — Liens centralisés
// =============================================

export const mainNavLinks: NavLink[] = [
  { label: "Accueil", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Réalisations", href: "/realisations" },
  { label: "À propos", href: "/a-propos" },
  { label: "Contact", href: "/contact" },
];

export const footerLinks = {
  company: [
    { label: "À propos", href: "/a-propos" },
    { label: "Notre méthode", href: "/a-propos#methode" },
    { label: "Nos valeurs", href: "/a-propos#valeurs" },
    { label: "Contact", href: "/contact" },
  ],
  services: [
    { label: "Création de sites web", href: "/services#web" },
    { label: "Applications mobiles", href: "/services#mobile" },
    { label: "Design UI/UX", href: "/services#design" },
    { label: "Marketing digital", href: "/services#marketing" },
  ],
  legal: [
    { label: "Mentions légales", href: "/mentions-legales" },
    { label: "Politique de confidentialité", href: "/confidentialite" },
  ],
};
