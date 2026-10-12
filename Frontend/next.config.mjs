/** @type {import('next').NextConfig} */
const nextConfig = {
  // Optimisation des images
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      // TODO: Ajouter les domaines externes si nécessaire
    ],
  },

  // Headers de sécurité
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-XSS-Protection", value: "1; mode=block" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
        ],
      },
    ];
  },

  // Compression
  compress: true,

  // TypeScript strict
  typescript: {
    ignoreBuildErrors: false,
  },

  // ESLint strict
  eslint: {
    ignoreDuringBuilds: false,
  },
};

export default nextConfig;
