"use client";

import styles from "./Header.module.css";

import Logo from "../ui/Logo";
import LanguageSwitcher from "../ui/LanguageSwitcher";

export default function Header() {
  return (
    <header className={styles.header}>
      <Logo />

      <nav className={styles.nav}>
        <a href="#problem">Problem</a>
        <a href="#how">How it works</a>
        <a href="#impact">Impact</a>
      </nav>

      <LanguageSwitcher />
    </header>
  );
}