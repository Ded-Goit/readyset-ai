"use client";

import { useState, useEffect } from "react";
import { useLanguage } from "@/hooks/useLanguage";
import styles from "./LanguageSwitcher.module.css";

const languages = ["en", "ua", "fr"];

export default function LanguageSwitcher() {
  const { lang, setLang } = useLanguage();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // Сигналізуємо лінтеру та React, що клієнт готовий
    const id = requestAnimationFrame(() => {
      setIsMounted(true);
    });
    return () => cancelAnimationFrame(id);
  }, []);

 // On the server and before hydration, we assume the active language is "en"
  const currentActiveLang = isMounted ? lang : "en";

  return (
    <div className={styles.switcher}>
      {languages.map((item) => (
        <button
          key={item}
          type="button"
          onClick={() => setLang(item)}
          className={`${styles.button} ${
            currentActiveLang === item ? styles.active : ""
          }`}
        >
          {item.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
