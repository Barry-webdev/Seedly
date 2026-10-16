"use client";

import React, { createContext, useContext, useState, useCallback } from "react";
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

  const toggleLocale = useCallback(() => {
    setLocale((prev) => (prev === "fr" ? "en" : "fr"));
  }, []);

  return (
    <LanguageContext.Provider value={{ locale, t: translations[locale], toggleLocale }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
