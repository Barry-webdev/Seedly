import React from "react";
import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Badge } from "@/components/ui/Badge";
import { getFeaturedProjects } from "@/data/projects";

export const ProjectsSection: React.FC = () => {
  const featuredProjects = getFeaturedProjects();

  return (
    <section className="section-padding bg-white" aria-labelledby="projects-title">
      <div className="container-seedly">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <SectionHeader
            label="Nos réalisations"
            title="Ce que nous avons construit"
            description="Un aperçu de nos projets récents."
            align="left"
          />
          <Link href="/realisations" className="btn-outline btn-sm shrink-0 inline-flex items-center gap-2">
            Voir tout
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </Link>
        </div>

        {featuredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {featuredProjects.map((project) => (
              <article key={project.id} className="card-seedly overflow-hidden group">
                {/* Image */}
                <div className="relative h-48 bg-[#F4F3EF] overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center text-5xl opacity-20">
                    {project.category === "web"       && "🌐"}
                    {project.category === "mobile"    && "📱"}
                    {project.category === "design"    && "🎨"}
                    {project.category === "marketing" && "📈"}
                  </div>
                  {project.isDemo && (
                    <div className="absolute top-3 left-3">
                      <span className="px-2 py-1 rounded-md text-xs font-medium bg-amber-50 text-amber-600 border border-amber-200">
                        Démonstration
                      </span>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-[#4169E1]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Contenu */}
                <div className="p-5 space-y-3">
                  <div className="flex items-center justify-between">
                    <Badge variant="primary">{project.categoryLabel}</Badge>
                    <span className="text-xs text-[#9A9A93]">{project.year}</span>
                  </div>
                  <h3 className="font-bold text-[#202326] text-base leading-snug group-hover:text-[#4169E1] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-[#62666A] leading-relaxed line-clamp-2">
                    {project.shortDescription}
                  </p>
                  {project.technologies && project.technologies.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <span key={tech.name} className="px-2 py-0.5 rounded-md text-xs text-[#62666A] bg-[#F4F3EF] border border-[#DADAD5]">
                          {tech.name}
                        </span>
                      ))}
                    </div>
                  )}
                  <Link
                    href={`/realisations/${project.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-[#62666A] hover:text-[#4169E1] transition-colors pt-1"
                  >
                    Voir le projet
                    <ExternalLink className="w-3 h-3" aria-hidden="true" />
                  </Link>
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
