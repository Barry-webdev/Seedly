import type { CompanyValue, WorkStep, TeamMember } from "@/types";

// =============================================
// DONNÉES ENTREPRISE SEEDLY
// =============================================

export const companyInfo = {
  name: "Seedly Technology & Apps",
  shortName: "Seedly",
  tagline: "Plant the idea. Grow the business.",
  taglineFr: "Plantez l'idée. Faites grandir votre activité.",
  mission:
    "Accompagner les entreprises guinéennes dans leur transformation digitale en leur offrant des solutions technologiques accessibles, performantes et adaptées à leur contexte.",
  vision:
    "Devenir le partenaire technologique de référence des entreprises en Guinée et en Afrique de l'Ouest, en plantant une graine digitale dans chaque business qui souhaite grandir.",
  founding: "Conakry, République de Guinée",
  description:
    "Seedly est une agence technologique basée à Conakry qui aide les entreprises à construire leur présence digitale et à accélérer leur croissance grâce à des solutions numériques sur mesure.",
};

export const companyValues: CompanyValue[] = [
  {
    id: "excellence",
    title: "Excellence",
    description:
      "Nous livrons des solutions de qualité professionnelle, avec une attention au détail sur chaque projet, quelle qu'en soit la taille.",
    icon: "star",
  },
  {
    id: "proximity",
    title: "Proximité",
    description:
      "Nous écoutons, nous comprenons et nous nous adaptons. Chaque client est unique, chaque projet mérite une attention personnalisée.",
    icon: "heart",
  },
  {
    id: "innovation",
    title: "Innovation",
    description:
      "Nous utilisons les technologies modernes et les meilleures pratiques pour offrir des solutions durables et évolutives.",
    icon: "zap",
  },
  {
    id: "impact",
    title: "Impact",
    description:
      "Notre succès se mesure au succès de nos clients. Nous travaillons pour des résultats concrets et mesurables.",
    icon: "trending-up",
  },
  {
    id: "transparency",
    title: "Transparence",
    description:
      "Nous communiquons clairement sur nos délais, nos tarifs et notre avancement. La confiance se construit dans l'honnêteté.",
    icon: "shield-check",
  },
  {
    id: "local-pride",
    title: "Fierté locale",
    description:
      "Nous croyons au potentiel des entreprises guinéennes. Notre mission est de contribuer à l'essor numérique de la Guinée.",
    icon: "map-pin",
  },
];

export const workSteps: WorkStep[] = [
  {
    number: "01",
    title: "Découverte",
    description:
      "Nous prenons le temps de comprendre votre activité, vos objectifs, vos clients et vos contraintes. Cette étape est la plus importante.",
    icon: "search",
    duration: "1-2 jours",
  },
  {
    number: "02",
    title: "Stratégie",
    description:
      "Nous définissons ensemble la meilleure approche : choix des solutions, architecture, fonctionnalités et planning réaliste.",
    icon: "target",
    duration: "2-3 jours",
  },
  {
    number: "03",
    title: "Conception",
    description:
      "Nos designers créent les maquettes et prototypes de votre projet. Vous visualisez le résultat final avant que le développement commence.",
    icon: "pen-tool",
    duration: "1-2 semaines",
  },
  {
    number: "04",
    title: "Développement",
    description:
      "Nos développeurs construisent votre solution avec les technologies modernes, en suivant les meilleures pratiques du secteur.",
    icon: "code-2",
    duration: "2-8 semaines",
  },
  {
    number: "05",
    title: "Validation",
    description:
      "Nous testons minutieusement, vous montrons le résultat et intégrons vos retours avant le lancement. Votre satisfaction est notre priorité.",
    icon: "check-circle",
    duration: "3-5 jours",
  },
  {
    number: "06",
    title: "Lancement",
    description:
      "Nous déployons votre solution, vous formons à son utilisation et restons disponibles pour vous accompagner dans la durée.",
    icon: "rocket",
    duration: "1-2 jours",
  },
];

export const teamMembers: TeamMember[] = [
  {
    id: "member-001",
    name: "Abdoul Razzaï Barry",
    role: "Co-Founder & CEO",
    bio: "Co-fondateur de Seedly Technology & Apps, passionné par la technologie et le développement digital en Guinée.",
    photo: "/Razzaï.jpeg",
  },
  {
    id: "member-002",
    name: "Boubacar Bah",
    role: "Co-Founder & CEO",
    bio: "Co-fondateur de Seedly Technology & Apps, passionné par la technologie et le développement digital en Guinée.",
    photo: "",
  },
];

export const stats = [
  // TODO: Remplacer par de vraies statistiques quand elles seront disponibles
  // { value: "20+", label: "Projets réalisés" },
  // { value: "15+", label: "Clients satisfaits" },
  // { value: "3+", label: "Années d'expérience" },
] as const;
