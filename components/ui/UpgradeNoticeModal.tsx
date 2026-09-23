"use client";

import { useEffect, useState } from "react";
import { X, Rocket, Gauge, Sparkles, ShieldCheck } from "lucide-react";
import { ImageWithFallback } from "@/components/ui/ImageWithFallback";
import { siteConfig } from "@/data/site.config";
import styles from "./UpgradeNoticeModal.module.scss";

const STORAGE_KEY = "infield-upgrade-notice-seen";
const AUTO_DISMISS_MS = 5000;

const features = [
  { icon: Gauge, label: "Better Performance" },
  { icon: Sparkles, label: "New Features" },
  { icon: ShieldCheck, label: "Improved Experience" },
];

export function UpgradeNoticeModal() {
  const [visible, setVisible] = useState(false);
  const [closing, setClosing] = useState(false);

  // Show after a short delay on first visit
  useEffect(() => {
    try {
      if (sessionStorage.getItem(STORAGE_KEY)) return;
    } catch {
      // sessionStorage may be unavailable; show anyway
    }
    const t = setTimeout(() => setVisible(true), 800);
    return () => clearTimeout(t);
  }, []);

  const handleClose = () => {
    if (closing) return;
    setClosing(true);
    setTimeout(() => setVisible(false), 300);
    try {
      sessionStorage.setItem(STORAGE_KEY, "1");
    } catch {
      // ignore
    }
  };

  // Auto-dismiss after 5 seconds
  useEffect(() => {
    if (!visible) return;
    const t = setTimeout(handleClose, AUTO_DISMISS_MS);
    return () => clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [visible]);

  // Escape key
  useEffect(() => {
    if (!visible) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [visible]);

  // Body scroll lock while open
  useEffect(() => {
    if (visible) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [visible]);

  if (!visible) return null;

  return (
    <div
      className={`${styles.overlay} ${closing ? styles.overlayClosing : ""}`}
      onClick={handleClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="upgrade-notice-title"
    >
      <div
        className={`${styles.modal} ${closing ? styles.modalClosing : ""}`}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className={styles.closeBtn}
          onClick={handleClose}
          aria-label="Close notice"
          type="button"
        >
          <X size={20} />
        </button>

        {/* Visual section */}
        <div className={styles.visual}>
          <div className={styles.visualBg} aria-hidden="true">
            <div className={styles.visualOrb1} />
            <div className={styles.visualOrb2} />
            <div className={styles.visualGrid} />
          </div>
          <div className={styles.visualContent}>
            <div className={styles.logoWrap}>
              <ImageWithFallback
                src="/logo.png"
                alt={siteConfig.name}
                width={160}
                height={72}
                className={styles.logo}
                priority
              />
            </div>
            <div className={styles.rocketBadge}>
              <Rocket size={28} />
            </div>
          </div>
          <span className={styles.statusBadge}>SITE UPDATE</span>
        </div>

        {/* Content section */}
        <div className={styles.content}>
          <h3 id="upgrade-notice-title" className={styles.headline}>
            We&apos;re Building Something Better
          </h3>
          <p className={styles.message}>
            We&apos;re upgrading our platform to give you a faster, smarter and
            better experience.
          </p>

          <div className={styles.features}>
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <div key={feature.label} className={styles.featureItem}>
                  <span className={styles.featureIcon}>
                    <Icon size={16} strokeWidth={2} />
                  </span>
                  <span className={styles.featureLabel}>{feature.label}</span>
                </div>
              );
            })}
          </div>

          <p className={styles.tagline}>{siteConfig.tagline}</p>
        </div>

        {/* Footer */}
        <div className={styles.footer}>
          <div className={styles.progressTrack}>
            <div className={styles.progressBar} />
          </div>
          <div className={styles.footerActions}>
            <span className={styles.companyStatement}>
              Better technology. Better service. Built for you.
            </span>
            <button
              type="button"
              className={styles.dismissBtn}
              onClick={handleClose}
            >
              Got it
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
