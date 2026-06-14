import styles from "./Problem.module.css";

export default function ProblemCard({
  id,
  title,
  description,
}) {
  return (
    <article className={styles.card}>
      <div className={styles.number}>
        {id} ——
      </div>

      <h3 className={styles.cardTitle}>
        {title}
      </h3>

      <p className={styles.cardDescription}>
        {description}
      </p>
    </article>
  );
}