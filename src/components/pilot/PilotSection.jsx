"use client";

import { useTranslation } from "@/hooks/useTranslation";

import PilotForm from "./PilotForm";

import styles from "./Pilot.module.css";

export default function PilotSection() {
  const t = useTranslation();

  return (
    <section
      id="pilot"
      className={styles.section}
    >
      <div className={styles.card}>
        <span className={styles.tag}>
          {t.pilot.tag}
        </span>

        <h2 className={styles.title}>
          {t.pilot.titleStart}
          <br />

          <span>
            {t.pilot.titleHighlight}
          </span>
        </h2>

        <p className={styles.description}>
          {t.pilot.description}
        </p>

        <div className={styles.perks}>
          {t.pilot.perks.map(perk => (
            <div
              key={perk}
              className={styles.perk}
            >
              {perk}
            </div>
          ))}
        </div>

        <PilotForm />

        <p className={styles.note}>
          {t.pilot.note}
        </p>
      </div>
    </section>
  );
}