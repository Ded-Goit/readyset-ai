/*"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Logo() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: -20,
      }}
      animate={{
        opacity: 1,
        x: 0,
      }}
      transition={{
        duration: 0.5,
      }}
    >
      <Link href="/">
        <strong>
          ReadySet
          <span>.AI</span>
        </strong>
      </Link>
    </motion.div>
  );
}*/
import Link from "next/link";
import Image from "next/image";

import styles from "./Logo.module.css";

export default function Logo() {
  return (
    <Link
      href="/"
      className={styles.logo}
    >
      <Image
        src="/logo.svg"
        alt="ReadySet AI"
        width={40}
        height={40}
        priority
      />

      <span className={styles.text}>
        <span className={styles.ready}>
          Ready
        </span>

        <span className={styles.set}>
          Set
        </span>

        <span className={styles.dot}>
          .
        </span>

        <span className={styles.ai}>
          AI
        </span>
      </span>
    </Link>
  );
}