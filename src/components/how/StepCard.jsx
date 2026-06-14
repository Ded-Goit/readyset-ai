import styles from "./HowItWorks.module.css";

export default function StepCard({
  id,
  title,
  description,
  featured,
}) {
  return (
    <article
      className={`${styles.step} ${
        featured ? styles.featured : ""
      }`}
    >
      <div className={styles.number}>
        {id}
      </div>

      <div>
        <h3 className={styles.stepTitle}>
          {title}
        </h3>

        <p className={styles.stepDescription}>
          {description}
        </p>
      </div>
    </article>
  );
}