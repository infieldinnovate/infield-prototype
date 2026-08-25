"use client";

import {
  useEffect,
  useRef,
  useState,
  useMemo,
  type ReactNode,
} from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import styles from "./AutoScroll.module.scss";

interface AutoScrollProps {
  items: ReactNode[];
  speed?: number;
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
  showNavButtons = false,
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

export default AutoScroll;
