// components\sections\BeforeAfterSlider.tsx

"use client";

import { useRef, useState, useCallback } from "react";
import { MoveHorizontal } from "lucide-react";
import { projects } from "@/data/projectStats";
import { ImageWithFallback } from "@/components/ui/ImageWithFallback";
import styles from "./BeforeAfterSlider.module.scss";

export function BeforeAfterSlider() {
  const [position, setPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const project = projects[0];

  const beforeImage = project.gallery.find((image) => image.phase === "before");
  const afterImage = project.gallery.find((image) => image.phase === "after");

  const updatePosition = useCallback((clientX: number) => {
    const el = containerRef.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const pct = ((clientX - rect.left) / rect.width) * 100;

    setPosition(Math.max(0, Math.min(100, pct)));
  }, []);

  const handlePointerDown = (e: React.PointerEvent) => {
    isDragging.current = true;
    updatePosition(e.clientX);
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDragging.current) return;
    updatePosition(e.clientX);
  };

  const handlePointerUp = () => {
    isDragging.current = false;
  };

  if (!beforeImage || !afterImage) {
    return null;
  }

  return (
    <section className={styles.section} aria-labelledby="ba-heading">
      <div className={styles.container}>
        <p className={styles.eyebrow}>See the Transformation</p>

        <h2 id="ba-heading" className={styles.title}>
          Before &amp; After
        </h2>

        <p className={styles.description}>
          Drag the slider to see the difference our work makes.
          <br /> {project.title}.
        </p>

        <div
          className={styles.slider}
          ref={containerRef}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerCancel={handlePointerUp}
        >
          <div className={styles.imageWrap}>
            <ImageWithFallback
              src={afterImage.url}
              alt={`${project.title} after completion`}
              fill
              sizes="(max-width: 1024px) 100vw, 1024px"
              className={styles.image}
            />

            <span className={`${styles.badge} ${styles.badgeAfter}`}>
              After
            </span>
          </div>

          <div className={styles.beforeWrap} style={{ width: `${position}%` }}>
            <div className={styles.beforeInner}>
              <ImageWithFallback
                src={beforeImage.url}
                alt={`${project.title} before work`}
                fill
                sizes="(max-width: 1024px) 100vw, 1024px"
                className={styles.image}
              />

              <span className={`${styles.badge} ${styles.badgeBefore}`}>
                Before
              </span>
            </div>
          </div>

          <div className={styles.handle} style={{ left: `${position}%` }}>
            <div className={styles.handleIcon}>
              <MoveHorizontal size={20} />
            </div>
          </div>

          <input
            type="range"
            min={0}
            max={100}
            value={position}
            onChange={(e) => setPosition(Number(e.target.value))}
            className={styles.rangeInput}
            aria-label="Before and after slider"
          />
        </div>
      </div>
    </section>
  );
}
