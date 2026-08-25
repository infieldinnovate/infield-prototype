"use client";

import {
  useEffect,
  useRef,
  useState,
  useMemo,
  type ReactNode,
} from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import {
  getStatsByCategory,
  type StatCategory,
  type ImpactStat,
} from "@/data/impactStats";
import styles from "./AnimatedStats.module.scss";

// ============================================
// AnimatedValue — count-up animation
// ============================================

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

// ============================================
// ScrollingRibbon — internal auto-scroll engine
// (merged from AutoScroll.tsx)
// ============================================

interface ScrollingRibbonProps {
  items: ReactNode[];
  speed?: number;
  direction?: "left" | "right";
  showNavButtons?: boolean;
  pauseOnHover?: boolean;
  className?: string;
  trackClassName?: string;
}

const DEFAULT_SPEED = 40;

function ScrollingRibbon({
  items,
  speed = DEFAULT_SPEED,
  direction = "left",
  showNavButtons = false,
  pauseOnHover = true,
  className,
  trackClassName,
}: ScrollingRibbonProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | null>(null);
  const offsetRef = useRef(0);
  const pausedRef = useRef(false);
  const lastTimeRef = useRef<number | null>(null);
  const singleSetWidthRef = useRef(0);

  const [paused, setPaused] = useState(false);
  const [ready, setReady] = useState(false);

  const displayItems = useMemo(() => {
    if (!items.length) return [];
    return [...items, ...items, ...items];
  }, [items]);

  useEffect(() => {
    const track = trackRef.current;
    const wrapper = wrapperRef.current;
    if (!track || !wrapper || !items.length) return;

    const measureTimer = setTimeout(() => {
      const singleSetWidth = track.scrollWidth / 3;
      singleSetWidthRef.current = singleSetWidth;
      if (singleSetWidth === 0) return;

      if (direction === "right") {
        offsetRef.current = singleSetWidth;
      } else {
        offsetRef.current = 0;
      }
      track.style.transform = `translateX(${-offsetRef.current}px)`;
      setReady(true);
    }, 50);

    return () => clearTimeout(measureTimer);
  }, [direction, items]);

  useEffect(() => {
    if (!ready) return;

    const track = trackRef.current;
    if (!track) return;

    const singleSetWidth = singleSetWidthRef.current;
    if (singleSetWidth === 0) return;

    const animate = (time: number) => {
      if (lastTimeRef.current === null) {
        lastTimeRef.current = time;
      }
      const delta = time - lastTimeRef.current;
      lastTimeRef.current = time;

      if (!pausedRef.current) {
        const pxPerMs = speed / 1000;
        offsetRef.current += pxPerMs * delta * (direction === "left" ? 1 : -1);

        if (direction === "left") {
          if (offsetRef.current >= singleSetWidth) {
            offsetRef.current -= singleSetWidth;
          }
        } else {
          if (offsetRef.current <= 0) {
            offsetRef.current += singleSetWidth;
          }
        }

        track.style.transform = `translateX(${-offsetRef.current}px)`;
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      lastTimeRef.current = null;
    };
  }, [speed, direction, ready]);

  const handleMouseEnter = () => {
    if (pauseOnHover) {
      pausedRef.current = true;
      setPaused(true);
    }
  };

  const handleMouseLeave = () => {
    if (pauseOnHover) {
      pausedRef.current = false;
      setPaused(false);
    }
  };

  const scrollByAmount = (dir: "left" | "right") => {
    const amount = 200;
    offsetRef.current += dir === "left" ? amount : -amount;
    if (trackRef.current) {
      trackRef.current.style.transform = `translateX(${-offsetRef.current}px)`;
    }
  };

  if (!items.length) return null;

  return (
    <div
      className={`${styles.ribbonWrapper} ${className ?? ""}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {showNavButtons && (
        <button
          type="button"
          className={`${styles.navBtn} ${styles.navLeft}`}
          onClick={() => scrollByAmount("left")}
          aria-label="Scroll left"
        >
          <ChevronLeft size={22} />
        </button>
      )}

      <div className={styles.carousel} ref={wrapperRef}>
        <div
          className={`${styles.track} ${paused ? styles.paused : ""} ${
            trackClassName ?? ""
          }`}
          ref={trackRef}
        >
          {displayItems.map((item, index) => (
            <div key={index} className={styles.trackItem}>
              {item}
            </div>
          ))}
        </div>
      </div>

      {showNavButtons && (
        <button
          type="button"
          className={`${styles.navBtn} ${styles.navRight}`}
          onClick={() => scrollByAmount("right")}
          aria-label="Scroll right"
        >
          <ChevronRight size={22} />
        </button>
      )}
    </div>
  );
}

// ============================================
// AnimatedStats — main exported component
// ============================================

interface AnimatedStatsProps {
  theme?: "dark" | "light";
  scroll?: boolean;
  category?: StatCategory;
  eyebrow?: string;
  title?: string;
  description?: string;
}

export function AnimatedStats({
  theme = "dark",
  scroll = false,
  category = "all",
  eyebrow,
  title,
  description,
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

  const renderStat = (stat: ImpactStat, i: number) => {
    const Icon = stat.icon;
    return (
      <div
        key={stat.label}
        className={`${styles.stat} ${scroll ? styles.statScroll : ""}`}
        style={{ transitionDelay: `${i * 120}ms` }}
        data-inview={inView}
      >
        <div className={styles.statIcon}>
          <Icon size={28} strokeWidth={1.8} />
        </div>
        <div className={styles.statContent}>
          <span className={styles.value}>
            <AnimatedValue value={stat.value} inView={inView} />
          </span>
          <span className={styles.label}>{stat.label}</span>
        </div>
      </div>
    );
  };

  const hasHeader = eyebrow || title || description;

  return (
    <section
      className={`${styles.section} ${styles[theme]}`}
      aria-label="Company statistics"
    >
      <div className={styles.container}>
        {hasHeader && !scroll && (
          <header className={styles.header}>
            {eyebrow && <span className={styles.eyebrow}>{eyebrow}</span>}
            {title && <h2 className={styles.title}>{title}</h2>}
            {description && (
              <p className={styles.description}>{description}</p>
            )}
          </header>
        )}

        <div ref={ref}>
          {scroll ? (
            <ScrollingRibbon
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

// Re-export for backward compatibility (BrandsCarousel, Footer)
export { ScrollingRibbon as AutoScroll };
