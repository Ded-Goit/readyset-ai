import styles from "./Impact.module.css";

export default function MetricCard({
  value,
  title,
  description,
}) {
  return (
    <article className={styles.metric}>
      <span className={styles.metricValue}>
        {value}
      </span>

      <h3 className={styles.metricTitle}>
        {title}
      </h3>

      <p className={styles.metricDescription}>
        {description}
      </p>
    </article>
  );
}