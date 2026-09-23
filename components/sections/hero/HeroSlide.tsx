"use client";

import { forwardRef } from "react";
import type { HeroSlideData } from "./slides";
import styles from "./HeroSlide.module.scss";
import { ImageWithFallback } from "@/components/ui/ImageWithFallback";

interface HeroSlideProps {
  slide: HeroSlideData;
  index: number;
  isActive: boolean;
  isReducedMotion: boolean;
  total: number;
}

const HeroSlide = forwardRef<HTMLDivElement, HeroSlideProps>(
  ({ slide, index, isActive, isReducedMotion, total }, ref) => {
    return (
      <div
        ref={ref}
        className={styles.slide}
        data-active={isActive}
        aria-hidden={!isActive}
        aria-roledescription="slide"
        aria-label={`${index + 1} of ${total}`}
      >
        <div className={styles.imageWrap}>
          <ImageWithFallback
            src={slide.image}
            alt={slide.imageAlt}
            fill
            className={`${styles.image} ${isActive && !isReducedMotion ? styles.imageAnimate : ""} ${isReducedMotion ? styles.imageReduced : ""}`}
            loading={index === 0 ? "eager" : "lazy"}
            priority={index === 0}
          />
          <div className={styles.gradient} />
          <div className={styles.gradientBottom} />
        </div>

        <div className={styles.content}>
          <div className={styles.contentInner}>
            <p className={styles.eyebrow}>{slide.eyebrow}</p>

            <h2 className={styles.title}>
              {slide.title.split("\n").map((line, i) => (
                <span key={i} className={styles.titleLine}>
                  {line}
                </span>
              ))}
            </h2>

            <p className={styles.description}>{slide.description}</p>

            <div className={styles.actions}>
              <a href={slide.primaryCta.href} className={styles.primaryBtn}>
                <span>{slide.primaryCta.label}</span>
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                  className={styles.btnArrow}
                >
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </a>

              {slide.secondaryCta && (
                <a
                  href={slide.secondaryCta.href}
                  className={styles.secondaryBtn}
                >
                  {slide.secondaryCta.label}
                </a>
              )}
            </div>
          </div>

          <div className={styles.panel}>
            <div className={styles.panelDotContainer}>
              <div className={styles.panelDot} />
              <span className={styles.panelLabel}>{slide.panelTitle}</span>
            </div>
            <span className={styles.panelMeta}>{slide.panelMeta}</span>
          </div>
        </div>
      </div>
    );
  },
);

HeroSlide.displayName = "HeroSlide";

export default HeroSlide;
