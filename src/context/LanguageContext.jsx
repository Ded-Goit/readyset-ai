"use client";

import { createContext, useEffect, useState } from "react";

export const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => {
    if (typeof window === "undefined") {
      return "en";
    }

    return localStorage.getItem("lang") || "en";
  });

  useEffect(() => {
    localStorage.setItem("lang", lang);

    document.documentElement.lang =
      lang === "ua" ? "uk" : lang;
  }, [lang]);

  return (
    <LanguageContext.Provider
      value={{
        lang,
        setLang,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}