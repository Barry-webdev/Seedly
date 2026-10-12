import type { Metadata } from "next";
import { MainLayout } from "@/components/layout/MainLayout";
import { HeroSection } from "@/components/sections/home/HeroSection";
import { ValuePropositionSection } from "@/components/sections/home/ValuePropositionSection";
import { ServicesSection } from "@/components/sections/home/ServicesSection";
import { ProjectsSection } from "@/components/sections/home/ProjectsSection";
import { ProcessSection } from "@/components/sections/home/ProcessSection";
import { DifferentiatorSection } from "@/components/sections/home/DifferentiatorSection";
import { CTASection } from "@/components/sections/home/CTASection";

export const metadata: Metadata = {
  title: "Seedly Technology & Apps — Agence digitale à Conakry, Guinée",
  description:
    "Seedly accompagne les entreprises guinéennes dans leur transformation digitale. Création de sites web, développement d'applications mobiles, design UI/UX et marketing digital à Conakry.",
};

export default function HomePage() {
  return (
    <MainLayout>
      {/* Lien d'accès rapide pour l'accessibilité */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 btn-accent btn-sm"
      >
        Aller au contenu principal
      </a>

      <HeroSection />
      <ValuePropositionSection />
      <ServicesSection />
      <ProjectsSection />
      <ProcessSection />
      <DifferentiatorSection />
      <CTASection />
    </MainLayout>
  );
}
