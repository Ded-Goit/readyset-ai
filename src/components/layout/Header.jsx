"use client";

import { useState } from "react";

import styles from "./Header.module.css";

import Logo from "../ui/Logo";
import LanguageSwitcher from "../ui/LanguageSwitcher";

import { useLanguage } from "@/hooks/useLanguage";
import { translations } from "@/data/translations";

export default function Header() {
  const { lang } = useLanguage();

  const t = translations[lang];

  const [isOpen, setIsOpen] =
    useState(false);

  const closeMenu = () =>
    setIsOpen(false);

  return (
    <header className={styles.header}>
      <Logo />

      {/* Desktop */}
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

        <a href="#pilot">
          {t.pilot}
        </a>
      </nav>

      <div className={styles.actions}>
        <LanguageSwitcher />

        <button
          className={styles.burger}
          onClick={() =>
            setIsOpen(!isOpen)
          }
          aria-label="Menu"
        >
          ☰
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className={styles.mobileMenu}>
          <a
            href="#problem"
            onClick={closeMenu}
          >
            {t.problem}
          </a>

          <a
            href="#how"
            onClick={closeMenu}
          >
            {t.how}
          </a>

          <a
            href="#impact"
            onClick={closeMenu}
          >
            {t.impact}
          </a>

          <a
            href="#pilot"
            onClick={closeMenu}
          >
            {t.pilot}
          </a>
        </div>
      )}
    </header>
  );
}