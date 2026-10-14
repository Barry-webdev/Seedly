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
        // ── Palette officielle Seedly ──────────────────────
        canvas:    "#F4F3EF", // fond principal blanc cassé
        ink:       "#202326", // textes / titres anthracite
        blue:      "#4169E1", // bleu électrique — CTA principal
        "blue-dark": "#2F52C8", // hover bouton bleu
        "blue-light": "#EEF1FD", // fond léger bleu pour badges
        white:     "#FFFFFF",
        "gray-text":"#62666A", // textes secondaires
        border:    "#DADAD5", // bordures discrètes

        // ── Surfaces ──────────────────────────────────────
        surface: {
          DEFAULT: "#FFFFFF",
          alt:     "#F4F3EF",
          dark:    "#202326",
        },

        // ── Neutres fonctionnels ───────────────────────────
        neutral: {
          50:  "#FAFAF9",
          100: "#F4F3EF",
          200: "#DADAD5",
          300: "#C4C4BD",
          400: "#9A9A93",
          500: "#62666A",
          600: "#494C50",
          700: "#353840",
          800: "#202326",
          900: "#14161A",
          950: "#0A0B0E",
        },

        // ── Compatibilité avec l'ancien code ──────────────
        primary: {
          DEFAULT: "#4169E1",
          50:  "#EEF1FD",
          100: "#D5DCFB",
          200: "#AABAF6",
          300: "#7F99F1",
          400: "#5477EC",
          500: "#4169E1",
          600: "#2F52C8",
          700: "#2040A8",
          800: "#162E88",
          900: "#0E1E5A",
        },
        accent: {
          DEFAULT: "#4169E1",
          light:   "#7F99F1",
          dark:    "#2F52C8",
        },
        dark: "#202326",
      },

      fontFamily: {
        sans:    ["var(--font-geist)", "system-ui", "-apple-system", "sans-serif"],
        display: ["var(--font-geist)", "system-ui", "-apple-system", "sans-serif"],
        mono:    ["var(--font-geist)", "ui-monospace", "monospace"],
      },

      fontSize: {
        "xs":   ["0.75rem",  { lineHeight: "1.5",  letterSpacing: "0" }],
        "sm":   ["0.875rem", { lineHeight: "1.6",  letterSpacing: "0" }],
        "base": ["1rem",     { lineHeight: "1.7",  letterSpacing: "0" }],
        "lg":   ["1.125rem", { lineHeight: "1.7",  letterSpacing: "-0.01em" }],
        "xl":   ["1.25rem",  { lineHeight: "1.6",  letterSpacing: "-0.01em" }],
        "display-sm":  ["1.875rem", { lineHeight: "1.25", letterSpacing: "-0.02em" }],
        "display-md":  ["2.25rem",  { lineHeight: "1.2",  letterSpacing: "-0.025em" }],
        "display-lg":  ["3rem",     { lineHeight: "1.15", letterSpacing: "-0.03em" }],
        "display-xl":  ["3.75rem",  { lineHeight: "1.1",  letterSpacing: "-0.03em" }],
        "display-2xl": ["4.5rem",   { lineHeight: "1.05", letterSpacing: "-0.03em" }],
      },

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
        "xl":  "0.75rem",
        "2xl": "1rem",
        "3xl": "1.5rem",
        "4xl": "2rem",
      },

      boxShadow: {
        "xs":         "0 1px 2px rgba(32,35,38,0.06)",
        "sm":         "0 1px 4px rgba(32,35,38,0.08), 0 1px 2px rgba(32,35,38,0.04)",
        "card":       "0 2px 8px rgba(32,35,38,0.08), 0 1px 3px rgba(32,35,38,0.05)",
        "card-hover": "0 8px 32px rgba(32,35,38,0.12), 0 2px 8px rgba(32,35,38,0.06)",
        "blue":       "0 4px 20px rgba(65,105,225,0.25)",
        "blue-lg":    "0 8px 32px rgba(65,105,225,0.30)",
      },

      animation: {
        "fade-in":    "fadeIn 0.4s ease-out forwards",
        "fade-up":    "fadeUp 0.5s ease-out forwards",
        "scale-in":   "scaleIn 0.35s ease-out forwards",
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },

      keyframes: {
        fadeIn:  { "0%": { opacity: "0" }, "100%": { opacity: "1" } },
        fadeUp:  { "0%": { opacity: "0", transform: "translateY(16px)" }, "100%": { opacity: "1", transform: "translateY(0)" } },
        scaleIn: { "0%": { opacity: "0", transform: "scale(0.96)" }, "100%": { opacity: "1", transform: "scale(1)" } },
      },

      backgroundImage: {
        "gradient-radial":  "radial-gradient(var(--tw-gradient-stops))",
        "gradient-canvas":  "linear-gradient(160deg, #FFFFFF 0%, #F4F3EF 100%)",
        "gradient-blue":    "linear-gradient(135deg, #4169E1 0%, #2F52C8 100%)",
        "gradient-ink":     "linear-gradient(160deg, #202326 0%, #353840 100%)",
        "dot-pattern":      "radial-gradient(circle, #DADAD5 1px, transparent 1px)",
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
