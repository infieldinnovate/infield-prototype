"use client";

// ============================================
// PremiumCarousel — Reusable Hero Carousel Shell
// ============================================
// Wraps Swiper with a shared, production-ready config:
// fade transition, autoplay with pause-on-interaction,
// keyboard nav, touch/swipe, manual prev/next controls,
// slide counter (01 / 05), and an autoplay-synced progress bar.
//
// Sub-pieces: GlassPanel, NavArrow, SlideCounter, ProgressBar
// All use existing SCSS variables/mixins, fonts, colors.
//
// ---
// Usage example:
//
//   import { PremiumCarousel, type PremiumSlide } from "@/components/sections/PremiumCarousel";
//   import { Sun, MapPin, Calendar } from "lucide-react";
//
//   const slides: PremiumSlide[] = [
//     {
//       image: "/hero/solar.jpg",
//       imageAlt: "Solar installation",
//       imagePriority: true,
//       badge: "Solar",
//       eyebrow: "Our Services",
//       title: "Professional Solar Solutions",
//       description: "Complete solar installation from design to maintenance.",
//       primaryButton: { label: "Explore", href: "/services/solar" },
//       secondaryButton: { label: "Get Quote", href: "/quote" },
//       meta: [
//         { icon: MapPin, text: "Meru, Kenya" },
//         { icon: Calendar, text: "2024" },
//       ],
//     },
//   ];
//
//   <PremiumCarousel slides={slides} autoplayDelay={6000} />
// ============================================

import { useRef, useState, type ReactNode } from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, EffectFade, Keyboard } from "swiper/modules";
import { ChevronLeft, ChevronRight, ArrowRight, type LucideIcon } from "lucide-react";
import { ImageWithFallback } from "@/components/ui/ImageWithFallback";
import { cn } from "@/lib/utils";
import styles from "./PremiumCarousel.module.scss";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

// ============================================
// Types
// ============================================

export interface PremiumSlideMeta {
  icon: LucideIcon;
  text: string;
}

export interface PremiumSlideButton {
  label: string;
  href: string;
}

export interface PremiumSlide {
  image: string;
  imageAlt: string;
  imagePriority?: boolean;
  eyebrow?: string;
  title: string;
  description?: string;
  badge?: string;
  badgeIcon?: LucideIcon;
  primaryButton?: PremiumSlideButton;
  secondaryButton?: PremiumSlideButton;
  meta?: PremiumSlideMeta[];
}

export interface PremiumCarouselProps {
  slides: PremiumSlide[];
  autoplayDelay?: number;
  loop?: boolean;
  className?: string;
  imageSizes?: string;
}

// ============================================
// Sub-components
// ============================================

function GlassPanel({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn(styles.glassPanel, className)}>{children}</div>
  );
}

function NavArrow({
  direction,
  onClick,
  disabled,
}: {
  direction: "prev" | "next";
  onClick: () => void;
  disabled: boolean;
}) {
  const Icon = direction === "prev" ? ChevronLeft : ChevronRight;
  return (
    <button
      type="button"
      className={cn(styles.navArrow, disabled && styles.navArrowDisabled)}
      onClick={onClick}
      disabled={disabled}
      aria-label={direction === "prev" ? "Previous slide" : "Next slide"}
    >
      <Icon size={20} strokeWidth={1.8} />
    </button>
  );
}

function SlideCounter({ current, total }: { current: number; total: number }) {
  const fmt = (n: number) => String(n).padStart(2, "0");
  return (
    <div className={styles.slideCounter}>
      <span className={styles.slideCounterCurrent}>{fmt(current)}</span>
      <span className={styles.slideCounterDivider}>/</span>
      <span className={styles.slideCounterTotal}>{fmt(total)}</span>
    </div>
  );
}

// ============================================
// Main Component
// ============================================

