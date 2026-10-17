"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Badge } from "@/components/ui/Badge";
import { getFeaturedProjects } from "@/data/projects";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export const ProjectsSection: React.FC = () => {
  const { t } = useLanguage();
  const featuredProjects = getFeaturedProjects();

  return (
    <section className="section-padding bg-[#14161A]" aria-labelledby="projects-title">
      <div className="container-seedly">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <SectionHeader
            label={t.sections.ourWork}
            title={t.portfolio.title}
            description={t.portfolio.description}
            align="left"
          />
          <Link href="/realisations" className="btn-outline btn-sm shrink-0 inline-flex items-center gap-2">
            {t.portfolio.viewAll}
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </Link>
        </div>

        {featuredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {featuredProjects.map((project) => (
              <article key={project.id} className="card-seedly overflow-hidden group">
                <div className="relative h-48 bg-[#1C1F26] overflow-hidden">
                  {project.coverImage ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={project.coverImage} alt={project.title} className="w-full h-full object-cover" />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center text-5xl opacity-20">
                      {project.category === "web" && "🌐"}
                      {project.category === "mobile" && "📱"}
                      {project.category === "design" && "🎨"}
                      {project.category === "marketing" && "📈"}
                    </div>
                  )}
                  <div className="absolute inset-0 bg-[#4169E1]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                <div className="p-5 space-y-3">
                  <div className="flex items-center justify-between">
                    <Badge variant="primary">{project.categoryLabel}</Badge>
                    <span className="text-xs text-[#9A9A93]">{project.year}</span>
                  </div>
                  <h3 className="font-bold text-[#F4F3EF] text-base leading-snug group-hover:text-[#7F9FF1] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-[#9A9A93] leading-relaxed line-clamp-2">
                    {project.shortDescription}
                  </p>
                  {project.technologies && project.technologies.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <span key={tech.name} className="px-2 py-0.5 rounded-md text-xs text-[#9A9A93] bg-white/5 border border-white/8">
                          {tech.name}
                        </span>
                      ))}
                    </div>
                  )}
                  <div className="flex items-center gap-3 pt-1">
                    <Link href={`/realisations/${project.slug}`} className="inline-flex items-center gap-1.5 text-xs font-medium text-[#9A9A93] hover:text-[#7F9FF1] transition-colors">
                      {t.portfolio.viewProject}
                      <ExternalLink className="w-3 h-3" aria-hidden="true" />
                    </Link>
                    {project.liveUrl && (
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-medium text-[#4169E1] hover:text-[#7F9FF1] transition-colors">
                        {t.portfolio.viewSite}
                        <ExternalLink className="w-3 h-3" aria-hidden="true" />
                      </a>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-[#9A9A93]">Nos premiers projets arrivent bientôt.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;
