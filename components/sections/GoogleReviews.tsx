"use client";

import { useRef, useEffect, useState } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { testimonials, reviewSummary } from "@/data/testimonials";
import { ImageWithFallback } from "@/components/ui/ImageWithFallback";
import styles from "./GoogleReviews.module.scss";

export function GoogleReviews() {
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
    const cardWidth =
      el.querySelector("[data-card]")?.getBoundingClientRect().width ?? 320;
    el.scrollBy({
      left: dir === "left" ? -(cardWidth + 24) : cardWidth + 24,
      behavior: "smooth",
    });
  };

  return (
    <section className={styles.section} aria-labelledby="reviews-heading">
      <div className={styles.container}>
        <div className={styles.header}>
          <div>
            <p className={styles.eyebrow}>Customer Voices</p>
            <h2 id="reviews-heading" className={styles.title}>
              Google Reviews
            </h2>
          </div>
          <div className={styles.summary}>
            <div className={styles.ratingWrap}>
              <span className={styles.ratingValue}>
                {reviewSummary.averageRating}
              </span>
              <div className={styles.stars}>
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className={
                      i < Math.round(reviewSummary.averageRating)
                        ? styles.starFilled
                        : styles.starEmpty
                    }
                  />
                ))}
              </div>
            </div>
            <span className={styles.reviewCount}>
              Based on {reviewSummary.totalReviews} reviews
            </span>
          </div>
        </div>

        <div className={styles.carousel}>
          <button
            type="button"
            className={`${styles.navBtn} ${styles.navLeft}`}
            onClick={() => scroll("left")}
            disabled={!canScrollLeft}
            aria-label="Previous reviews"
          >
            <ChevronLeft size={22} />
          </button>

          <div className={styles.track} ref={trackRef} role="list">
            {testimonials.map((review) => (
              <article
                key={review.id}
                className={styles.card}
                data-card
                role="listitem"
              >
                <Quote className={styles.quoteIcon} size={28} />
                <div className={styles.stars}>
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className={
                        i < review.rating ? styles.starFilled : styles.starEmpty
                      }
                    />
                  ))}
                </div>
                <p className={styles.text}>{review.content}</p>
                <div className={styles.author}>
                  <div className={styles.avatar}>
                    <ImageWithFallback
                      src={review.avatar}
                      alt={review.name}
                      fill
                      sizes="48px"
                      className={styles.avatarImg}
                    />
                  </div>
                  <div className={styles.authorInfo}>
                    <span className={styles.authorName}>{review.name}</span>
                    <span className={styles.authorMeta}>
                      {review.service} · Google
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <button
            type="button"
            className={`${styles.navBtn} ${styles.navRight}`}
            onClick={() => scroll("right")}
            disabled={!canScrollRight}
            aria-label="Next reviews"
          >
            <ChevronRight size={22} />
          </button>
        </div>
      </div>
    </section>
  );
}
