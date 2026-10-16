"use client";

import React, { createContext, useContext, useState, useCallback, useEffect } from "react";
import { translations, type Locale } from "./translations";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type T = any;

interface LanguageContextType {
  locale: Locale;
  t: T;
  toggleLocale: () => void;
}

const LanguageContext = createContext<LanguageContextType>({
  locale: "fr",
  t: translations.fr,
  toggleLocale: () => {},
});

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [locale, setLocale] = useState<Locale>("fr");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Récupère la langue sauvegardée, sinon français par défaut
    const saved = localStorage.getItem("seedly-locale") as Locale | null;
    if (saved === "en" || saved === "fr") {
      setLocale(saved);
    }
    setMounted(true);
  }, []);

  const toggleLocale = useCallback(() => {
    setLocale((prev) => {
      const next: Locale = prev === "fr" ? "en" : "fr";
      localStorage.setItem("seedly-locale", next);
      return next;
    });
  }, []);

  // Évite le flash de contenu incorrect pendant l'hydratation
  if (!mounted) {
    return (
      <LanguageContext.Provider value={{ locale: "fr", t: translations.fr, toggleLocale }}>
        {children}
      </LanguageContext.Provider>
    );
  }

  return (
    <LanguageContext.Provider value={{ locale, t: translations[locale], toggleLocale }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
