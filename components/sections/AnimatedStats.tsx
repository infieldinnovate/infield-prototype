"use client";

import { useEffect, useRef, useState } from "react";
import {
  getStatsByCategory,
  type StatCategory,
  type ImpactStat,
} from "@/data/impactStats";
import { AutoScroll } from "@/components/ui/AutoScroll";
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

interface AnimatedStatsProps {
  theme?: "dark" | "light";
  scroll?: boolean;
  category?: StatCategory;
}

export function AnimatedStats({
  theme = "dark",
  scroll = true,
  category = "all",
}: AnimatedStatsProps) {
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

  const stats = getStatsByCategory(category);

  const renderStat = (stat: ImpactStat, i: number) => (
    <div
      key={stat.label}
      className={`${styles.stat} ${scroll ? styles.statScroll : ""}`}
      style={{ transitionDelay: `${i * 120}ms` }}
      data-inview={inView}
    >
      <span className={styles.value}>
        <AnimatedValue value={stat.value} inView={inView} />
      </span>
      <span className={styles.label}>{stat.label}</span>
    </div>
  );

  return (
    <section
      className={`${styles.section} ${styles[theme]}`}
      aria-label="Company statistics"
    >
      <div className={styles.container}>
        <div ref={ref}>
          {scroll ? (
            <AutoScroll
              items={stats.map((stat, i) => renderStat(stat, i))}
              showNavButtons={false}
              pauseOnHover={true}
            />
          ) : (
            <div className={styles.grid}>
              {stats.map((stat, i) => renderStat(stat, i))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
