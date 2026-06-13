"use client";

import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.badge}>
        🏆 GoIT AI Hackathon 2026 — 1st place
      </div>

      <h1 className={styles.title}>
        Your new sales rep
        <br />
        shouldn&apos;t need
        <span> 6 weeks </span>
        <br />
         to become productive.
      </h1>

      <p className={styles.subtitle}>
        ReadySet.AI is an AI onboarding system for sales teams —
        from chaotic first weeks to measurable readiness.
        Faster ramp-up. Less mentor load. No surprises.
      </p>

      <div className={styles.actions}>
        <a href="#pilot" className={styles.primaryBtn}>
          Request free pilot →
        </a>

        <a href="#how" className={styles.secondaryBtn}>
          See how it works
        </a>
      </div>

      <div className={styles.stats}>
        <div className={styles.stat}>
          <span className={styles.statValue}>
            ↓50%
          </span>

          <span className={styles.statLabel}>
            time-to-productivity
          </span>
        </div>

        <div className={styles.stat}>
          <span className={styles.statValue}>
            ↓70%
          </span>

          <span className={styles.statLabel}>
            mentor load
          </span>
        </div>

        <div className={styles.stat}>
          <span className={styles.statValue}>
            $8.4K
          </span>

          <span className={styles.statLabel}>
            saved per team / year
          </span>
        </div>
      </div>
    </section>
  );
}