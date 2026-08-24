"use client";

import {
  useRef,
  useEffect,
  useState,
  useMemo,
  type ReactNode,
} from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import styles from "./AutoScroll.module.scss";

interface AutoScrollProps {
  items: ReactNode[];
  speed?: number; // pixels per second
  direction?: "left" | "right";
  showNavButtons?: boolean;
  pauseOnHover?: boolean;
  className?: string;
  trackClassName?: string;
}

const DEFAULT_SPEED = 40;

export function AutoScroll({
  items,
  speed = DEFAULT_SPEED,
  direction = "left",
  showNavButtons = true,
  pauseOnHover = true,
  className,
  trackClassName,
}: AutoScrollProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | null>(null);
  const offsetRef = useRef(0);
  const pausedRef = useRef(false);
  const lastTimeRef = useRef<number | null>(null);

  const [paused, setPaused] = useState(false);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  // Duplicate items enough times to fill the viewport so the loop is seamless
  const displayItems = useMemo(() => {
    if (!items.length) return [];
    // 3 copies is enough for smooth looping in most cases
    return [...items, ...items, ...items];
  }, [items]);

  const contentWidth = useMemo(() => {
    if (!trackRef.current) return 0;
    // Width of one set of items (including gap between items)
    const total = trackRef.current.scrollWidth;
    return total / 3;
  }, [displayItems]);

  useEffect(() => {
    const track = trackRef.current;
    const wrapper = wrapperRef.current;
    if (!track || !wrapper) return;

    // Measure one set width
    const singleSetWidth = track.scrollWidth / 3;
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

        // Loop: when we've scrolled past one set, reset by one set width
        if (direction === "left") {
          if (offsetRef.current >= singleSetWidth) {
            offsetRef.current -= singleSetWidth;
          }
        } else {
          if (offsetRef.current <= -singleSetWidth) {
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
  }, [speed, direction, contentWidth]);

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

  return (
    <div
      className={`${styles.wrapper} ${className ?? ""}`}
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
            <div key={index} className={styles.item}>
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
