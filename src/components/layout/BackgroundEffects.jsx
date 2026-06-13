import styles from "./BackgroundEffects.module.css";

export default function BackgroundEffects() {
  return (
    <>
      <div
        className={`${styles.glow} ${styles.glow1}`}
      />
      <div
        className={`${styles.glow} ${styles.glow2}`}
      />
    </>
  );
}