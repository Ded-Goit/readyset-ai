"use client";

import { useTranslation } from "@/hooks/useTranslation";
import MetricCard from "./MetricCard";
import FadeIn from "@/components/shared/FadeIn";
import styles from "./Impact.module.css";

export default function ImpactSection() {
  const t = useTranslation();

  return (
    <section id="impact" className="section">
      <div className="container">
        <FadeIn>
          <span className="label">{t.impact.label}</span>
        </FadeIn>

        <FadeIn delay={0.1}>
          <h2 className="sectionTitle">
            {t.impact.titleStart} <span>{t.impact.highlight}</span>
          </h2>
        </FadeIn>

        <FadeIn delay={0.2}>
          <p className="sectionSubtitle">{t.impact.subtitle}</p>
        </FadeIn>

        <div className={styles.metrics}>
          {t.impact.metrics.map((metric, index) => (
            <FadeIn key={metric.title} delay={index * 0.15}>
              <MetricCard {...metric} />
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.3}>
          <div className={styles.quote}>
            <p>{t.impact.quote}</p>

            <small>{t.impact.source}</small>
          </div>
        </FadeIn>

        <FadeIn delay={0.4}>
          <div className={styles.roi}>
            <p>{t.impact.roiText}</p>

            <strong>{t.impact.roiValue}</strong>

            <p>{t.impact.roiResult}</p>

            <span>{t.impact.roiSaved}</span>
          </div>
        </FadeIn>
        <FadeIn delay={0.5}>
          <div className={styles.actions}>
            <a
              href={t.impact.ctaLink}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.button}
            >
              {t.impact.cta}
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
