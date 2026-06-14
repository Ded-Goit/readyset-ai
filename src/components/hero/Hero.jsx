"use client";

import styles from "./Hero.module.css";

import { useTranslation } from "@/hooks/useTranslation";
import FadeUp from "@/components/shared/FadeUp";

export default function Hero() {
 
  const t = useTranslation();

 
  if (!t) {
    return null;
  }

  return (
    <section className={styles.hero}>
  <FadeUp delay={0}>
    <div className={styles.badge}>
      {t.heroBadge}
    </div>
  </FadeUp>

  <FadeUp delay={0.2}>
    <h1 className={styles.title}>
      {t.heroTitle1}
      <br />
      {t.heroTitle2}
      <span> {t.heroTitleHighlight} </span>
      <br />
      {t.heroTitle3}
    </h1>
  </FadeUp>

  <FadeUp delay={0.4}>
    <p className={styles.subtitle}>
      {t.heroDescription}
    </p>
  </FadeUp>

  <FadeUp delay={0.6}>
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
  </FadeUp>
</section>
  );
}
