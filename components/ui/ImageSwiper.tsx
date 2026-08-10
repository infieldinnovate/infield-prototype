// components\UI\ImageSwiper.tsx

"use client";

import { useMemo, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import type { ImageData } from "@/types/imageTypes";
import { ImageWithFallback } from "@/components/ui/ImageWithFallback";
import styles from "./ImageSwiper.module.scss";
import clsx from "clsx";
import { SwiperModule } from "swiper/types";

interface ImageSwiperProps {
  images?: ImageData[];
  loading?: boolean;
  error?: string | null;
  alt?: string;
  swiperClassName?: string;
  slideClassName?: string;
  imageClassName?: string;
  sizes?: string;
  loop?: boolean;
  navigation?: boolean;
  pagination?: boolean;
  autoplay?:
    | false
    | {
        delay?: number;
        disableOnInteraction?: boolean;
      };
  emptyContent?: React.ReactNode;
  loadingContent?: React.ReactNode;
  errorContent?: React.ReactNode;
}

export default function ImageSwiper({
  images,
  loading,
  error,
  alt,
  swiperClassName,
  slideClassName,
  imageClassName,
  sizes = "(max-width:768px)100vw,50vw",
  loop = true,
  navigation = true,
  pagination = true,
  autoplay = {
    delay: 4000,
    disableOnInteraction: false,
  },

  loadingContent = <div>Loading images...</div>,
  errorContent,
  emptyContent = <div>No images available</div>,
}: ImageSwiperProps) {
  const prevRef = useRef<HTMLButtonElement | null>(null);
  const nextRef = useRef<HTMLButtonElement | null>(null);

  const modules: SwiperModule[] = [];

  if (navigation) modules.push(Navigation);
  if (pagination) modules.push(Pagination);
  if (autoplay) modules.push(Autoplay);

  const imagesKey = useMemo(() => {
    if (!images?.length) return "empty";

    return images.map((i) => i.name ?? i.src).join("|");
  }, [images]);

  return (
    <div className={styles.root}>
      {loading && <div className={styles.loading}>{loadingContent}</div>}

      {error && (
        <div className={styles.error}>
          {errorContent ?? `Error loading images: ${error}`}
        </div>
      )}
      {images?.length ? (
        <Swiper
          key={imagesKey}
          modules={modules}
          slidesPerView={1}
          spaceBetween={0}
          loop={loop}
          autoplay={autoplay || false}
          pagination={pagination ? { clickable: true } : false}
          onBeforeInit={(swiper) => {
            if (!navigation) return;

            // @ts-ignore
            swiper.params.navigation = swiper.params.navigation || {};

            // @ts-ignore
            swiper.params.navigation.prevEl = prevRef.current;

            // @ts-ignore
            swiper.params.navigation.nextEl = nextRef.current;
          }}
          className={clsx(styles.swiper, swiperClassName)}
        >
          {images.map((img) => (
            <SwiperSlide key={img.src}>
              <div className={clsx(styles.slide, slideClassName)}>
                <ImageWithFallback
                  src={img.src}
                  alt={alt ?? ""}
                  fill
                  sizes={sizes}
                  className={clsx(styles.image, imageClassName)}
                  placeholder={img.placeholder ? "blur" : "empty"}
                  blurDataURL={img.placeholder}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        !loading && !error && <div className={styles.empty}>{emptyContent}</div>
      )}

      {navigation && (
        <>
          <button
            ref={prevRef}
            className="swiper-button-prev"
            aria-label="Previous"
          />

          <button
            ref={nextRef}
            className="swiper-button-next"
            aria-label="Next"
          />
        </>
      )}
    </div>
  );
}
