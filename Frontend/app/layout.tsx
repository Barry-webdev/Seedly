import type { Metadata, Viewport } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

// =============================================
// POLICES
// =============================================
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
  fallback: ["system-ui", "Arial", "sans-serif"],
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
  weight: ["500", "600", "700", "800"],
  fallback: ["Inter", "system-ui", "Arial", "sans-serif"],
});

// =============================================
// MÉTADONNÉES SEO
// TODO: Mettre à jour le nom de domaine quand il sera confirmé
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
    googleBot: {
      index: true,
      follow: true,
    },
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
        url: "/images/og-seedly.png", // TODO: Créer l'image Open Graph
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
    <html
      lang="fr"
      className={`${inter.variable} ${plusJakarta.variable}`}
      suppressHydrationWarning
    >
      <body className="bg-dark text-neutral-100 antialiased min-h-screen">
        {children}
      </body>
    </html>
  );
}
