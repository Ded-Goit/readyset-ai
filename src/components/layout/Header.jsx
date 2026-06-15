"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

import styles from "./Header.module.css";

import Logo from "../ui/Logo";
import LanguageSwitcher from "../ui/LanguageSwitcher";

import { useTranslation } from "@/hooks/useTranslation";

export default function Header() {
  const t = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  if (!t) return null;

  const closeMenu = () => setIsOpen(false);

  return (
    <motion.header
      className={styles.header}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className={styles.inner}>
        <Logo />

        <nav className={styles.nav}>
          <a href="#problem">{t.nav.problem}</a>
          <a href="#how">{t.nav.how}</a>
          <a href="#impact">{t.nav.impact}</a>
          <a href="#pilot">{t.nav.pilot}</a>
        </nav>

        <div className={styles.actions}>
          <LanguageSwitcher />

          <a
            href="#pilot"
            className={styles.cta}
          >
            {t.pilotButton}
          </a>

          <button
            type="button"
            className={styles.burger}
            onClick={() => setIsOpen(prev => !prev)}
            aria-label={
              isOpen
                ? "Close menu"
                : "Open menu"
            }
            aria-expanded={isOpen}
          >
            {isOpen ? (
              <X size={20} />
            ) : (
              <Menu size={20} />
            )}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className={styles.mobileMenu}
            initial={{
              opacity: 0,
              y: -10,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -10,
            }}
            transition={{
              duration: 0.25,
            }}
          >
            <a
              href="#problem"
              onClick={closeMenu}
            >
              {t.nav.problem}
            </a>

            <a
              href="#how"
              onClick={closeMenu}
            >
              {t.nav.how}
            </a>

            <a
              href="#impact"
              onClick={closeMenu}
            >
              {t.nav.impact}
            </a>

            <a
              href="#pilot"
              onClick={closeMenu}
            >
              {t.nav.pilot}
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
