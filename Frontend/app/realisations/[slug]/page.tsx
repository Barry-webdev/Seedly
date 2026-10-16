import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Calendar, Tag, ExternalLink } from "lucide-react";
import { MainLayout } from "@/components/layout/MainLayout";
import { Badge } from "@/components/ui/Badge";
import { CTASection } from "@/components/sections/home/CTASection";
import { getProjectBySlug, projects } from "@/data/projects";

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = getProjectBySlug(params.slug);
  if (!project) return { title: "Projet introuvable" };
  return { title: project.title, description: project.shortDescription };
}

export default function ProjectDetailPage({ params }: Props) {
  const project = getProjectBySlug(params.slug);
  if (!project) notFound();

  return (
    <MainLayout>
      {/* Retour */}
      <div className="pt-28 pb-4">
        <div className="container-seedly">
          <Link href="/realisations" className="inline-flex items-center gap-2 text-sm text-[#9A9A93] hover:text-[#F4F3EF] transition-colors">
            <ArrowLeft className="w-4 h-4" aria-hidden="true" />
            Retour aux réalisations
          </Link>
        </div>
      </div>

      <section className="pb-12" aria-labelledby="project-title">
        <div className="container-seedly">
          <div className="grid lg:grid-cols-3 gap-10">

            {/* Contenu principal */}
            <div className="lg:col-span-2 space-y-6">
              {/* En-tête */}
              <div className="space-y-3">
                <div className="flex items-center gap-3 flex-wrap">
                  <Badge variant="primary">{project.categoryLabel}</Badge>
                  <div className="flex items-center gap-1.5 text-[#9A9A93] text-xs">
                    <Calendar className="w-3.5 h-3.5" aria-hidden="true" />
                    {project.year}
                  </div>
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-medium text-[#4169E1] hover:text-[#7F9FF1] transition-colors border border-[#4169E1]/30 rounded-lg px-3 py-1"
                    >
                      Voir le site en ligne
                      <ExternalLink className="w-3 h-3" aria-hidden="true" />
                    </a>
                  )}
                </div>
                <h1 id="project-title" className="section-title text-3xl md:text-4xl">
                  {project.title}
                </h1>
                <p className="text-[#9A9A93] leading-relaxed">{project.shortDescription}</p>
              </div>

              {/* Image du projet */}
              <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden border border-white/8">
                {project.coverImage ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={project.coverImage}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full bg-[#1C1F26] flex items-center justify-center">
                    <span className="text-6xl opacity-10">
                      {project.category === "web"       && "🌐"}
                      {project.category === "mobile"    && "📱"}
                      {project.category === "design"    && "🎨"}
                      {project.category === "marketing" && "📈"}
                    </span>
                  </div>
                )}
              </div>

              {/* Description */}
              {project.description && (
                <p className="text-[#9A9A93] leading-relaxed">{project.description}</p>
              )}

              {/* Contexte */}
              {project.context && (
                <div className="card-seedly p-6 space-y-2">
                  <h2 className="text-sm font-semibold text-[#F4F3EF] uppercase tracking-wider">Contexte</h2>
                  <p className="text-sm text-[#9A9A93] leading-relaxed">{project.context}</p>
                </div>
              )}

              {/* Solution */}
              {project.solution && (
                <div className="card-seedly p-6 space-y-2">
                  <h2 className="text-sm font-semibold text-[#F4F3EF] uppercase tracking-wider">Notre solution</h2>
                  <p className="text-sm text-[#9A9A93] leading-relaxed">{project.solution}</p>
                </div>
              )}

              {/* Résultats */}
              {project.results && project.results.length > 0 && (
                <div className="card-seedly p-6 space-y-4">
                  <h2 className="text-sm font-semibold text-[#F4F3EF] uppercase tracking-wider">Résultats</h2>
                  <ul className="space-y-2">
                    {project.results.map((result, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-[#9A9A93]">
                        <ArrowRight className="w-4 h-4 text-[#7F9FF1] shrink-0 mt-0.5" aria-hidden="true" />
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <aside className="space-y-5">
              {/* Infos */}
              <div className="card-seedly p-6 space-y-4">
                <h2 className="text-sm font-semibold text-[#F4F3EF] uppercase tracking-wider">Informations</h2>
                <dl className="space-y-3">
                  <div>
                    <dt className="text-xs text-[#62666A] mb-1">Client</dt>
                    <dd className="text-sm text-[#F4F3EF]">{project.client}</dd>
                  </div>
                  <div>
                    <dt className="text-xs text-[#62666A] mb-1">Catégorie</dt>
                    <dd><Badge variant="primary">{project.categoryLabel}</Badge></dd>
                  </div>
                  <div>
                    <dt className="text-xs text-[#62666A] mb-1">Année</dt>
                    <dd className="text-sm text-[#F4F3EF]">{project.year}</dd>
                  </div>
                </dl>
              </div>

              {/* Lien live */}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full px-5 py-3 rounded-xl bg-[#4169E1] text-[#F4F3EF] font-semibold text-sm hover:bg-[#2F52C8] transition-colors"
                >
                  Voir le site en ligne
                  <ExternalLink className="w-4 h-4" aria-hidden="true" />
                </a>
              )}

              {/* Technologies */}
              {project.technologies && project.technologies.length > 0 && (
                <div className="card-seedly p-6 space-y-4">
                  <h2 className="text-sm font-semibold text-[#F4F3EF] uppercase tracking-wider flex items-center gap-2">
                    <Tag className="w-4 h-4" aria-hidden="true" />
                    Technologies
                  </h2>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span key={tech.name} className="px-3 py-1 rounded-lg text-xs font-medium text-[#9A9A93] bg-white/5 border border-white/8">
                        {tech.name}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* CTA */}
              <div className="card-seedly p-6 space-y-4">
                <p className="text-sm text-[#9A9A93] leading-relaxed">
                  Un projet similaire en tête ? Parlons-en.
                </p>
                <Link
                  href="/devis"
                  className="flex items-center justify-center gap-2 w-full px-5 py-3 rounded-xl bg-[#4169E1] text-[#F4F3EF] font-semibold text-sm hover:bg-[#2F52C8] transition-colors"
                >
                  Demander un devis
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <CTASection />
    </MainLayout>
  );
}
