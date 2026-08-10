'use client';

import { useEffect, useRef, useState } from 'react';
import { stats } from '@/data/site.config';
import styles from './AnimatedStats.module.scss';

function animateNumber(target: string, duration: number, isInView: boolean): string {
  if (!isInView) return '0';
  const match = target.match(/^([\d,.]+)(.*)$/);
  if (!match) return target;
  const numericStr = match[1].replace(/,/g, '');
  const suffix = match[2];
  const targetNum = parseFloat(numericStr);
  if (isNaN(targetNum)) return target;

  const startTime = performance.now();
  let current = '0';

  const step = (now: number) => {
    const elapsed = now - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    const value = targetNum * eased;
    current = targetNum >= 1000
      ? Math.round(value).toLocaleString()
      : Number.isInteger(targetNum)
        ? Math.round(value).toString()
        : value.toFixed(1);
    return current + suffix;
  };

  return step(performance.now());
}

function AnimatedValue({ value, inView }: { value: string; inView: boolean }) {
  const [display, setDisplay] = useState('0');

  useEffect(() => {
    if (!inView) return;
    const match = value.match(/^([\d,.]+)(.*)$/);
    if (!match) {
      setDisplay(value);
      return;
    }
    const numericStr = match[1].replace(/,/g, '');
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
      const formatted = targetNum >= 1000
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
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className={styles.section} aria-label="Company statistics">
      <div className={styles.container}>
        <div className={styles.grid} ref={ref}>
          {stats.map((stat, i) => (
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
