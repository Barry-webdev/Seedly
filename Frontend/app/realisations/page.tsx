"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ExternalLink, AlertCircle } from "lucide-react";
import { MainLayout } from "@/components/layout/MainLayout";
import { Badge } from "@/components/ui/Badge";
import { CTASection } from "@/components/sections/home/CTASection";
import { getProjectsByCategory, projectCategories } from "@/data/projects";

// =============================================
// PAGE RÉALISATIONS — Portfolio
// =============================================

export default function RealisationsPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const filteredProjects = getProjectsByCategory(activeCategory);

  const hasDemoProjects = filteredProjects.some((p) => p.isDemo);

  return (
    <MainLayout>
      {/* Hero */}
      <section className="pt-32 pb-16 relative bg-[#0A0B0E]" aria-labelledby="portfolio-title">
        <div className="absolute inset-0 dot-pattern opacity-40" aria-hidden="true" />
        <div className="container-seedly relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <div className="section-label justify-center">
              <span className="w-5 h-px bg-[#4169E1]" aria-hidden="true" />
              Portfolio
              <span className="w-5 h-px bg-[#4169E1]" aria-hidden="true" />
            </div>
            <h1 id="portfolio-title" className="section-title text-4xl md:text-5xl">
              Nos réalisations
            </h1>
            <p className="section-description text-center mx-auto">
              Un aperçu des projets que nous avons développés. Chaque réalisation témoigne
              de notre engagement pour la qualité et les résultats de nos clients.
            </p>
          </div>
        </div>
      </section>

      {/* Section principale */}
      <section className="section-padding-sm">
        <div className="container-seedly">
          {/* Note sur les démos */}
          {hasDemoProjects && (
            <div className="mb-8 flex items-start gap-3 p-4 rounded-xl bg-yellow-500/5 border border-yellow-500/15">
              <AlertCircle className="w-4 h-4 text-yellow-500 shrink-0 mt-0.5" aria-hidden="true" />
              <p className="text-sm text-[#9A9A93]">
                <span className="text-yellow-400 font-medium">Note :</span>{" "}
                Certains projets présentés sont des démonstrations de nos capacités.
                Nos réalisations réelles seront ajoutées au fur et à mesure.
              </p>
            </div>
          )}

          {/* Filtres par catégorie */}
          <div
            className="flex flex-wrap items-center gap-2 mb-10"
            role="group"
            aria-label="Filtrer par catégorie"
          >
            {projectCategories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                  activeCategory === cat.id
                    ? "bg-[#4169E1] text-[#F4F3EF] border border-[#4169E1]/50"
                    : "bg-[#1C1F26]/5 text-[#9A9A93] border border-white/8 hover:text-[#F4F3EF] hover:bg-[#1C1F26]/10"
                }`}
                aria-pressed={activeCategory === cat.id}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Grille de projets */}
          {filteredProjects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {filteredProjects.map((project) => (
                <article
                  key={project.id}
                  className="card-seedly overflow-hidden group"
                >
                  {/* Image */}
                  <div className="relative h-48 bg-[#1C1F26] overflow-hidden">
                    {project.coverImage ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={project.coverImage}
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-5xl opacity-10">
                          {project.category === "web" && "🌐"}
                          {project.category === "mobile" && "📱"}
                          {project.category === "design" && "🎨"}
                          {project.category === "marketing" && "📈"}
                          {project.category === "branding" && "✨"}
                        </span>
                      </div>
                    )}
                    <div className="absolute inset-0 bg-[#4169E1]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  {/* Contenu */}
                  <div className="p-5 space-y-3">
                    <div className="flex items-center justify-between">
                      <Badge variant="primary">{project.categoryLabel}</Badge>
                      <span className="text-xs text-[#9A9A93]">{project.year}</span>
                    </div>

                    <h2 className="font-bold text-[#F4F3EF] text-base leading-snug group-hover:text-[#7F9FF1] transition-colors">
                      {project.title}
                    </h2>

                    <p className="text-sm text-[#9A9A93] leading-relaxed line-clamp-2">
                      {project.shortDescription}
                    </p>

                    {project.technologies && project.technologies.length > 0 && (
                      <div className="flex flex-wrap gap-1.5">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech.name}
                            className="px-2 py-0.5 rounded text-xs text-[#9A9A93] bg-[#1C1F26]/5 border border-white/8"
                          >
                            {tech.name}
                          </span>
                        ))}
                      </div>
                    )}

                    <div className="pt-2 border-t border-white/8">
                      <Link
                        href={`/realisations/${project.slug}`}
                        className="inline-flex items-center gap-1.5 text-xs font-medium text-[#9A9A93] hover:text-[#7F9FF1] transition-colors"
                        aria-label={`Voir le détail du projet ${project.title}`}
                      >
                        Voir le détail
                        <ExternalLink className="w-3 h-3" aria-hidden="true" />
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="py-20 text-center">
              <p className="text-[#9A9A93]">
                Aucun projet dans cette catégorie pour le moment.
              </p>
            </div>
          )}
        </div>
      </section>

      <CTASection />
    </MainLayout>
  );
}
