"use client";

import { useContext } from "react";

import { LanguageContext } from "@/context/LanguageContext";

import styles from "./LanguageSwitcher.module.css";

export default function LanguageSwitcher() {
  const { lang, setLang } =
    useContext(LanguageContext);

  return (
    <div className={styles.switcher}>
      {["en", "ua", "fr"].map(item => (
        <button
          key={item}
          onClick={() => setLang(item)}
          className={
            lang === item
              ? styles.active
              : styles.button
          }
        >
          {item.toUpperCase()}
        </button>
      ))}
    </div>
  );
}