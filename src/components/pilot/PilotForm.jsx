"use client";

import { useState } from "react";

import { useTranslation } from "@/hooks/useTranslation";

import styles from "./Pilot.module.css";

export default function PilotForm() {
  const t = useTranslation();

  const [email, setEmail] = useState("");

  const [success, setSuccess] =
    useState(false);

  const handleSubmit = e => {
    e.preventDefault();

    if (!email.includes("@")) {
      return;
    }

    setSuccess(true);

    setEmail("");

    setTimeout(() => {
      setSuccess(false);
    }, 4000);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={styles.form}
    >
      <input
        type="email"
        value={email}
        placeholder={
          t.pilot.placeholder
        }
        onChange={e =>
          setEmail(e.target.value)
        }
      />

      <button type="submit">
        {success
          ? t.pilot.success
          : t.pilot.button}
      </button>
    </form>
  );
}