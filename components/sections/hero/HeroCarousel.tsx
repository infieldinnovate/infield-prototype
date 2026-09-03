"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { slides } from "./slides";
import HeroSlide from "./HeroSlide";
import styles from "./HeroCarousel.module.scss";

const AUTOPLAY_MS = 6500;
const DRAG_THRESHOLD = 60;

export default function HomeCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isReducedMotion, setIsReducedMotion] = useState(false);
  const [progressKey, setProgressKey] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);
  const [hasInteracted, setHasInteracted] = useState(false);

  const dragStartX = useRef<number | null>(null);
  const dragDelta = useRef(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const total = slides.length;

  /* ----- prefers-reduced-motion ----- */
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setIsReducedMotion(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  /* ----- navigation ----- */
  const goTo = useCallback(
    (index: number) => {
      const next = ((index % total) + total) % total;
      setActiveIndex(next);
      setProgressKey((k) => k + 1);
    },
    [total],
  );

  const next = useCallback(() => {
    goTo(activeIndex + 1);
    setHasInteracted(true);
  }, [activeIndex, goTo]);
  const prev = useCallback(() => {
    goTo(activeIndex - 1);
    setHasInteracted(true);
  }, [activeIndex, goTo]);

  /* ----- scrollSnaps ----- */
  useEffect(() => {
    setScrollSnaps(Array.from({ length: total }, (_, i) => i));
  }, [total]);

  /* ----- autoplay ----- */
  useEffect(() => {
    if (isPaused || isReducedMotion) return;

    const timer = setTimeout(() => {
      goTo(activeIndex + 1);
    }, AUTOPLAY_MS);

    return () => clearTimeout(timer);
  }, [activeIndex, isPaused, isReducedMotion, goTo]);

  /* ----- keyboard ----- */
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      const tag = (e.target as HTMLElement)?.tagName;
      if (tag === "INPUT" || tag === "TEXTAREA") return;

      if (e.key === "ArrowRight") {
        e.preventDefault();
        next();
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        prev();
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [next, prev]);

  /* ----- drag / swipe ----- */
  const onDragStart = useCallback((clientX: number) => {
    dragStartX.current = clientX;
    dragDelta.current = 0;
  }, []);

  const onDragMove = useCallback((clientX: number) => {
    if (dragStartX.current === null) return;
    dragDelta.current = clientX - dragStartX.current;
  }, []);

  const onDragEnd = useCallback(() => {
    if (Math.abs(dragDelta.current) > DRAG_THRESHOLD) {
      if (dragDelta.current < 0) {
        next();
      } else {
        prev();
      }
    }
    dragStartX.current = null;
    dragDelta.current = 0;
  }, [next, prev]);

  return (
    <section
      ref={containerRef}
      className={styles.hero}
      aria-roledescription="carousel"
      aria-label="Infield Innovations featured services"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => {
        setIsPaused(false);
        if (dragStartX.current !== null) onDragEnd();
      }}
      onFocusCapture={() => setIsPaused(true)}
      onBlurCapture={() => setIsPaused(false)}
      onTouchStart={(e) => onDragStart(e.touches[0].clientX)}
      onTouchMove={(e) => onDragMove(e.touches[0].clientX)}
      onTouchEnd={onDragEnd}
      onMouseDown={(e) => onDragStart(e.clientX)}
      onMouseMove={(e) => {
        if (dragStartX.current !== null) onDragMove(e.clientX);
      }}
      onMouseUp={onDragEnd}
    >
      {slides.map((slide, i) => (
        <HeroSlide
          key={slide.id}
          slide={slide}
          index={i}
          isActive={i === activeIndex}
          isReducedMotion={isReducedMotion}
          total={total}
        />
      ))}

      {/* ---------- Controls overlay ---------- */}
      <div className={styles.controls}>
        <div className={styles.counterRow}>
          <div className={styles.progressTrack}>
            <div
              key={progressKey}
              className={styles.progressBar}
              style={{
                animationDuration: `${AUTOPLAY_MS}ms`,
                animationPlayState: isPaused ? "paused" : "running",
              }}
            />
          </div>

          {/* Dot indicators */}
          <div className={styles.dots}>
            {scrollSnaps.map((_, idx) => (
              <button
                key={idx}
                type="button"
                className={`${styles.dot} ${idx === activeIndex ? styles.dotActive : ""}`}
                onClick={() => {
                  goTo(idx);
                  setHasInteracted(true);
                }}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

          <div className={styles.arrows}>
            <button
              type="button"
              className={styles.arrowBtn}
              onClick={prev}
              aria-label="Previous slide"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>
            <button
              type="button"
              className={styles.arrowBtn}
              onClick={next}
              aria-label="Next slide"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
