"use client";

import styles from "./Problem.module.css";
import ProblemCard from "./ProblemCard";
import { useTranslation } from "@/hooks/useTranslation";

export default function ProblemSection() {
  // Changed: get 't' directly, since the hook returns the translation object itself
  const t = useTranslation();

  // Check if the translation data is still loading or the structure is different
  if (!t || !t.problem) {
    return null; 
  }

  return (
    <section id="problem" className={styles.section}>
      <div className={styles.container}>
        <span className={styles.label}>
          {t.problem.label}
        </span>

        <h2 className={styles.title}>
          {t.problem.title1}
          <br />
          {t.problem.title2}
          <br />
          {t.problem.title3}
          <span> {" "} {t.problem.highlight} {" "} </span>
          {t.problem.title4}
        </h2>

        <p className={styles.subtitle}>
          {t.problem.subtitle}
        </p>

        <div className={styles.grid}>
          {/* Додано безпечний оператор ?. про всяк випадок */}
          {t.problem.cards?.map((card) => (
            <ProblemCard key={card.id} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
}