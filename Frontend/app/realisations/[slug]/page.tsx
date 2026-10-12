import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, AlertCircle, ArrowRight, Calendar, Tag } from "lucide-react";
import { MainLayout } from "@/components/layout/MainLayout";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { CTASection } from "@/components/sections/home/CTASection";
import { getProjectBySlug, projects } from "@/data/projects";

// =============================================
// PAGE DÉTAIL PROJET
// =============================================

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = getProjectBySlug(params.slug);
  if (!project) return { title: "Projet introuvable" };

  return {
    title: project.title,
    description: project.shortDescription,
  };
}

export default function ProjectDetailPage({ params }: Props) {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    notFound();
  }

  return (
    <MainLayout>
      {/* Retour */}
      <div className="pt-28 pb-4">
        <div className="container-seedly">
          <Link
            href="/realisations"
            className="inline-flex items-center gap-2 text-sm text-neutral-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" aria-hidden="true" />
            Retour aux réalisations
          </Link>
        </div>
      </div>

      {/* Hero du projet */}
      <section className="pb-12 relative" aria-labelledby="project-title">
        <div className="container-seedly">
          {/* Bandeau démo */}
          {project.isDemo && (
            <div className="mb-6 flex items-start gap-3 p-4 rounded-xl bg-yellow-500/5 border border-yellow-500/15">
              <AlertCircle className="w-4 h-4 text-yellow-500 shrink-0 mt-0.5" aria-hidden="true" />
              <p className="text-sm text-neutral-400">
                <span className="text-yellow-400 font-medium">Projet de démonstration</span>{" "}
                — Ce projet illustre nos capacités. Il ne s&apos;agit pas d&apos;un client réel.
              </p>
            </div>
          )}

          <div className="grid lg:grid-cols-3 gap-10">
            {/* Contenu principal */}
            <div className="lg:col-span-2 space-y-6">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Badge variant="primary">{project.categoryLabel}</Badge>
                  <div className="flex items-center gap-1.5 text-neutral-500 text-xs">
                    <Calendar className="w-3.5 h-3.5" aria-hidden="true" />
                    {project.year}
                  </div>
                </div>
                <h1 id="project-title" className="section-title text-3xl md:text-4xl">
                  {project.title}
                </h1>
                <p className="text-neutral-400 leading-relaxed">{project.shortDescription}</p>
              </div>

              {/* Image placeholder */}
              <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden bg-gradient-to-br from-primary/20 via-surface to-surface/80 border border-white/5">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-6xl opacity-10">
                    {project.category === "web" && "🌐"}
                    {project.category === "mobile" && "📱"}
                    {project.category === "design" && "🎨"}
                    {project.category === "marketing" && "📈"}
                  </span>
                </div>
                {project.isDemo && (
                  <div className="absolute bottom-3 left-1/2 -translate-x-1/2 text-xs text-neutral-600">
                    Image non disponible — Projet de démonstration
                  </div>
                )}
              </div>

              {/* Description longue */}
              {project.description && (
                <div className="prose prose-invert prose-sm max-w-none">
                  <p className="text-neutral-400 leading-relaxed">{project.description}</p>
                </div>
              )}

              {/* Contexte */}
              {project.context && (
                <div className="card-seedly p-6 space-y-2">
                  <h2 className="text-sm font-semibold text-white uppercase tracking-wider">Contexte</h2>
                  <p className="text-sm text-neutral-400 leading-relaxed">{project.context}</p>
                </div>
              )}

              {/* Besoin */}
              {project.challenge && (
                <div className="card-seedly p-6 space-y-2">
                  <h2 className="text-sm font-semibold text-white uppercase tracking-wider">Le besoin</h2>
                  <p className="text-sm text-neutral-400 leading-relaxed">{project.challenge}</p>
                </div>
              )}

              {/* Solution */}
              {project.solution && (
                <div className="card-seedly p-6 space-y-2">
                  <h2 className="text-sm font-semibold text-white uppercase tracking-wider">Notre solution</h2>
                  <p className="text-sm text-neutral-400 leading-relaxed">{project.solution}</p>
                </div>
              )}

              {/* Résultats */}
              {project.results && project.results.length > 0 && (
                <div className="card-seedly p-6 space-y-4">
                  <h2 className="text-sm font-semibold text-white uppercase tracking-wider">Résultats</h2>
                  <ul className="space-y-2">
                    {project.results.map((result, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-neutral-400">
                        <ArrowRight className="w-4 h-4 text-accent shrink-0 mt-0.5" aria-hidden="true" />
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <aside className="space-y-5">
              {/* Infos projet */}
              <div className="card-seedly p-6 space-y-4">
                <h2 className="text-sm font-semibold text-white uppercase tracking-wider">
                  Informations
                </h2>
                <dl className="space-y-3">
                  <div>
                    <dt className="text-xs text-neutral-500 mb-1">Client</dt>
                    <dd className="text-sm text-neutral-300">
                      {project.isDemo ? "Démonstration" : project.client}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-xs text-neutral-500 mb-1">Catégorie</dt>
                    <dd>
                      <Badge variant="primary">{project.categoryLabel}</Badge>
                    </dd>
                  </div>
                  <div>
                    <dt className="text-xs text-neutral-500 mb-1">Année</dt>
                    <dd className="text-sm text-neutral-300">{project.year}</dd>
                  </div>
                </dl>
              </div>

              {/* Technologies */}
              {project.technologies && project.technologies.length > 0 && (
                <div className="card-seedly p-6 space-y-4">
                  <h2 className="text-sm font-semibold text-white uppercase tracking-wider flex items-center gap-2">
                    <Tag className="w-4 h-4" aria-hidden="true" />
                    Technologies
                  </h2>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech.name}
                        className="px-3 py-1 rounded-lg text-xs font-medium text-neutral-300 bg-white/5 border border-white/5"
                      >
                        {tech.name}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* CTA sidebar */}
              <div className="card-seedly p-6 space-y-4 border-primary/20">
                <p className="text-sm text-neutral-300 leading-relaxed">
                  Un projet similaire en tête ? Parlons-en.
                </p>
                <Button
                  as="link"
                  href="/devis"
                  variant="accent"
                  size="sm"
                  fullWidth
                  icon={<ArrowRight className="w-4 h-4" />}
                >
                  Demander un devis
                </Button>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <CTASection />
    </MainLayout>
  );
}
