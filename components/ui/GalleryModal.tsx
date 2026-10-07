"use client";

import { useCallback, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { ImageWithFallback } from "./ImageWithFallback";
import { VideoWithFallback } from "./VideoWithFallback";
import type { GalleryMediaItem } from "@/data/projectStats";
import { useLockBodyScroll } from "@/hooks/use-lock-body-scroll";
import styles from "./GalleryModal.module.scss";

interface GalleryModalProps {
  items: GalleryMediaItem[];
  index: number | null;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export function GalleryModal({
  items,
  index,
  onClose,
  onNavigate,
}: GalleryModalProps) {
  const isOpen = index !== null;
  const currentIndex = index ?? 0;

  useLockBodyScroll(isOpen);

  const goNext = useCallback(() => {
    onNavigate((currentIndex + 1) % items.length);
  }, [currentIndex, items.length, onNavigate]);

  const goPrev = useCallback(() => {
    onNavigate((currentIndex - 1 + items.length) % items.length);
  }, [currentIndex, items.length, onNavigate]);

  useEffect(() => {
    if (!isOpen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      else if (e.key === "ArrowRight") goNext();
      else if (e.key === "ArrowLeft") goPrev();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [isOpen, onClose, goNext, goPrev]);

  if (!isOpen) return null;

  const item = items[currentIndex];
  if (!item) return null;

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? "100%" : "-100%",
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction > 0 ? "-100%" : "100%",
      opacity: 0,
    }),
  };

  return (
    <motion.div
      className={styles.overlay}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Image viewer"
    >
      <button
        className={styles.closeBtn}
        onClick={onClose}
        aria-label="Close gallery"
        type="button"
      >
        <X size={24} />
      </button>

      {items.length > 1 && (
        <>
          <button
            className={`${styles.navBtn} ${styles.navPrev}`}
            onClick={(e) => {
              e.stopPropagation();
              goPrev();
            }}
            aria-label="Previous"
            type="button"
          >
            <ChevronLeft size={28} />
          </button>
          <button
            className={`${styles.navBtn} ${styles.navNext}`}
            onClick={(e) => {
              e.stopPropagation();
              goNext();
            }}
            aria-label="Next"
            type="button"
          >
            <ChevronRight size={28} />
          </button>
        </>
      )}

      <motion.div
        className={styles.content}
        key={currentIndex}
        custom={1}
        variants={variants}
        initial="enter"
        animate="center"
        exit="exit"
        transition={{
          x: { type: "spring", stiffness: 300, damping: 30 },
          opacity: { duration: 0.2 },
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {item.type === "image" ? (
          <ImageWithFallback
            src={item.url}
            alt={item.caption}
            fill
            sizes="100vw"
            animation="none"
            priority
          />
        ) : (
          <VideoWithFallback
            url={item.url}
            alt={item.caption}
            platform={item.platform}
          />
        )}
      </motion.div>

      <div className={styles.captionBar} onClick={(e) => e.stopPropagation()}>
        <p className={styles.caption}>{item.caption}</p>
        <p className={styles.meta}>
          {item.projectTitle} &middot; {item.projectCounty} County
        </p>
        <span className={styles.counter}>
          {currentIndex + 1} / {items.length}
        </span>
      </div>
    </motion.div>
  );
}
