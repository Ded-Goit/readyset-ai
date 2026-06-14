"use client";

import styles from "./Hero.module.css";
// Імпортуємо наш кастомний безпечний хук замість прямого файлу перекладів
import { useTranslation } from "@/hooks/useTranslation";

export default function Hero() {
  // Використовуємо хук, який захищає від помилок гідратації
  const t = useTranslation();

  // Захист на випадок, якщо об'єкт перекладів ще не готовий
  if (!t) {
    return null;
  }

  return (
    <section className={styles.hero}>
      <div className={styles.badge}>
        {t.heroBadge}
      </div>

      <h1 className={styles.title}>
        {t.heroTitle1}
        <br />
        {t.heroTitle2}
        <span> {" "} {t.heroTitleHighlight} {" "} </span>
        <br />
        {t.heroTitle3}
      </h1>

      <p className={styles.subtitle}>
        {t.heroDescription}
      </p>

      <div className={styles.actions}>
        <a href="#pilot" className={styles.primaryBtn}>
          {t.pilotButton}
        </a>

        <a href="#how" className={styles.secondaryBtn}>
          {t.howButton}
        </a>
      </div>
    </section>
  );
}
