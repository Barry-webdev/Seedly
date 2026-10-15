import type { Project } from "@/types";

// =============================================
// PROJETS / PORTFOLIO — Données centralisées
// NOTE: Tous les projets marqués isDemo: true sont des démonstrations.
// Remplacer par de vrais projets dès qu'ils sont disponibles.
// =============================================

export const projects: Project[] = [
  {
    id: "proj-001",
    slug: "eib-school",
    title: "Site vitrine — Complexe Scolaire E.I.B",
    client: "Complexe Scolaire Privé Elhadj Ibrahima Barry",
    category: "web",
    categoryLabel: "Site Web",
    shortDescription:
      "Site vitrine complet pour un complexe scolaire de Pita, Guinée. Présentation des niveaux d'enseignement, actualités, inscriptions en ligne et galerie photos.",
    description:
      "Conception et développement du site officiel du Complexe Scolaire Privé Elhadj Ibrahima Barry (E.I.B), établissement d'excellence accueillant plus de 1000 élèves de la maternelle à l'École Professionnelle de la Santé.",
    context: "L'E.I.B est un établissement scolaire privé fondé en 2013 à Pita, en République de Guinée. Il avait besoin d'une présence digitale professionnelle pour renforcer sa visibilité et faciliter les inscriptions.",
    solution: "Développement d'un site Next.js moderne avec gestion de contenu (Sanity CMS), optimisation SEO, formulaire de contact et système d'actualités dynamique.",
    results: [
      "Présence en ligne professionnelle pour l'établissement",
      "Gestion autonome des actualités via CMS",
      "Processus d'inscription simplifié en ligne",
      "Visibilité accrue auprès des familles de la région",
    ],
    technologies: [
      { name: "Next.js" },
      { name: "TypeScript" },
      { name: "Tailwind CSS" },
      { name: "Sanity CMS" },
    ],
    coverImage: "/Logo EIB.jpg",
    featured: true,
    year: 2026,
    isDemo: false,
    liveUrl: "https://www.eib-school.com",
  },
  {
    id: "proj-002",
    slug: "saad-poisson",
    title: "Site web — Saad Poisson",
    client: "Saad Poisson",
    category: "web",
    categoryLabel: "Site Web",
    shortDescription:
      "Site web professionnel pour une entreprise de vente de poissons. Interface moderne et responsive pour la présentation des produits et services.",
    description:
      "Création d'un site vitrine professionnel pour Saad Poisson, entreprise spécialisée dans la vente de poissons. Le site présente les produits, les services et facilite la prise de contact avec les clients.",
    technologies: [
      { name: "Next.js" },
      { name: "TypeScript" },
      { name: "Tailwind CSS" },
    ],
    coverImage: "/Saad Poisson.png",
    featured: true,
    year: 2025,
    isDemo: false,
    liveUrl: "https://www.saadpoisson.com",
  },
  {
    id: "proj-003",
    slug: "hirrde",
    title: "Application — Hirrde",
    client: "Hirrde",
    category: "web",
    categoryLabel: "Application Web",
    shortDescription:
      "Application de gestion d'événements et de billetterie en ligne. Permet aux organisateurs de créer, gérer et vendre des billets pour leurs événements.",
    description:
      "Développement d'une plateforme web complète de gestion d'événements et de billetterie en ligne. Les organisateurs peuvent créer leurs événements, gérer les ventes de billets et suivre leurs participants de façon simple et moderne.",
    technologies: [
      { name: "Next.js" },
      { name: "TypeScript" },
      { name: "Tailwind CSS" },
    ],
    coverImage: "/Hirrdé.png",
    featured: true,
    year: 2025,
    isDemo: false,
    liveUrl: "https://hirrde.vercel.app",
  },
];

export const getFeaturedProjects = (): Project[] =>
  projects.filter((p) => p.featured);

export const getProjectBySlug = (slug: string): Project | undefined =>
  projects.find((p) => p.slug === slug);

export const getProjectsByCategory = (category: string): Project[] =>
  category === "all"
    ? projects
    : projects.filter((p) => p.category === category);

export const projectCategories = [
  { id: "all", label: "Tous les projets" },
  { id: "web", label: "Sites Web" },
  { id: "mobile", label: "Apps Mobiles" },
  { id: "design", label: "Design" },
  { id: "marketing", label: "Marketing" },
] as const;
