import type { Metadata } from "next";
import { Star, Heart, Zap, TrendingUp, ShieldCheck, MapPin } from "lucide-react";
import { MainLayout } from "@/components/layout/MainLayout";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { CTASection } from "@/components/sections/home/CTASection";
import { ProcessSection } from "@/components/sections/home/ProcessSection";
import { companyInfo, companyValues, teamMembers } from "@/data/company";

export const metadata: Metadata = {
  title: "À propos de Seedly",
  description:
    "Découvrez Seedly Technology & Apps, agence digitale basée à Conakry. Notre histoire, notre mission, nos valeurs et notre équipe.",
};

const valueIcons: Record<string, React.ReactNode> = {
  star: <Star className="w-5 h-5" />,
  heart: <Heart className="w-5 h-5" />,
  zap: <Zap className="w-5 h-5" />,
  "trending-up": <TrendingUp className="w-5 h-5" />,
  "shield-check": <ShieldCheck className="w-5 h-5" />,
  "map-pin": <MapPin className="w-5 h-5" />,
};

export default function AboutPage() {
  return (
    <MainLayout>
      {/* Hero */}
      <section className="pt-32 pb-20 relative" aria-labelledby="about-title">
        <div className="absolute inset-0 grid-bg opacity-30" aria-hidden="true" />
        <div className="absolute top-20 right-0 w-96 h-96 rounded-full bg-primary/10 blur-3xl" aria-hidden="true" />
        <div className="container-seedly relative z-10">
          <div className="max-w-3xl space-y-6">
            <div className="section-label">
              <span className="w-6 h-0.5 rounded-full bg-accent" aria-hidden="true" />
              Notre histoire
            </div>
            <h1 id="about-title" className="section-title text-4xl md:text-5xl lg:text-6xl">
              Seedly Technology &amp; Apps —{" "}
              l&apos;agence qui plante des{" "}
              <span className="text-gradient">graines digitales</span>
            </h1>
            <p className="section-description text-lg">
              {companyInfo.description}
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding-sm bg-surface/50" aria-labelledby="mission-title">
        <div className="container-seedly">
          <div className="grid lg:grid-cols-2 gap-6">
            <div className="card-seedly p-8 space-y-4">
              <div className="w-10 h-10 rounded-xl bg-primary/15 border border-primary/20 flex items-center justify-center text-2xl">
                🌱
              </div>
              <h2 id="mission-title" className="text-xl font-bold text-white">
                Notre mission
              </h2>
              <p className="text-neutral-400 leading-relaxed">{companyInfo.mission}</p>
            </div>

            <div className="card-seedly p-8 space-y-4">
              <div className="w-10 h-10 rounded-xl bg-accent/15 border border-accent/20 flex items-center justify-center text-2xl">
                🎯
              </div>
              <h2 className="text-xl font-bold text-white">Notre vision</h2>
              <p className="text-neutral-400 leading-relaxed">{companyInfo.vision}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Concept de la graine */}
      <section className="section-padding" aria-labelledby="concept-title">
        <div className="container-seedly">
          <div className="max-w-4xl mx-auto">
            <SectionHeader
              label="Notre philosophie"
              title="Plant the idea. Grow the business."
              description="Le nom Seedly n'est pas un hasard. Une graine contient tout le potentiel d'un grand arbre — il lui faut juste les bonnes conditions pour pousser."
            />

            <div className="mt-12 grid sm:grid-cols-3 gap-6">
              {[
                {
                  emoji: "🌱",
                  title: "La graine",
                  description:
                    "Votre idée ou votre besoin digital, même encore vague. C'est là que tout commence.",
                },
                {
                  emoji: "💧",
                  title: "L'accompagnement",
                  description:
                    "Notre travail : vous donner les outils, la stratégie et les compétences pour que cette idée prenne racine.",
                },
                {
                  emoji: "🌳",
                  title: "La croissance",
                  description:
                    "Un business plus visible, mieux organisé, plus compétitif. Des résultats concrets et durables.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="card-seedly p-6 text-center space-y-3"
                >
                  <span className="text-3xl">{item.emoji}</span>
                  <h3 className="font-bold text-white">{item.title}</h3>
                  <p className="text-sm text-neutral-400 leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Valeurs */}
      <section id="valeurs" className="section-padding bg-surface/50" aria-labelledby="values-title">
        <div className="container-seedly">
          <SectionHeader
            label="Nos valeurs"
            title="Ce en quoi nous croyons"
            description="Ces valeurs guident chaque décision que nous prenons, chaque ligne de code que nous écrivons, chaque client que nous accompagnons."
          />

          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {companyValues.map((value) => (
              <div key={value.id} className="card-seedly p-6 space-y-4 group">
                <div className="w-10 h-10 rounded-xl bg-primary/15 border border-primary/20 flex items-center justify-center text-accent group-hover:bg-primary/25 transition-colors">
                  {valueIcons[value.icon] ?? <Star className="w-5 h-5" />}
                </div>
                <h3 className="font-bold text-white">{value.title}</h3>
                <p className="text-sm text-neutral-400 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Méthode */}
      <section id="methode">
        <ProcessSection />
      </section>

      {/* Équipe */}
      <section className="section-padding" aria-labelledby="team-title">
        <div className="container-seedly">
          <SectionHeader
            label="L'équipe"
            title="Les personnes derrière Seedly"
            description="Nous sommes une équipe passionnée par la technologie et par l'impact que nous pouvons avoir sur les entreprises guinéennes."
          />

          {teamMembers.length === 0 ? (
            <div className="mt-10 text-center py-12 card-seedly max-w-lg mx-auto">
              <p className="text-neutral-500 text-sm leading-relaxed">
                Les profils de notre équipe seront bientôt disponibles ici.
                <br />
                En attendant,{" "}
                <a href="/contact" className="text-accent hover:underline">
                  contactez-nous directement
                </a>
                .
              </p>
            </div>
          ) : (
            <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {teamMembers.map((member) => (
                <div key={member.id} className="card-seedly p-6 space-y-4">
                  <div className="w-16 h-16 rounded-2xl bg-primary/20 border border-primary/20 overflow-hidden">
                    {member.photo ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={member.photo}
                        alt={`Photo de ${member.name}`}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-2xl text-neutral-600">
                        👤
                      </div>
                    )}
                  </div>
                  <div>
                    <h3 className="font-bold text-white">{member.name}</h3>
                    <p className="text-sm text-accent">{member.role}</p>
                  </div>
                  <p className="text-sm text-neutral-400 leading-relaxed">{member.bio}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <CTASection />
    </MainLayout>
  );
}
