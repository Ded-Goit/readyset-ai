"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

import { useLanguage } from "@/hooks/useLanguage";

import styles from "./LanguageSwitcher.module.css";

const languages = ["en", "ua", "fr"];

export default function LanguageSwitcher() {
  const { lang, setLang } = useLanguage();

  const [isMounted, setIsMounted] =
    useState(false);

  useEffect(() => {
    const id =
      requestAnimationFrame(() => {
        setIsMounted(true);
      });

    return () =>
      cancelAnimationFrame(id);
  }, []);

  const currentActiveLang =
    isMounted ? lang : "en";

  return (
    <motion.div
      initial={{
        opacity: 0,
        x: 20,
      }}
      animate={{
        opacity: 1,
        x: 0,
      }}
      transition={{
        duration: 0.5,
        delay: 0.2,
      }}
      className={styles.switcher}
    >
      {languages.map(item => (
        <button
          key={item}
          type="button"
          onClick={() => setLang(item)}
          className={`${styles.button} ${
            currentActiveLang === item
              ? styles.active
              : ""
          }`}
        >
          {item.toUpperCase()}
        </button>
      ))}
    </motion.div>
  );
}