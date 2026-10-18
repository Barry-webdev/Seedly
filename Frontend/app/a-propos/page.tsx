import type { Metadata } from "next";
import { Star, Heart, Zap, TrendingUp, ShieldCheck, MapPin } from "lucide-react";
import { MainLayout } from "@/components/layout/MainLayout";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { CTASection } from "@/components/sections/home/CTASection";
import { ProcessSection } from "@/components/sections/home/ProcessSection";
import { companyInfo, companyValues, teamMembers } from "@/data/company";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";

export const metadata: Metadata = {
  title: "À propos — Seedly Technology & Apps",
  description:
    "Découvrez Seedly Technology & Apps, agence digitale basée à Conakry, Guinée. Notre mission : transformer vos idées en solutions numériques performantes. Rencontrez notre équipe et notre approche.",
};

const valueIcons: Record<string, React.ReactNode> = {
  star:         <Star className="w-5 h-5" />,
  heart:        <Heart className="w-5 h-5" />,
  zap:          <Zap className="w-5 h-5" />,
  "trending-up":<TrendingUp className="w-5 h-5" />,
  "shield-check":<ShieldCheck className="w-5 h-5" />,
  "map-pin":    <MapPin className="w-5 h-5" />,
};

const whatsappNumbers = ["+224623897381", "+224626058033"];

