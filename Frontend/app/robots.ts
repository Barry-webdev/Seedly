import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/"],
    },
    // TODO: Remplacer par le vrai domaine
    sitemap: "https://seedly.tech/sitemap.xml",
  };
}
