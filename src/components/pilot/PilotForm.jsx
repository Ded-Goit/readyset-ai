"use client";

import { useState } from "react";
import { useTranslation } from "@/hooks/useTranslation";

import styles from "./Pilot.module.css";

export default function PilotForm() {
  const t = useTranslation();
  const [errors, setErrors] = useState({});
  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = t.pilot.errors.nameRequired;
    }

    if (!formData.email.trim()) {
      newErrors.email = t.pilot.errors.emailRequired;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = t.pilot.errors.emailInvalid;
    }

    if (formData.phone && !/^[+\d\s()-]{7,20}$/.test(formData.phone)) {
      newErrors.phone = t.pilot.errors.phoneInvalid;
    }

    if (!formData.role.trim()) {
      newErrors.role = t.pilot.errors.roleRequired;
    } else if (formData.role.length > 25) {
      newErrors.role = t.pilot.errors.roleTooLong;
    }

    if (!formData.message.trim()) {
      newErrors.message = t.pilot.errors.messageRequired;
    } else if (formData.message.length < 10) {
      newErrors.message = t.pilot.errors.messageShort;
    } else if (formData.message.length > 250) {
      newErrors.message = t.pilot.errors.messageTooLong;
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    role: "",
    message: "",
  });

  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    const response = await fetch("/api/pilot", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json();

    if (data.success) {
      setSuccess(true);

      setFormData({
        name: "",
        email: "",
        phone: "",
        role: "",
        message: "",
      });

      setTimeout(() => {
        setSuccess(false);
      }, 4000);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <input
        type="text"
        name="name"
        placeholder={t.pilot.namePlaceholder}
        value={formData.name}
        onChange={handleChange}
        required
        className={errors.email ? styles.inputError : ""}
      />
      {errors.email && <p className={styles.error}>{errors.email}</p>}

      <input
        type="email"
        name="email"
        placeholder={t.pilot.emailPlaceholder}
        value={formData.email}
        onChange={handleChange}
        required
      />
      {errors.email && <p className={styles.error}>{errors.email}</p>}

      <input
        type="tel"
        name="phone"
        placeholder={t.pilot.phonePlaceholder}
        value={formData.phone}
        onChange={handleChange}
        className={errors.phone ? styles.inputError : ""}
      />
      {errors.phone && <p className={styles.error}>{errors.phone}</p>}

      <input
        type="text"
        name="role"
        maxLength={25}
        value={formData.role}
        placeholder={t.pilot.rolePlaceholder}
        onChange={handleChange}
        className={errors.role ? styles.inputError : ""}
      />

      {errors.role && <p className={styles.error}>{errors.role}</p>}

      <div className={styles.counter}>{formData.role.length}/25</div>

      <textarea
        name="message"
        rows={5}
        maxLength={250}
        value={formData.message}
        placeholder={t.pilot.messagePlaceholder}
        onChange={handleChange}
        className={errors.message ? styles.inputError : ""}
      />
      {errors.message && <p className={styles.error}>{errors.message}</p>}

      <div className={styles.counter}>{formData.message.length}/250</div>

      <button type="submit">
        {success ? t.pilot.success : t.pilot.button}
      </button>
    </form>
  );
}
