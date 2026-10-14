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
      <section className="min-h-screen flex items-center justify-center bg-canvas" aria-labelledby="not-found-title">
        <div className="container-seedly">
          <div className="max-w-2xl mx-auto text-center space-y-8 py-20">
            <div className="flex justify-center">
              <div className="relative">
                <span className="text-9xl font-black text-[#DADAD5] select-none" aria-hidden="true">404</span>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 rounded-2xl bg-[#EEF1FD] border border-[#4169E1]/20 flex items-center justify-center">
                    <Search className="w-8 h-8 text-[#4169E1]" aria-hidden="true" />
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-3">
              <h1 id="not-found-title" className="text-[#202326]">Cette page est introuvable</h1>
              <p className="text-[#62666A]">
                La page que vous cherchez n&apos;existe pas, a été déplacée ou
                l&apos;adresse est incorrecte.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/" className="btn-primary btn-md inline-flex items-center gap-2">
                <Home className="w-4 h-4" aria-hidden="true" />
                Retour à l&apos;accueil
              </Link>
              <Link href="/contact" className="btn-outline btn-md inline-flex items-center gap-2">
                <ArrowLeft className="w-4 h-4" aria-hidden="true" />
                Nous contacter
              </Link>
            </div>
            <div className="pt-4 border-t border-[#DADAD5] text-sm text-[#9A9A93]">
              Vous cherchez quelque chose ?{" "}
              <Link href="/services" className="text-[#4169E1] hover:underline">Voir nos services</Link>
              {" "}·{" "}
              <Link href="/realisations" className="text-[#4169E1] hover:underline">Nos réalisations</Link>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
