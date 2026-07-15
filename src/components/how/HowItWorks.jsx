"use client";

import { useTranslation } from "@/hooks/useTranslation";
import StepCard from "./StepCard";
import styles from "./HowItWorks.module.css";
import FadeIn from "@/components/shared/FadeIn";

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
          <span>{t.how.highlight}</span>
        </h2>

        <p className={styles.subtitle}>
          {t.how.subtitle}
        </p>

        <div className={styles.steps}>
         {t.how.steps.map((step, index) => (
           <FadeIn
         key={step.id}
             delay={index * 0.1}
         >
             <StepCard {...step} />
         </FadeIn>
         ))}        
         </div>
      </div>
    </section>
  );
}