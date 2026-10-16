import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { LanguageProvider } from "@/lib/i18n/LanguageContext";
import "./globals.css";

// =============================================
// POLICE — Geist (fichiers locaux, zéro requête externe)
// GeistVF.woff = variable font (toutes les graisses en un seul fichier)
// =============================================
const geist = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist",
  display: "swap",
  fallback: ["system-ui", "-apple-system", "Arial", "sans-serif"],
  // Variable font : plage de graisses 100–900
  style: "normal",
});

// =============================================
// MÉTADONNÉES SEO
// =============================================
export const metadata: Metadata = {
  metadataBase: new URL("https://seedly.tech"), // TODO: Remplacer par le vrai domaine
  title: {
    default: "Seedly Technology & Apps — Agence digitale à Conakry, Guinée",
    template: "%s | Seedly Technology & Apps",
  },
  description:
    "Seedly est une agence technologique basée à Conakry qui accompagne les entreprises guinéennes dans leur transformation digitale : sites web, applications mobiles, design UI/UX et marketing digital.",
  keywords: [
    "agence digitale Conakry",
    "création site web Guinée",
    "développement application mobile Guinée",
    "design UI UX Conakry",
    "marketing digital Guinée",
    "transformation digitale Guinée",
    "Seedly Technology",
    "agence web Conakry",
    "développeur web Guinée",
  ],
  authors: [{ name: "Seedly Technology & Apps" }],
  creator: "Seedly Technology & Apps",
  publisher: "Seedly Technology & Apps",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  openGraph: {
    type: "website",
    locale: "fr_GN",
    siteName: "Seedly Technology & Apps",
    title: "Seedly Technology & Apps — Agence digitale à Conakry",
    description:
      "Plantez l'idée. Faites grandir votre activité. Seedly accompagne les entreprises guinéennes dans leur transformation digitale.",
    images: [
      {
        url: "/images/og-seedly.png",
        width: 1200,
        height: 630,
        alt: "Seedly Technology & Apps",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Seedly Technology & Apps",
    description: "Agence digitale à Conakry — Sites web, apps mobiles, design et marketing.",
    images: ["/images/og-seedly.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icons/icon-16.png", sizes: "16x16", type: "image/png" },
      { url: "/icons/icon-32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/icons/apple-touch-icon.png" }],
  },
  manifest: "/manifest.json",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#0A0F0D" },
    { media: "(prefers-color-scheme: light)", color: "#1A7A4A" },
  ],
};

// =============================================
// LAYOUT RACINE
// =============================================
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={geist.variable} suppressHydrationWarning>
      <body className="bg-[#0A0B0E] text-[#F4F3EF] antialiased min-h-screen">
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
