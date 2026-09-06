"use client";

import Image from "next/image";
import {
  Target,
  BookOpen,
  ChartNoAxesCombined,
  Users,
  Rocket,
} from "lucide-react";

import styles from "./Capabilities.module.css";

import { useTranslation } from "@/hooks/useTranslation";
import FadeUp from "@/components/shared/FadeUp";

export default function Capabilities() {
  const t = useTranslation();

  if (!t) {
    return null;
  }

  const capabilities = [
    {
      id: "01",
      icon: Target,
      title: t.capability1Title,
      description: t.capability1Description,
    },
    {
      id: "02",
      icon: BookOpen,
      title: t.capability2Title,
      description: t.capability2Description,
    },
    {
      id: "03",
      icon: ChartNoAxesCombined,
      title: t.capability3Title,
      description: t.capability3Description,
    },
    {
      id: "04",
      icon: Users,
      title: t.capability4Title,
      description: t.capability4Description,
    },
  ];

  return (
    <section className="section">
      <div className="container">
        <div className={styles.left}>
          <FadeUp delay={0}>
            <div className={styles.badge}>{t.capabilitiesBadge}</div>
          </FadeUp>

          <FadeUp delay={0.1}>
            <h2 className={styles.title}>
              {t.capabilitiesTitle1}
              <br />
              <span>{t.capabilitiesTitle2}</span>
            </h2>
          </FadeUp>

          <FadeUp delay={0.2}>
            <p className={styles.description}>
              {t.capabilitiesDescription1}{" "}
              <span>{t.capabilitiesHighlight1}</span>{" "}
              {t.capabilitiesDescription2}{" "}
              <span>{t.capabilitiesHighlight2}</span>.
            </p>
          </FadeUp>

          <FadeUp delay={0.3}>
            <div className={styles.visual}>
              <Image
                src="/capabilities-team.png"
                alt="AI onboarding collaboration"
                width={760}
                height={620}
                priority
                className={styles.image}
                sizes="(max-width: 767px) 100vw, (max-width: 1099px) 48vw, 760px"
              />

              <div className={styles.resultCard}>
                <div className={styles.resultTitle}>
                  {t.capabilitiesResultTitle}
                </div>

                <ol>
                  <li>{t.capabilitiesResult1}</li>
                  <li>{t.capabilitiesResult2}</li>
                  <li>{t.capabilitiesResult3}</li>
                  <li>{t.capabilitiesResult4}</li>
                  <li>{t.capabilitiesResult5}</li>
                </ol>

                <div className={styles.resultValue}>
                  {t.capabilitiesResultValue}
                </div>
              </div>
            </div>
          </FadeUp>
        </div>

        <div className={styles.grid}>
          {capabilities.map((item, index) => {
            const Icon = item.icon;

            return (
              <FadeUp key={item.id} delay={0.1 + index * 0.1}>
                <article className={styles.card}>
                  <div className={styles.cardTop}>
                    <div className={styles.icon}>
                      <Icon size={58} strokeWidth={1.5} />
                    </div>

                    <span className={styles.number}>{item.id}</span>
                  </div>

                  <h3>{item.title}</h3>

                  <p>{item.description}</p>

                  <span className={`${styles.corner} ${styles.topRight}`}>
                    +
                  </span>

                  <span className={`${styles.corner} ${styles.bottomRight}`}>
                    +
                  </span>
                </article>
              </FadeUp>
            );
          })}
        </div>

        <FadeUp delay={0.2}>
          <div className={styles.bottomCard}>
            <div className={styles.bottomIcon}>
              <Rocket size={54} strokeWidth={1.5} />
            </div>

            <div>
              <h3>
                {t.capabilitiesBottomTitle}{" "}
                <span>{t.capabilitiesBottomHighlight}</span>
              </h3>

              <p>{t.capabilitiesBottomDescription}</p>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