export default function AboutPage() {
  return (
    <MainLayout>

      {/* ── Hero ─────────────────────────────────────────── */}
      <section className="pt-32 pb-20 relative" aria-labelledby="about-title">
        <div className="absolute inset-0 grid-bg opacity-30" aria-hidden="true" />
        <div className="absolute top-20 right-0 w-96 h-96 rounded-full bg-[#4169E1]/10 blur-3xl" aria-hidden="true" />
        <div className="container-seedly relative z-10">
          <div className="max-w-3xl space-y-6">
            <div className="section-label">
              <span className="w-6 h-0.5 rounded-full bg-[#4169E1]" aria-hidden="true" />
              Notre histoire
            </div>
            <h1 id="about-title" className="section-title text-4xl md:text-5xl lg:text-6xl">
              Seedly Technology &amp; Apps —{" "}
              l&apos;agence qui plante des{" "}
              <span className="text-gradient">graines digitales</span>
            </h1>
            <p className="section-description text-lg">{companyInfo.description}</p>
          </div>
        </div>
      </section>

      {/* ── Mission & Vision ─────────────────────────────── */}
      <section className="section-padding-sm bg-[#0D1018]" aria-labelledby="mission-title">
        <div className="container-seedly">
          <div className="grid lg:grid-cols-2 gap-6">
            <div className="card-seedly p-8 space-y-4">
              <div className="w-10 h-10 rounded-xl bg-[#4169E1]/15 border border-primary/20 flex items-center justify-center text-2xl">🌱</div>
              <h2 id="mission-title" className="text-xl font-bold text-[#F4F3EF]">Notre mission</h2>
              <p className="text-[#9A9A93] leading-relaxed">{companyInfo.mission}</p>
            </div>
            <div className="card-seedly p-8 space-y-4">
              <div className="w-10 h-10 rounded-xl bg-[#4169E1]/15 border border-accent/20 flex items-center justify-center text-2xl">🎯</div>
              <h2 className="text-xl font-bold text-[#F4F3EF]">Notre vision</h2>
              <p className="text-[#9A9A93] leading-relaxed">{companyInfo.vision}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Concept de la graine ─────────────────────────── */}
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
                { emoji: "🌱", title: "La graine",        description: "Votre idée ou votre besoin digital, même encore vague. C'est là que tout commence." },
                { emoji: "💧", title: "L'accompagnement", description: "Notre travail : vous donner les outils, la stratégie et les compétences pour que cette idée prenne racine." },
                { emoji: "🌳", title: "La croissance",    description: "Un business plus visible, mieux organisé, plus compétitif. Des résultats concrets et durables." },
              ].map((item) => (
                <div key={item.title} className="card-seedly p-6 text-center space-y-3">
                  <span className="text-3xl">{item.emoji}</span>
                  <h3 className="font-bold text-[#F4F3EF]">{item.title}</h3>
                  <p className="text-sm text-[#9A9A93] leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Valeurs ──────────────────────────────────────── */}
      <section id="valeurs" className="section-padding bg-[#0D1018]" aria-labelledby="values-title">
        <div className="container-seedly">
          <SectionHeader
            label="Nos valeurs"
            title="Ce en quoi nous croyons"
            description="Ces valeurs guident chaque décision que nous prenons, chaque ligne de code que nous écrivons, chaque client que nous accompagnons."
          />
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {companyValues.map((value) => (
              <div key={value.id} className="card-seedly p-6 space-y-4 group">
                <div className="w-10 h-10 rounded-xl bg-[#4169E1]/15 border border-primary/20 flex items-center justify-center text-[#7F9FF1] group-hover:bg-primary/25 transition-colors">
                  {valueIcons[value.icon] ?? <Star className="w-5 h-5" />}
                </div>
                <h3 className="font-bold text-[#F4F3EF]">{value.title}</h3>
                <p className="text-sm text-[#9A9A93] leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Méthode ──────────────────────────────────────── */}
      <section id="methode">
        <ProcessSection />
      </section>

      {/* ── Équipe ───────────────────────────────────────── */}
      <section className="section-padding" aria-labelledby="team-title">
        <div className="container-seedly">
          <SectionHeader
            label="L'équipe"
            title="Les personnes derrière Seedly"
            description="Nous sommes une équipe passionnée par la technologie et par l'impact que nous pouvons avoir sur les entreprises guinéennes."
          />

          <div className="mt-12 grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {teamMembers.map((member, index) => {
              const rawNumber = whatsappNumbers[index] ?? "";
              const waLink = `https://wa.me/${rawNumber.replace(/\D/g, "")}?text=${encodeURIComponent(
                "Bonjour " + member.name.split(" ")[0] + ", j'ai visité le site Seedly et je souhaite discuter d'un projet."
              )}`;
              const displayNumber = rawNumber.replace(
                /(\+224)(\d{3})(\d{2})(\d{2})(\d{2})/,
                "$1 $2 $3 $4 $5"
              );

              return (
                <div key={member.id} className="card-seedly p-6 space-y-5 group">
                  {/* Photo + infos */}
                  <div className="flex items-center gap-4">
                    <div className="w-20 h-20 rounded-2xl overflow-hidden shrink-0 border border-white/10">
                      {member.photo ? (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img
                          src={member.photo}
                          alt={`Photo de ${member.name}`}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-3xl bg-[#4169E1]/10">
                          👤
                        </div>
                      )}
                    </div>
                    <div>
                      <h3 className="font-bold text-[#F4F3EF] text-lg leading-tight">
                        {member.name}
                      </h3>
                      <p className="text-xs text-[#7F9FF1] font-medium mt-1 leading-snug">
                        {member.role}
                      </p>
                    </div>
                  </div>

                  {/* Bio */}
                  {member.bio && (
                    <p className="text-sm text-[#9A9A93] leading-relaxed">
                      {member.bio}
                    </p>
                  )}

                  {/* WhatsApp */}
                  <a
                    href={waLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-xl bg-green-500/8 border border-green-500/15 hover:bg-green-500/15 hover:border-green-500/30 transition-all duration-200 group/wa"
                    aria-label={`Contacter ${member.name} sur WhatsApp`}
                  >
                    <div className="w-8 h-8 rounded-lg bg-green-500/15 flex items-center justify-center shrink-0">
                      <WhatsAppIcon className="w-4 h-4 text-green-400" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs text-[#9A9A93] leading-none mb-0.5">WhatsApp</p>
                      <p className="text-sm font-medium text-green-400 group-hover/wa:text-green-300 transition-colors">
                        {displayNumber}
                      </p>
                    </div>
                    <svg className="w-4 h-4 text-[#9A9A93] group-hover/wa:text-green-400 transition-colors shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <CTASection />
    </MainLayout>
  );
}
