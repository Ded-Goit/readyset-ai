import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>© 2026 ReadySet.AI</p>

      <span>🏆 GoIT AI Solutions Hackathon</span>

      <small>
        Crafted by{" "}
        <a
          href="https://personal-assistant-weld.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          DED Production
        </a>
      </small>
    </footer>
  );
}