export function PremiumCarousel({
  slides,
  autoplayDelay = 6000,
  loop = true,
  className,
  imageSizes = "100vw",
}: PremiumCarouselProps) {
  const paginationRef = useRef<HTMLDivElement | null>(null);
  const progressRef = useRef<HTMLDivElement | null>(null);
  const swiperRef = useRef<{ slidePrev: () => void; slideNext: () => void; realIndex: number; isBeginning: boolean; isEnd: boolean } | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const shouldLoop = loop && slides.length > 1;
  const showControls = slides.length > 1;

  if (slides.length === 0) return null;

  const goPrev = () => swiperRef.current?.slidePrev();
  const goNext = () => swiperRef.current?.slideNext();

  return (
    <section className={cn(styles.carousel, className)}>
      <Swiper
        modules={[Pagination, Autoplay, EffectFade, Keyboard]}
        spaceBetween={0}
        slidesPerView={1}
        effect="fade"
        loop={shouldLoop}
        keyboard={{ enabled: true }}
        autoplay={{
          delay: autoplayDelay,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        onBeforeInit={(swiper) => {
          // @ts-ignore
          swiper.params.pagination = swiper.params.pagination || {};
          // @ts-ignore
          swiper.params.pagination.el = paginationRef.current;
        }}
        onSwiper={(swiper) => {
          swiperRef.current = swiper as typeof swiperRef.current;
        }}
        onSlideChange={(swiper) => {
          setActiveIndex(swiper.realIndex);
          setIsBeginning(swiper.isBeginning);
          setIsEnd(swiper.isEnd);
        }}
        onAutoplayTimeLeft={(_swiper, _time, progress) => {
          if (progressRef.current) {
            progressRef.current.style.width = `${(1 - progress) * 100}%`;
          }
        }}
        className={styles.swiper}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className={styles.slide}>
              <div className={styles.slideImage}>
                <ImageWithFallback
                  src={slide.image}
                  alt={slide.imageAlt}
                  fill
                  priority={slide.imagePriority ?? index === 0}
                  sizes={imageSizes}
                  className={styles.image}
                />
              </div>

              <div className={styles.overlay} />

              <div className={styles.content}>
                <div className={styles.container}>
                  <div className={styles.slideContent}>
                    <GlassPanel>
                      {slide.badge && (
                        <span className={styles.badge}>
                          {slide.badgeIcon && (
                            <slide.badgeIcon size={14} strokeWidth={1.8} />
                          )}
                          {slide.badge}
                        </span>
                      )}
                      {slide.eyebrow && (
                        <span className={styles.eyebrow}>{slide.eyebrow}</span>
                      )}
                      <h2 className={styles.title}>{slide.title}</h2>
                      {slide.description && (
                        <p className={styles.description}>
                          {slide.description}
                        </p>
                      )}
                      {slide.meta && slide.meta.length > 0 && (
                        <div className={styles.meta}>
                          {slide.meta.map((item, i) => {
                            const Icon = item.icon;
                            return (
                              <span key={i} className={styles.metaItem}>
                                <Icon size={14} strokeWidth={1.8} />
                                {item.text}
                              </span>
                            );
                          })}
                        </div>
                      )}
                      {(slide.primaryButton || slide.secondaryButton) && (
                        <div className={styles.buttons}>
                          {slide.primaryButton && (
                            <Link
                              href={slide.primaryButton.href}
                              className={styles.primaryBtn}
                            >
                              {slide.primaryButton.label}
                              <ArrowRight size={18} />
                            </Link>
                          )}
                          {slide.secondaryButton && (
                            <Link
                              href={slide.secondaryButton.href}
                              className={styles.secondaryBtn}
                            >
                              {slide.secondaryButton.label}
                            </Link>
                          )}
                        </div>
                      )}
                    </GlassPanel>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {showControls && (
        <div className={styles.controls}>
          <NavArrow
            direction="prev"
            onClick={goPrev}
            disabled={isBeginning && !shouldLoop}
          />
          <NavArrow
            direction="next"
            onClick={goNext}
            disabled={isEnd && !shouldLoop}
          />
          <SlideCounter current={activeIndex + 1} total={slides.length} />
        </div>
      )}

      <div ref={paginationRef} className={styles.pagination} />

      {showControls && (
        <div ref={progressRef} className={styles.progressBar} />
      )}
    </section>
  );
}

export default PremiumCarousel;
