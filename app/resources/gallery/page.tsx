"use client";

import { motion } from "framer-motion";
import { ImageWithFallback } from "@/components/ui/ImageWithFallback";
import { VideoWithFallback } from "@/components/ui/VideoWithFallback";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { getAllGalleryMedia } from "@/data/projectStats";
import styles from "./page.module.scss";

export default function GalleryPage() {
  const media = getAllGalleryMedia();

  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.container}>
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
        </div>
      </section>

      <section className={styles.gallerySection}>
        <div className={styles.container}>
          {media.length > 0 ? (
            <div className={styles.gallery}>
              {media.map((item, index) => (
                <motion.div
                  key={item.id}
                  className={styles.galleryItem}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.4, delay: (index % 6) * 0.06 }}
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
          ) : (
            <div className={styles.empty}>
              <p>No gallery items available yet.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
