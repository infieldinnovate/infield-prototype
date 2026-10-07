"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Loader as Loader2 } from "lucide-react";
import { ImageWithFallback } from "@/components/ui/ImageWithFallback";
import { VideoWithFallback } from "@/components/ui/VideoWithFallback";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { GalleryModal } from "@/components/ui/GalleryModal";
import { getAllGalleryMedia, GalleryMediaItem } from "@/data/projectStats";
import styles from "./page.module.scss";

const BATCH_SIZE = 12;
const MAX_ITEMS = 120;

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export default function GalleryPage() {
  const sourceMedia = useMemo(() => getAllGalleryMedia(), []);

  // Build an infinite feed by cycling through a shuffled copy of the source.
  const shuffledPool = useMemo(() => shuffle(sourceMedia), [sourceMedia]);

  const [visibleCount, setVisibleCount] = useState(() =>
    Math.min(BATCH_SIZE, shuffledPool.length),
  );
  const [loading, setLoading] = useState(false);
  const [modalIndex, setModalIndex] = useState<number | null>(null);
  const sentinelRef = useRef<HTMLDivElement | null>(null);

  const feed: GalleryMediaItem[] = useMemo(() => {
    const items: GalleryMediaItem[] = [];
    if (shuffledPool.length === 0) return items;
    for (let i = 0; i < visibleCount; i++) {
      const item = shuffledPool[i % shuffledPool.length];
      items.push({
        ...item,
        id: `${item.id}--${i}`,
      });
    }
    return items;
  }, [shuffledPool, visibleCount]);

  const loadMore = useCallback(() => {
    setLoading(true);
    // Simulate a brief fetch delay for a smoother UX
    setTimeout(() => {
      setVisibleCount((prev) =>
        Math.min(prev + BATCH_SIZE, MAX_ITEMS),
      );
      setLoading(false);
    }, 500);
  }, []);

  useEffect(() => {
    const el = sentinelRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting && !loading && visibleCount < MAX_ITEMS) {
          loadMore();
        }
      },
      { rootMargin: "600px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [loadMore, loading, visibleCount]);

  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        {/* <div className={styles.container}> */}
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Resources", href: "/resources/knowledge-centre" },
              { label: "Gallery" },
            ]}
          />
          <SectionHeading
            level="h1"
            eyebrow="Project Gallery"
            title="Our Work in Pictures"
            description="Browse photos and videos from our completed solar, borehole, irrigation, plumbing, and electrical projects across Kenya."
          />
        {/* </div> */}
      </section>

      <section className={styles.gallerySection}>
        <div className={styles.container}>
          {feed.length > 0 ? (
            <>
              <div className={styles.gallery}>
                {feed.map((item, index) => (
                  <motion.div
                    key={item.id}
                    className={styles.galleryItem}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{
                      duration: 0.4,
                      delay: (index % BATCH_SIZE) * 0.04,
                    }}
                    onClick={() => setModalIndex(index)}
                  >
                    <div className={styles.mediaWrapper}>
                      {item.type === "image" ? (
                        <ImageWithFallback
                          src={item.url}
                          alt={item.caption}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          animation="none"
                          loading={index < 6 ? "eager" : "lazy"}
                          priority={index < 3}
                        />
                      ) : (
                        <VideoWithFallback
                          url={item.url}
                          alt={item.caption}
                          platform={item.platform}
                        />
                      )}

                      {item.type === "video" && (
                        <span className={styles.videoBadge}>Video</span>
                      )}

                      <div className={styles.overlay}>
                        <p className={styles.caption}>{item.caption}</p>
                        <p className={styles.projectMeta}>
                          {item.projectTitle} &middot; {item.projectCounty} County
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Sentinel + loader */}
              {visibleCount < MAX_ITEMS && (
                <div ref={sentinelRef} className={styles.sentinel}>
                  {loading && (
                    <div className={styles.loader}>
                      <Loader2 size={24} className={styles.spinner} />
                      <span>Loading more...</span>
                    </div>
                  )}
                </div>
              )}
            </>
          ) : (
            <div className={styles.empty}>
              <p>No gallery items available yet.</p>
            </div>
          )}
        </div>
      </section>

      <AnimatePresence>
        <GalleryModal
          items={feed}
          index={modalIndex}
          onClose={() => setModalIndex(null)}
          onNavigate={setModalIndex}
        />
      </AnimatePresence>
    </div>
  );
}
