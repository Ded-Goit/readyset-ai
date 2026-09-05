"use client";

import Image from "next/image";
import {
  Zap,
  Heart,
  BarChart3,
  Users,
  Check,
  ArrowRight,
  TrendingUp,
  Star,
} from "lucide-react";

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

  const planItems = [
    t.heroPlanItem1,
    t.heroPlanItem2,
    t.heroPlanItem3,
    t.heroPlanItem4,
  ];

  return (
    <section className={styles.hero}>
      <div className={styles.heroMain}>
        {/* LEFT CONTENT */}
        <div className={styles.content}>
          <FadeUp delay={0}>
            <div className={styles.badge}>{t.heroBadge}</div>
          </FadeUp>

          <FadeUp delay={0.15}>
            <h1 className={styles.title}>
              <span className={styles.titleOrange}>{t.heroTitle1}</span>{" "}
              {t.heroTitle2}
              <br />
              <span className={styles.titleOrange}>{t.heroTitleHighlight}</span>
              <br />
              {t.heroTitle3}
            </h1>
          </FadeUp>

          <FadeUp delay={0.3}>
            <p className={styles.subtitle}>
              {t.heroDescription} <span>{t.heroDescription2}</span>
            </p>
          </FadeUp>
        </div>

        {/* RIGHT VISUAL */}
        <FadeUp delay={0.25}>
          <div className={styles.visual}>
            <div className={styles.imageWrapper}>
              <Image
                src="/hero-team.png"
                alt="AI onboarding assistant"
                width={760}
                height={760}
                priority
                className={styles.image}
                sizes="(max-width: 767px) 100vw, (max-width: 1099px) 55vw, 760px"
              />

              {/* PROGRESS CARD */}
              <div className={`${styles.floatingCard} ${styles.progressCard}`}>
                <div className={styles.progressIcon}>
                  <TrendingUp size={30} strokeWidth={2} />
                </div>

                <div>
                  <div className={styles.cardLabel}>{t.heroProgressTitle}</div>

                  <div className={styles.progressValue}>
                    {t.heroProgressValue}
                  </div>

                  <div className={styles.progressChange}>
                    {t.heroProgressChange}
                  </div>
                </div>
              </div>

              {/* PERSONAL PLAN */}
              <div className={`${styles.floatingCard} ${styles.planCard}`}>
                <div className={styles.planTitle}>{t.heroPlanTitle}</div>

                <div className={styles.planList}>
                  {planItems.map((item, index) => (
                    <div className={styles.planItem} key={index}>
                      <span className={styles.checkIcon}>
                        <Check size={11} strokeWidth={3} />
                      </span>

                      <span>{item}</span>

                      <Check
                        className={styles.planCheck}
                        size={17}
                        strokeWidth={2.5}
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* NEXT STEP */}
              <div className={`${styles.floatingCard} ${styles.nextStepCard}`}>
                <div className={styles.nextStepHeader}>
                  <span>{t.heroNextStepTitle}</span>
                  <ArrowRight size={17} strokeWidth={2} />
                </div>

                <div className={styles.nextStepItems}>
                  <span>{t.heroNextStepItem1}</span>
                  <span>{t.heroNextStepItem2}</span>
                </div>
              </div>

              {/* GROWTH CARD */}
              <div className={`${styles.floatingCard} ${styles.growthCard}`}>
                <Star size={31} strokeWidth={1.8} />

                <div>
                  <div>{t.heroGrowthTitle}</div>
                  <span>{t.heroGrowthDescription}</span>
                </div>
              </div>
            </div>
          </div>
        </FadeUp>
      </div>

      {/* FEATURES */}
      <div className={styles.features}>
        {features.map((feature, index) => {
          const Icon = feature.icon;

          return (
            <FadeUp key={feature.id} delay={0.2 + index * 0.1}>
              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>
                  <Icon size={40} strokeWidth={1.7} />
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
