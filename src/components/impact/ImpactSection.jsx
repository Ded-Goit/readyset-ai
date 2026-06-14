"use client";

import { useTranslation } from "@/hooks/useTranslation";

import MetricCard from "./MetricCard";

import styles from "./Impact.module.css";

export default function ImpactSection() {
  const t = useTranslation();

  return (
    <section
      id="impact"
      className={styles.section}
    >
      <div className={styles.container}>
        <span className={styles.label}>
          {t.impact.label}
        </span>

        <h2 className={styles.title}>
          {t.impact.titleStart}{" "}
          <span>{t.impact.highlight}</span>.
        </h2>

        <p className={styles.subtitle}>
          {t.impact.subtitle}
        </p>

        <div className={styles.metrics}>
          {t.impact.metrics.map(metric => (
            <MetricCard
              key={metric.title}
              {...metric}
            />
          ))}
        </div>

        <div className={styles.roi}>
          <p>
            {t.impact.roiText}
          </p>

          <strong>
            {t.impact.roiValue}
          </strong>

          <p>
            {t.impact.roiResult}
          </p>

          <span>
            {t.impact.roiSaved}
          </span>
        </div>

        <div className={styles.quote}>
          <p>{t.impact.quote}</p>

          <small>
            {t.impact.source}
          </small>
        </div>
      </div>
    </section>
  );
}