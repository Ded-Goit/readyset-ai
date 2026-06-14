"use client";

import { motion } from "framer-motion";

import styles from "./Header.module.css";

import Logo from "../ui/Logo";
import LanguageSwitcher from "../ui/LanguageSwitcher";

import { useLanguage } from "@/hooks/useLanguage";
import { translations } from "@/data/translations";

export default function Header() {
  const { lang } = useLanguage();

  const t = translations[lang];

  return (
    <motion.header
      className={styles.header}
      initial={{
        y: -80,
        opacity: 0,
      }}
      animate={{
        y: 0,
        opacity: 1,
      }}
      transition={{
        duration: 0.6,
      }}
    >
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
    </motion.header>
  );
}