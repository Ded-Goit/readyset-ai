"use client";

import { useState, useEffect } from "react";
import { translations } from "@/locales"; // Шлях до вашого src/locales/index.js
import { useLanguage } from "./useLanguage";

export function useTranslation() {
  const { lang } = useLanguage();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const id = requestAnimationFrame(() => {
      setIsMounted(true);
    });
    return () => cancelAnimationFrame(id);
  }, []);

  if (!isMounted) {
    return translations.en;
  }

  return translations[lang] || translations.en;
}