"use client";

import { useEffect, useRef, useState } from "react";
import { COMMON_IMPACT_STATS } from "@/data/impactStats";
import styles from "./AnimatedStats.module.scss";

function AnimatedValue({ value, inView }: { value: string; inView: boolean }) {
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    if (!inView) return;
    const match = value.match(/^([\d,.]+)(.*)$/);
    if (!match) {
      setDisplay(value);
      return;
    }
    const numericStr = match[1].replace(/,/g, "");
    const suffix = match[2];
    const targetNum = parseFloat(numericStr);
    if (isNaN(targetNum)) {
      setDisplay(value);
      return;
    }

    const duration = 1600;
    const startTime = performance.now();

    let rafId: number;
    const tick = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const v = targetNum * eased;
      const formatted =
        targetNum >= 1000
          ? Math.round(v).toLocaleString()
          : Number.isInteger(targetNum)
            ? Math.round(v).toString()
            : v.toFixed(1);
      setDisplay(formatted + suffix);
      if (progress < 1) {
        rafId = requestAnimationFrame(tick);
      }
    };
    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, [inView, value]);

  return <>{display}</>;
}

export function AnimatedStats() {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className={styles.section} aria-label="Company statistics">
      <div className={styles.container}>
        <div className={styles.grid} ref={ref}>
          {Object.values(COMMON_IMPACT_STATS).map((stat, i) => (
            <div
              key={stat.label}
              className={styles.stat}
              style={{ transitionDelay: `${i * 120}ms` }}
              data-inview={inView}
            >
              <span className={styles.value}>
                <AnimatedValue value={stat.value} inView={inView} />
              </span>

              <span className={styles.label}>{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
