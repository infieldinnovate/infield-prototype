"use client";

import { useEffect, useState } from "react";
import { X, Rocket } from "lucide-react";
import styles from "./UpgradeNoticeModal.module.scss";

const STORAGE_KEY = "infield-upgrade-notice-seen";
const AUTO_DISMISS_MS = 5000;

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

        <div className={styles.header}>
          <div className={styles.headerIcon}>
            <Rocket size={32} />
          </div>
          <span className={styles.badge}>Heads Up</span>
          <h3 id="upgrade-notice-title" className={styles.headerTitle}>
            We&apos;re Upgrading!
          </h3>
          <p className={styles.headerDesc}>
            Our website is currently under development to bring you a better
            experience. Some features may be temporarily unavailable or may
            not work as expected. Thank you for your patience!
          </p>
        </div>

        <div className={styles.footer}>
          <div className={styles.progressTrack}>
            <div className={styles.progressBar} />
          </div>
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
  );
}
