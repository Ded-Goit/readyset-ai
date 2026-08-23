"use client";

import Image from "next/image";
import { Zap, Heart, BarChart3, Users } from "lucide-react";

import styles from "./Hero.module.css";

import { useTranslation } from "@/hooks/useTranslation";
import FadeUp from "@/components/shared/FadeUp";

export default function Hero() {
  const t = useTranslation();

  if (!t) {
    return null;
  }

  const features = [
    {
      id: "feature-1",
      icon: Zap,
      title: t.heroFeature1Title,
      description: t.heroFeature1Description,
    },
    {
      id: "feature-2",
      icon: Users,
      title: t.heroFeature2Title,
      description: t.heroFeature2Description,
    },
    {
      id: "feature-3",
      icon: BarChart3,
      title: t.heroFeature3Title,
      description: t.heroFeature3Description,
    },
    {
      id: "feature-4",
      icon: Heart,
      title: t.heroFeature4Title,
      description: t.heroFeature4Description,
    },
  ];

  return (
    <section className={styles.hero}>
      <div className={styles.heroMain}>
        <div className={styles.content}>
          <FadeUp delay={0}>
            <div className={styles.badge}>{t.heroBadge}</div>
          </FadeUp>

          <FadeUp delay={0.2}>
            <h1 className={styles.title}>
              {t.heroTitle1}
              <br />
              {t.heroTitle2}
              <span> {t.heroTitleHighlight} </span>
              <br />
              {t.heroTitle3}
            </h1>
          </FadeUp>

          <FadeUp delay={0.4}>
            <p className={styles.subtitle}>
              {t.heroDescription}
              <span> {t.heroDescription2} </span>
            </p>
          </FadeUp>
        </div>

        <FadeUp delay={0.3}>
          <div className={styles.visual}>
            <div className={styles.imageWrapper}>
              <Image
                src="/hero-team.png"
                alt="Hero illustration"
                width={620}
                height={620}
                priority
                className={styles.image}
                sizes="(max-width: 767px) 90vw, (max-width: 1099px) 45vw, 620px"
              />
            </div>
          </div>
        </FadeUp>
      </div>

      <div className={styles.features}>
        {features.map((feature, index) => {
          const Icon = feature.icon;

          return (
            <FadeUp key={feature.id} delay={0.2 + index * 0.1}>
              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>
                  <Icon size={32} strokeWidth={1.8} />
                </div>

                <div className={styles.featureContent}>
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </div>
              </div>
            </FadeUp>
          );
        })}
      </div>
    </section>
  );
}
