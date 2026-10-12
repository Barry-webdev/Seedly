import type { Service } from "@/types";

// =============================================
// SERVICES SEEDLY — Données centralisées
// =============================================

export const services: Service[] = [
  {
    id: "web",
    slug: "creation-site-web",
    title: "Création de sites web professionnels",
    shortTitle: "Sites Web",
    description:
      "Nous concevons et développons des sites web sur mesure qui reflètent l'identité de votre entreprise, attirent vos clients et renforcent votre crédibilité en ligne. De la vitrine simple à la plateforme e-commerce complète.",
    shortDescription:
      "Des sites web sur mesure qui reflètent votre identité et convertissent vos visiteurs en clients.",
    icon: "monitor",
    color: "#1A7A4A",
    needs: [
      "Vous n'avez pas encore de présence en ligne",
      "Votre site actuel est ancien ou ne représente plus votre image",
      "Vous souhaitez attirer plus de clients via internet",
      "Vous voulez vendre vos produits ou services en ligne",
      "Vous avez besoin d'un outil pour présenter votre activité",
    ],
    features: [
      {
        title: "Sites vitrines",
        description: "Présentation professionnelle de votre entreprise, vos services et votre contact.",
      },
      {
        title: "Sites e-commerce",
        description: "Boutique en ligne pour vendre vos produits avec paiement sécurisé.",
      },
      {
        title: "Plateformes sur mesure",
        description: "Applications web complexes adaptées à vos processus métier spécifiques.",
      },
      {
        title: "Optimisation SEO",
        description: "Structure et contenu optimisés pour être trouvé sur Google.",
      },
      {
        title: "Design responsive",
        description: "Interface parfaite sur mobile, tablette et ordinateur.",
      },
      {
        title: "Performances optimisées",
        description: "Sites rapides, fiables et prêts pour les connexions mobiles.",
      },
    ],
    benefits: [
      "Une présence professionnelle visible 24h/24",
      "Plus de crédibilité auprès de vos clients",
      "Un outil commercial qui travaille pour vous",
      "Un avantage concurrentiel sur votre marché",
      "Une base solide pour votre stratégie digitale",
    ],
    deliverables: [
      "Site web responsive livré clé en main",
      "Formation à l'utilisation",
      "Documentation technique",
      "Hébergement et nom de domaine (optionnel)",
      "Support post-lancement",
    ],
    cta: "Discuter de mon site web",
  },
  {
    id: "mobile",
    slug: "application-mobile",
    title: "Développement d'applications mobiles",
    shortTitle: "Apps Mobiles",
    description:
      "Nous développons des applications mobiles natives et cross-platform pour iOS et Android, adaptées aux usages et aux réseaux guinéens. Des solutions simples et efficaces pour toucher vos clients directement sur leur téléphone.",
    shortDescription:
      "Des applications mobiles performantes pour toucher vos clients directement sur leur smartphone.",
    icon: "smartphone",
    color: "#0F5C35",
    needs: [
      "Vous souhaitez offrir une expérience mobile à vos clients",
      "Vous avez un service ou un processus à digitaliser",
      "Vous voulez fidéliser vos clients via une app dédiée",
      "Vous avez besoin d'un outil interne pour votre équipe",
      "Vous envisagez de lancer un service numérique",
    ],
    features: [
      {
        title: "Applications Android",
        description: "Applications natives ou cross-platform optimisées pour le marché guinéen.",
      },
      {
        title: "Applications iOS",
        description: "Expériences premium pour les utilisateurs Apple.",
      },
      {
        title: "Applications cross-platform",
        description: "Un seul code pour iOS et Android, optimisé en coûts et en maintenance.",
      },
      {
        title: "Interfaces intuitives",
        description: "Expériences utilisateur pensées pour une adoption rapide.",
      },
      {
        title: "Intégrations API",
        description: "Connexion à vos systèmes existants, paiements et services tiers.",
      },
      {
        title: "Maintenance et évolutions",
        description: "Support continu pour faire évoluer votre application.",
      },
    ],
    benefits: [
      "Toucher vos clients là où ils sont : sur leur téléphone",
      "Automatiser des processus manuels",
      "Améliorer l'expérience client",
      "Générer de nouvelles sources de revenus",
      "Se démarquer de la concurrence",
    ],
    deliverables: [
      "Application mobile fonctionnelle et testée",
      "Publication sur les stores (Play Store / App Store)",
      "Code source livré",
      "Documentation technique",
      "Formation et accompagnement",
    ],
    cta: "Discuter de mon application",
  },
  {
    id: "design",
    slug: "design-ui-ux",
    title: "Design UI/UX et conception d'interfaces",
    shortTitle: "Design UI/UX",
    description:
      "Nous concevons des interfaces visuellement attractives et intuitives qui mettent en valeur votre marque et facilitent l'expérience de vos utilisateurs. Du logo à l'identité visuelle complète, en passant par les maquettes de vos produits digitaux.",
    shortDescription:
      "Des interfaces soignées qui valorisent votre marque et simplifient la vie de vos utilisateurs.",
    icon: "pen-tool",
    color: "#2DD4A0",
    needs: [
      "Votre identité visuelle est inexistante ou peu professionnelle",
      "Votre interface est difficile à utiliser pour vos clients",
      "Vous lancez un nouveau produit ou service digital",
      "Vous souhaitez améliorer votre image de marque",
      "Vous avez besoin de maquettes avant de développer",
    ],
    features: [
      {
        title: "Identité visuelle",
        description: "Logo, palette de couleurs, typographie et charte graphique complète.",
      },
      {
        title: "UX Research",
        description: "Analyse des besoins utilisateurs pour concevoir des parcours efficaces.",
      },
      {
        title: "Maquettes UI",
        description: "Wireframes et designs haute fidélité pour vos applications et sites.",
      },
      {
        title: "Prototypes interactifs",
        description: "Simulations cliquables pour tester votre produit avant développement.",
      },
      {
        title: "Design System",
        description: "Bibliothèque de composants cohérents pour une expérience unifiée.",
      },
      {
        title: "Supports de communication",
        description: "Affiches, flyers, bannières et supports print ou digitaux.",
      },
    ],
    benefits: [
      "Une image professionnelle qui inspire confiance",
      "Des utilisateurs qui comprennent et adoptent votre produit",
      "Moins de friction dans le parcours client",
      "Une cohérence visuelle sur tous vos supports",
      "Un avantage différenciant fort sur le marché",
    ],
    deliverables: [
      "Fichiers sources des designs (Figma)",
      "Charte graphique et guide de style",
      "Exports assets pour le développement",
      "Prototype interactif (si demandé)",
      "Documentation des décisions de design",
    ],
    cta: "Discuter de mon design",
  },
  {
    id: "marketing",
    slug: "marketing-digital",
    title: "Marketing digital et présence en ligne",
    shortTitle: "Marketing Digital",
    description:
      "Nous vous aidons à construire et développer votre présence numérique, à attirer vos clients cibles et à faire grandir votre activité grâce à des stratégies marketing digitales adaptées au contexte guinéen et africain.",
    shortDescription:
      "Des stratégies marketing adaptées pour attirer vos clients, renforcer votre visibilité et faire croître votre activité.",
    icon: "trending-up",
    color: "#1A7A4A",
    needs: [
      "Vous avez un site ou une app mais peu de visiteurs",
      "Vous souhaitez être trouvé sur Google",
      "Vous voulez développer votre communauté sur les réseaux",
      "Vous avez besoin d'une stratégie pour acquérir des clients",
      "Vous lancez un produit ou service et voulez le faire connaître",
    ],
    features: [
      {
        title: "Stratégie de contenu",
        description: "Plan éditorial et création de contenu pour engager votre audience.",
      },
      {
        title: "Gestion des réseaux sociaux",
        description: "Animation de vos pages Facebook, Instagram, LinkedIn et autres.",
      },
      {
        title: "Référencement naturel (SEO)",
        description: "Optimisation de votre visibilité sur les moteurs de recherche.",
      },
      {
        title: "Publicité en ligne",
        description: "Campagnes Google Ads et Meta Ads ciblées et optimisées.",
      },
      {
        title: "Email marketing",
        description: "Campagnes d'emails pour engager et fidéliser vos clients.",
      },
      {
        title: "Analyse et reporting",
        description: "Suivi des performances et optimisation continue de vos actions.",
      },
    ],
    benefits: [
      "Plus de visibilité auprès de vos clients cibles",
      "Un flux constant de prospects qualifiés",
      "Une communauté engagée autour de votre marque",
      "Des décisions basées sur des données réelles",
      "Un retour sur investissement mesurable",
    ],
    deliverables: [
      "Audit de présence digitale",
      "Stratégie marketing personnalisée",
      "Plan d'action mensuel",
      "Rapports de performance réguliers",
      "Recommandations d'optimisation",
    ],
    cta: "Discuter de ma stratégie",
  },
];

export const getServiceBySlug = (slug: string): Service | undefined =>
  services.find((s) => s.slug === slug);

export const getServiceById = (id: string): Service | undefined =>
  services.find((s) => s.id === id);
