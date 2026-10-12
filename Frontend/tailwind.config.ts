import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#1A7A4A",
          50:  "#E8F5EE",
          100: "#C5E8D4",
          200: "#9ED8B8",
          300: "#70C79A",
          400: "#3DB87C",
          500: "#1A7A4A",
          600: "#0F5C35",
          700: "#0A4227",
          800: "#062A19",
          900: "#03140C",
        },
        accent: {
          DEFAULT: "#2DD4A0",
          light: "#6EE7C7",
          dark:  "#1AAF83",
        },
        neutral: {
          50:  "#F9FAFB",
          100: "#F3F4F6",
          200: "#E5E7EB",
          300: "#D1D5DB",
          400: "#9CA3AF",
          500: "#6B7280",
          600: "#4B5563",
          700: "#374151",
          800: "#1F2937",
          900: "#111827",
          950: "#030712",
        },
        surface: {
          DEFAULT: "#0D1A14",
          light: "#132010",
          card:  "#1A2920",
        },
        dark: "#0A0F0D",
      },

      // ── Geist comme police unique ──────────────────────────────
      fontFamily: {
        sans:    ["var(--font-geist)", "system-ui", "-apple-system", "sans-serif"],
        display: ["var(--font-geist)", "system-ui", "-apple-system", "sans-serif"],
        mono:    ["var(--font-geist)", "ui-monospace", "monospace"],
      },

      // ── Échelle typographique fluide ───────────────────────────
      fontSize: {
        // Textes courants
        "xs":   ["0.75rem",  { lineHeight: "1.5",  letterSpacing: "0" }],
        "sm":   ["0.875rem", { lineHeight: "1.6",  letterSpacing: "0" }],
        "base": ["1rem",     { lineHeight: "1.7",  letterSpacing: "0" }],
        "lg":   ["1.125rem", { lineHeight: "1.7",  letterSpacing: "-0.01em" }],
        "xl":   ["1.25rem",  { lineHeight: "1.6",  letterSpacing: "-0.01em" }],
        // Display (titres)
        "display-sm":  ["1.875rem", { lineHeight: "1.25", letterSpacing: "-0.02em" }],
        "display-md":  ["2.25rem",  { lineHeight: "1.2",  letterSpacing: "-0.025em" }],
        "display-lg":  ["3rem",     { lineHeight: "1.15", letterSpacing: "-0.03em" }],
        "display-xl":  ["3.75rem",  { lineHeight: "1.1",  letterSpacing: "-0.03em" }],
        "display-2xl": ["4.5rem",   { lineHeight: "1.05", letterSpacing: "-0.03em" }],
      },

      // ── Graisses Geist Variable Font ───────────────────────────
      fontWeight: {
        thin:       "100",
        extralight: "200",
        light:      "300",
        normal:     "400",
        medium:     "500",
        semibold:   "600",
        bold:       "700",
        extrabold:  "800",
        black:      "900",
      },

      spacing: {
        "18": "4.5rem",
        "22": "5.5rem",
        "30": "7.5rem",
      },

      borderRadius: {
        "2xl": "1rem",
        "3xl": "1.5rem",
        "4xl": "2rem",
      },

      boxShadow: {
        "card":       "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.08)",
        "card-hover": "0 10px 30px rgba(0,0,0,0.15), 0 4px 10px rgba(0,0,0,0.10)",
        "glow":       "0 0 30px rgba(26, 122, 74, 0.25)",
        "glow-accent":"0 0 20px rgba(45, 212, 160, 0.20)",
      },

      animation: {
        "fade-in":    "fadeIn 0.5s ease-out forwards",
        "fade-up":    "fadeUp 0.6s ease-out forwards",
        "scale-in":   "scaleIn 0.4s ease-out forwards",
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },

      keyframes: {
        fadeIn: {
          "0%":   { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeUp: {
          "0%":   { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        scaleIn: {
          "0%":   { opacity: "0", transform: "scale(0.95)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
      },

      backgroundImage: {
        "gradient-radial":   "radial-gradient(var(--tw-gradient-stops))",
        "gradient-seedly":   "linear-gradient(135deg, #0A0F0D 0%, #0D1A14 50%, #0A1510 100%)",
        "gradient-primary":  "linear-gradient(135deg, #1A7A4A 0%, #0F5C35 100%)",
        "gradient-accent":   "linear-gradient(135deg, #2DD4A0 0%, #1A7A4A 100%)",
      },

      maxWidth: {
        "8xl": "88rem",
        "9xl": "96rem",
      },

      transitionTimingFunction: {
        "spring": "cubic-bezier(0.34, 1.56, 0.64, 1)",
        "smooth": "cubic-bezier(0.4, 0, 0.2, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
