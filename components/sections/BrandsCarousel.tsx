"use client";

import { useRef, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { siteConfig } from "@/data/site.config";
import styles from "./BrandsCarousel.module.scss";

export function BrandsCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const updateScrollState = () => {
    const el = trackRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 4);
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 4);
  };

  useEffect(() => {
    updateScrollState();
    const el = trackRef.current;
    if (!el) return;
    el.addEventListener("scroll", updateScrollState, { passive: true });
    window.addEventListener("resize", updateScrollState);
    return () => {
      el.removeEventListener("scroll", updateScrollState);
      window.removeEventListener("resize", updateScrollState);
    };
  }, []);

  const scroll = (dir: "left" | "right") => {
    const el = trackRef.current;
    if (!el) return;
    const amount = el.clientWidth * 0.7;
    el.scrollBy({
      left: dir === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  return (
    <section className={styles.section} aria-labelledby="brands-heading">
      <div className={styles.container}>
        <p className={styles.eyebrow}>Trusted Partners</p>
        <h2 id="brands-heading" className={styles.title}>
          Brands We Work With
        </h2>
        <p className={styles.description}>
          We partner with the world&apos;s leading manufacturers to deliver
          reliable, high-quality solutions.
        </p>

        <div className={styles.carousel}>
          <button
            type="button"
            className={`${styles.navBtn} ${styles.navLeft}`}
            onClick={() => scroll("left")}
            disabled={!canScrollLeft}
            aria-label="Scroll brands left"
          >
            <ChevronLeft size={22} />
          </button>

          <div className={styles.track} ref={trackRef} role="list">
            {siteConfig.brands.map((brand) => (
              <div key={brand} className={styles.brandCard} role="listitem">
                <span className={styles.brandName}>{brand}</span>
              </div>
            ))}
          </div>

          <button
            type="button"
            className={`${styles.navBtn} ${styles.navRight}`}
            onClick={() => scroll("right")}
            disabled={!canScrollRight}
            aria-label="Scroll brands right"
          >
            <ChevronRight size={22} />
          </button>
        </div>
      </div>
    </section>
  );
}
