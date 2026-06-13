"use client";

import { useLanguage } from "@/hooks/useLanguage";
import styles from "./LanguageSwitcher.module.css";

const languages = ["en", "ua", "fr"];

export default function LanguageSwitcher() {
  const { lang, setLang } = useLanguage();

  return (
    <div className={styles.switcher}>
      {languages.map((item) => (
        <button
          key={item}
          type="button"
          onClick={() => setLang(item)}
          className={`${styles.button} ${
            lang === item ? styles.active : ""
          }`}
        >
          {item.toUpperCase()}
        </button>
      ))}
    </div>
  );
}