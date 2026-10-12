import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Home, Search } from "lucide-react";
import { MainLayout } from "@/components/layout/MainLayout";

export const metadata: Metadata = {
  title: "Page introuvable",
  description: "Cette page n'existe pas ou a été déplacée.",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <MainLayout>
      <section
        className="min-h-screen flex items-center justify-center"
        aria-labelledby="not-found-title"
      >
        <div className="container-seedly">
          <div className="max-w-2xl mx-auto text-center space-y-8 py-20">
            {/* Illustration */}
            <div className="flex justify-center">
              <div className="relative">
                <span
                  className="text-9xl font-black text-white/5 select-none"
                  aria-hidden="true"
                >
                  404
                </span>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 rounded-2xl bg-primary/15 border border-primary/20 flex items-center justify-center">
                    <Search className="w-8 h-8 text-accent" aria-hidden="true" />
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <h1
                id="not-found-title"
                className="text-3xl md:text-4xl font-bold text-white"
              >
                Cette page est introuvable
              </h1>
              <p className="text-neutral-400 leading-relaxed">
                La page que vous cherchez n&apos;existe pas, a été déplacée ou
                l&apos;adresse est incorrecte.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/" className="btn-accent btn-md">
                <Home className="w-4 h-4" aria-hidden="true" />
                Retour à l&apos;accueil
              </Link>
              <Link href="/contact" className="btn-outline btn-md">
                <ArrowLeft className="w-4 h-4" aria-hidden="true" />
                Nous contacter
              </Link>
            </div>

            <div className="pt-4 border-t border-white/5 text-center">
              <p className="text-sm text-neutral-500">
                Vous cherchez quelque chose en particulier ?{" "}
                <Link href="/services" className="text-accent hover:underline">
                  Voir nos services
                </Link>{" "}
                ·{" "}
                <Link href="/realisations" className="text-accent hover:underline">
                  Nos réalisations
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
