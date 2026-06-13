"use client";

import styles from "./Hero.module.css";

import { useLanguage } from "@/hooks/useLanguage";
import { translations } from "@/data/translations";

export default function Hero() {
  const { lang } = useLanguage();

  const t = translations[lang];

  return (
    <section className={styles.hero}>
      <div className={styles.badge}>
        {t.heroBadge}
      </div>

      <h1 className={styles.title}>
        {t.heroTitle1}
        <br />

        {t.heroTitle2}

        <span>
          {" "}
          {t.heroTitleHighlight}{" "}
        </span>

        <br />

        {t.heroTitle3}
      </h1>

      <p className={styles.subtitle}>
        {t.heroDescription}
      </p>

      <div className={styles.actions}>
        <a
          href="#pilot"
          className={styles.primaryBtn}
        >
          {t.pilotButton}
        </a>

        <a
          href="#how"
          className={styles.secondaryBtn}
        >
          {t.howButton}
        </a>
      </div>
    </section>
  );
}