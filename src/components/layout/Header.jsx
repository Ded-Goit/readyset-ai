"use client";

import styles from "./Header.module.css";

import Logo from "../ui/Logo";
import LanguageSwitcher from "../ui/LanguageSwitcher";

import { useLanguage } from "@/hooks/useLanguage";
import { translations } from "@/data/translations";

export default function Header() {
  const { lang } = useLanguage();

  const t = translations[lang];

  return (
    <header className={styles.header}>
      <Logo />

      <nav className={styles.nav}>
        <a href="#problem">
          {t.problem}
        </a>

        <a href="#how">
          {t.how}
        </a>

        <a href="#impact">
          {t.impact}
        </a>
      </nav>

      <LanguageSwitcher />
    </header>
  );
}