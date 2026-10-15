// =============================================
// SEEDLY TECHNOLOGY & APPS — Types TypeScript
// =============================================

// Navigation
export interface NavLink {
  label: string;
  href: string;
  description?: string;
}

export interface NavSection {
  title: string;
  links: NavLink[];
}

// Services
export type ServiceCategory =
  | "web"
  | "mobile"
  | "design"
  | "marketing";

export interface ServiceFeature {
  title: string;
  description: string;
}

export interface Service {
  id: ServiceCategory;
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  shortDescription: string;
  icon: string;
  color: string;
  needs: string[];
  features: ServiceFeature[];
  benefits: string[];
  deliverables: string[];
  cta: string;
}

// Projets / Portfolio
export type ProjectCategory =
  | "web"
  | "mobile"
  | "design"
  | "marketing"
  | "branding";

export interface ProjectTech {
  name: string;
  color?: string;
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  client: string;
  category: ProjectCategory;
  categoryLabel: string;
  shortDescription: string;
  description?: string;
  coverImage: string;
  liveUrl?: string;
  images?: string[];
  technologies?: ProjectTech[];
  context?: string;
  challenge?: string;
  solution?: string;
  results?: string[];
  featured: boolean;
  year: number;
  isDemo?: boolean; // Vrai si c'est un projet de démonstration (pas un vrai client)
}

// Membres de l'équipe
export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  photo?: string;
  linkedin?: string;
  twitter?: string;
}

// Valeurs de l'entreprise
export interface CompanyValue {
  id: string;
  title: string;
  description: string;
  icon: string;
}

// Étape du processus de travail
export interface WorkStep {
  number: string;
  title: string;
  description: string;
  icon: string;
  duration?: string;
}

// Témoignages (à activer quand les vrais témoignages seront disponibles)
export interface Testimonial {
  id: string;
  name: string;
  company: string;
  role: string;
  content: string;
  photo?: string;
  rating?: number;
}

// Formulaire de devis
export type ServiceType =
  | "website"
  | "mobile-app"
  | "ui-ux-design"
  | "digital-marketing"
  | "other";

export type BudgetRange =
  | "less-500"
  | "500-1000"
  | "1000-3000"
  | "3000-5000"
  | "more-5000"
  | "undefined";

export type Timeline =
  | "urgent"
  | "1-month"
  | "1-3-months"
  | "3-6-months"
  | "flexible";

export type ContactPreference = "email" | "whatsapp" | "phone" | "any";

export interface QuoteFormData {
  firstName: string;
  lastName: string;
  company?: string;
  email: string;
  phone: string;
  serviceType: ServiceType | "";
  projectDescription: string;
  budget?: BudgetRange | "";
  timeline?: Timeline | "";
  contactPreference?: ContactPreference | "";
}

export interface QuoteFormErrors {
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  serviceType?: string;
  projectDescription?: string;
}

// États de formulaire
export type FormStatus = "idle" | "submitting" | "success" | "error";

export interface FormState {
  status: FormStatus;
  message?: string;
}

// API — Contrat attendu pour l'envoi du formulaire de devis
// TODO: À connecter à l'endpoint Backend
export interface QuoteApiPayload {
  firstName: string;
  lastName: string;
  company?: string;
  email: string;
  phone: string;
  serviceType: string;
  projectDescription: string;
  budget?: string;
  timeline?: string;
  contactPreference?: string;
  submittedAt: string;
}

export interface QuoteApiResponse {
  success: boolean;
  message: string;
  ticketId?: string;
}

// Coordonnées (centralisées dans /data/contact.ts)
export interface SocialLink {
  platform: string;
  url: string;
  label: string;
  icon: string;
}

export interface ContactInfo {
  email: string;
  phone: string;
  whatsapp: string;
  whatsappNumber: string;
  address: string;
  city: string;
  country: string;
  socials: SocialLink[];
}

// SEO Metadata
export interface PageMeta {
  title: string;
  description: string;
  keywords?: string[];
  ogImage?: string;
  noIndex?: boolean;
}
