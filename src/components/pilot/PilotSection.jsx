"use client";

import { useTranslation } from "@/hooks/useTranslation";
import PilotForm from "./PilotForm";
import FadeIn from "@/components/shared/FadeIn";
import styles from "./Pilot.module.css";

export default function PilotSection() {
  const t = useTranslation();

  return (
    <section
      id="pilot"
      className={styles.section}
    >
      <FadeIn>
        <div className={styles.card}>
          <FadeIn delay={0.1}>
            <span className={styles.tag}>
              {t.pilot.tag}
            </span>
          </FadeIn>

          <FadeIn delay={0.2}>
            <h2 className={styles.title}>
              {t.pilot.titleStart}
              <br />

              <span>
                {t.pilot.titleHighlight}
              </span>
            </h2>
          </FadeIn>

          <FadeIn delay={0.3}>
            <p
              className={styles.description}
            >
              {t.pilot.description}
            </p>
          </FadeIn>

          <div className={styles.perks}>
            {t.pilot.perks.map(
              (perk, index) => (
                <FadeIn
                  key={perk}
                  delay={index * 0.15}
                >
                  <div
                    className={styles.perk}
                  >
                    {perk}
                  </div>
                </FadeIn>
              )
            )}
          </div>

          <FadeIn delay={0.5}>
            <PilotForm />
          </FadeIn>

          <FadeIn delay={0.6}>
            <p className={styles.note}>
              {t.pilot.note}
            </p>
          </FadeIn>
        </div>
      </FadeIn>
    </section>
  );
}