// app/gallery/page.tsx
"use client";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, X } from "lucide-react";
import { generateInfiniteSequence, mulberry32 } from "@/lib/gallery-utils";
import styles from "./page.module.scss";
import { fetchSupabaseGallery } from "@/lib/supabase-images";

type GalleryItemType = "image" | "video" | "unknown";

interface GalleryItem {
  id: string;
  url: string;
  imgCaption?: string;
  type: GalleryItemType;
}

export default function GalleryPageInfinite() {
  const [items, setItems] = useState<GalleryItem[]>([]);
  const [displayed, setDisplayed] = useState<GalleryItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  const loadMoreRef = useRef<HTMLDivElement | null>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    let mounted = true;
    (async () => {
      setLoading(true);
      // change bucket/path per page — example shown below uses "public-gallery"
      const list = await fetchSupabaseGallery({
        bucket: "infield", // <-- change this to the bucket you want
        path: "gallery", // <-- folder/prefix if any
        limit: 1000,
        signed: false, // set true if bucket private and you want signed urls
      });

      const base = list;
      const rng = mulberry32(123456);
      const seq = generateInfiniteSequence(base, 60, rng);
      if (!mounted) return;
      setItems(seq);
      setDisplayed(seq.slice(0, 6));
      setLoading(false);
    })();
    return () => {
      mounted = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!loadMoreRef.current) return;
    observerRef.current = new IntersectionObserver(
      (entries) => {
        if (!entries[0].isIntersecting) return;
        appendMore();
      },
      { threshold: 0.6 },
    );
    observerRef.current.observe(loadMoreRef.current);
    return () => observerRef.current?.disconnect();
  }, [displayed, items]);

  const appendMore = () => {
    if (items.length === 0) return;
    const currentLen = displayed.length;
    const more: GalleryItem[] = [];
    for (let i = 0; i < 6; i++) {
      const source = items[(currentLen + i) % items.length];
      more.push({ ...source, id: `${source.id}-inst-${currentLen + i}` });
    }
    setDisplayed((p) => [...p, ...more]);
  };

  if (loading) {
    return (
      <div className={styles.loading}>
        <div className={styles.spinner} />
      </div>
    );
  }

  return (
    <div className={styles.galleryContainer}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className={styles.header}
      >
        <h1>Our Projects</h1>
        <p>Explore our portfolio of exceptional work</p>
      </motion.div>

      <div className={styles.gallery}>
        {displayed.map((it, i) => (
          <motion.div
            key={it.id}
            className={styles.galleryItem}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: (i % 6) * 0.05 }}
          >
            {it.type === "image" ? (
              <div className={styles.imageWrapper}>
                <img
                  src={it.url}
                  alt={it.imgCaption ?? it.id}
                  loading="lazy"
                  decoding="async"
                />
              </div>
            ) : (
              <div
                className={styles.videoWrapper}
                onClick={() => setSelectedVideo(it.url)}
              >
                {/* If you have thumbnails, replace the img src with a thumb. */}
                <img src={it.url} alt={it.imgCaption ?? it.id} loading="lazy" />
                <div className={styles.playButton}>
                  <Play size={36} />
                </div>
              </div>
            )}
          </motion.div>
        ))}
      </div>

      <div ref={loadMoreRef} style={{ height: 1 }} />

      <AnimatePresence>
        {selectedVideo && (
          <motion.div
            className={styles.videoModal}
            onClick={() => setSelectedVideo(null)}
          >
            <motion.div
              className={styles.videoContainer}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className={styles.closeButton}
                onClick={() => setSelectedVideo(null)}
              >
                <X size={18} />
              </button>

              {/* For hosted video files show <video>; for iframe sources adjust as needed */}
              {selectedVideo.match(/\.(mp4|webm|mov|mkv)(\?.*)?$/i) ? (
                <video
                  src={selectedVideo}
                  controls
                  autoPlay
                  style={{ width: "100%" }}
                />
              ) : (
                <iframe
                  src={selectedVideo}
                  style={{ width: "100%", height: "100%" }}
                />
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
