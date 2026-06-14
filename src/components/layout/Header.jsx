"use client";

import { motion } from "framer-motion";

import styles from "./Header.module.css";

import Logo from "../ui/Logo";
import LanguageSwitcher from "../ui/LanguageSwitcher";

import { useTranslation } from "@/hooks/useTranslation";

export default function Header() {
  const t = useTranslation();

  if (!t) {
    return null;
  }

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
          {t.nav.problem}
        </a>

        <a href="#how">
          {t.nav.how}
        </a>

        <a href="#impact">
          {t.nav.impact}
        </a>

        <a href="#pilot">
          {t.nav.pilot}
        </a>
      </nav>

      <LanguageSwitcher />
    </motion.header>
  );
}