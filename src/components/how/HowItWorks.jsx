"use client";

import { useTranslation } from "@/hooks/useTranslation";

import StepCard from "./StepCard";

import styles from "./HowItWorks.module.css";

export default function HowItWorks() {
  const t = useTranslation();
   if (!t || !t.how) {
    return null; }

  return (
    <section
      id="how"
      className={styles.section}
    >
      <div className={styles.container}>
        <span className={styles.label}>
          {t.how.label}
        </span>

        <h2 className={styles.title}>
          {t.how.titleStart}{" "}
          <span>{t.how.highlight}</span>.
        </h2>

        <p className={styles.subtitle}>
          {t.how.subtitle}
        </p>

        <div className={styles.steps}>
          {t.how.steps.map(step => (
            <StepCard
              key={step.id}
              {...step}
            />
          ))}
        </div>
      </div>
    </section>
  );
}