import type { Project } from "@/types";

// =============================================
// PROJETS / PORTFOLIO — Données centralisées
// NOTE: Tous les projets marqués isDemo: true sont des démonstrations.
// Remplacer par de vrais projets dès qu'ils sont disponibles.
// =============================================

export const projects: Project[] = [
  {
    id: "proj-001",
    slug: "boutique-digital-gn",
    title: "Boutique en ligne — Commerce Digital GN",
    client: "Commerce Digital GN",
    category: "web",
    categoryLabel: "Site Web",
    shortDescription:
      "Création d'une boutique e-commerce complète avec gestion des produits, paiement en ligne et tableau de bord administrateur.",
    coverImage: "/images/projects/placeholder-web.svg",
    technologies: [
      { name: "Next.js" },
      { name: "TypeScript" },
      { name: "Tailwind CSS" },
    ],
    featured: true,
    year: 2024,
    isDemo: true,
  },
  {
    id: "proj-002",
    slug: "app-livraison-conakry",
    title: "Application de livraison — Livraison Express Conakry",
    client: "Livraison Express",
    category: "mobile",
    categoryLabel: "Application Mobile",
    shortDescription:
      "Application mobile cross-platform pour la gestion des commandes, le suivi en temps réel et la coordination des livreurs.",
    coverImage: "/images/projects/placeholder-mobile.svg",
    technologies: [
      { name: "React Native" },
      { name: "TypeScript" },
      { name: "Node.js" },
    ],
    featured: true,
    year: 2024,
    isDemo: true,
  },
  {
    id: "proj-003",
    slug: "identite-visuelle-startup",
    title: "Identité visuelle — StartUp Innovante GN",
    client: "StartUp Innovante GN",
    category: "design",
    categoryLabel: "Design UI/UX",
    shortDescription:
      "Création complète d'une identité visuelle : logo, charte graphique, supports de communication et design system.",
    coverImage: "/images/projects/placeholder-design.svg",
    technologies: [
      { name: "Figma" },
      { name: "Adobe Illustrator" },
    ],
    featured: true,
    year: 2024,
    isDemo: true,
  },
  {
    id: "proj-004",
    slug: "site-institutionnel-pme",
    title: "Site institutionnel — PME Services Pro",
    client: "PME Services Pro",
    category: "web",
    categoryLabel: "Site Web",
    shortDescription:
      "Refonte complète d'un site vitrine professionnel pour une PME locale avec optimisation SEO et formulaire de contact.",
    coverImage: "/images/projects/placeholder-web.svg",
    technologies: [
      { name: "Next.js" },
      { name: "Tailwind CSS" },
    ],
    featured: false,
    year: 2024,
    isDemo: true,
  },
  {
    id: "proj-005",
    slug: "strategie-social-media",
    title: "Stratégie social media — Restaurant Le Palmier",
    client: "Restaurant Le Palmier",
    category: "marketing",
    categoryLabel: "Marketing Digital",
    shortDescription:
      "Développement d'une stratégie de contenu et gestion des réseaux sociaux pour un restaurant à Conakry.",
    coverImage: "/images/projects/placeholder-marketing.svg",
    featured: false,
    year: 2024,
    isDemo: true,
  },
  {
    id: "proj-006",
    slug: "app-gestion-stocks",
    title: "Application de gestion — GestiStock Pro",
    client: "GestiStock Pro",
    category: "mobile",
    categoryLabel: "Application Mobile",
    shortDescription:
      "Application mobile de gestion des stocks et des commandes pour les commerçants et les petites entreprises.",
    coverImage: "/images/projects/placeholder-mobile.svg",
    technologies: [
      { name: "Flutter" },
      { name: "Firebase" },
    ],
    featured: false,
    year: 2024,
    isDemo: true,
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
