"use client";

import {
  FaLinkedinIn,
  FaInstagram,
  FaFacebookF,
  FaEnvelope,
} from "react-icons/fa";

import { useTranslation } from "@/hooks/useTranslation";

import styles from "./SocialsSection.module.css";

export default function SocialsSection() {
  const t = useTranslation();

  if (!t) return null;

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <p className={styles.text}>{t.socials.title}</p>

        <div className={styles.links}>
          <a
            href="https://www.linkedin.com/company/readyset-ai-platform/posts/?feedView=all"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedinIn />
          </a>

          <a
            href="https://www.instagram.com/readyset.ai?igsh=cDNnZ2xkaGE2MGQ3"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>

          <a
            href="https://www.facebook.com/readyset.ai.platform"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <FaFacebookF />
          </a>
          <a
            href="mailto:readysetai.4.0@gmail.com"
            aria-label="Email"
            title="readysetai.4.0@gmail.com"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>
    </section>
  );
}
