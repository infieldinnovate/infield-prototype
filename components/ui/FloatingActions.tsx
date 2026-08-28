"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { FileText } from "lucide-react";
import styles from "./FloatingActions.module.scss";
import WhatsApp from "./WhatsApp";

export function FloatingActions() {
  const [scrolled, setScrolled] = useState(false);
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 200);
      setShowTop(y > 600);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className={styles.container}>
      <div className={styles.whatsappSlot}>
        <WhatsApp />
      </div>

      <div
        className={`${styles.actionSlot} ${scrolled ? styles.actionSlotVisible : ""}`}
      >
        <Link
          href="/quote"
          className={`${styles.btn} ${styles.quote}`}
          aria-label="Request a quote"
          aria-hidden={!scrolled}
          tabIndex={scrolled ? 0 : -1}
        >
          <FileText size={24} />
          <span className={styles.tooltip}>Request a quote</span>
        </Link>
      </div>

      <div
        className={`${styles.actionSlot} ${showTop ? styles.actionSlotVisible : ""}`}
      >
        <button
          className={`${styles.btn} ${styles.backToTop}`}
          onClick={scrollToTop}
          aria-label="Back to top"
          aria-hidden={!showTop}
          tabIndex={showTop ? 0 : -1}
          type="button"
        >
          TOP
        </button>
      </div>
    </div>
  );
}
