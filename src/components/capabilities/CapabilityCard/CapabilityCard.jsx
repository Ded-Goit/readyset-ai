"use client";

import styles from "./CapabilityCard.module.css";
import FadeUp from "@/components/shared/FadeUp";

export default function CapabilityCard({
  id,
  icon: Icon,
  title,
  description,
  delay = 0,
}) {
  return (
    <FadeUp delay={delay}>
      {" "}
      <article className={styles.card}>
        {" "}
        <div className={styles.cardTop}>
          {" "}
          <div className={styles.icon}>
            {" "}
            <Icon size={58} strokeWidth={1.5} />{" "}
          </div>
          <span className={styles.number}>{id}</span>
        </div>
        <h3>{title}</h3>
        <p>{description}</p>
        <span className={`${styles.corner} ${styles.bottomRight}`}>+</span>
      </article>
    </FadeUp>
  );
}
