"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { FileText } from "lucide-react";
import styles from "./FloatingActions.module.scss";
import WhatsApp from "./WhatsApp";

export function FloatingActions() {
  const [visible, setVisible] = useState(false);
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      setVisible(y > 200);
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
    <>
      {/* WhatsApp — always visible */}
      <div className={styles.whatsappWrap}>
        <WhatsApp />
      </div>

      {/* Quote + Back to Top — appear on scroll */}
      <div
        className={`${styles.wrap} ${visible ? styles.visible : ""}`}
        aria-hidden={!visible}
      >
        <Link
          href="/quote"
          className={`${styles.btn} ${styles.quote}`}
          aria-label="Request a quote"
        >
          <FileText size={24} />
          <span className={styles.tooltip}>Request a quote</span>
        </Link>

        {showTop && (
          <button
            className={styles.backToTop}
            onClick={scrollToTop}
            aria-label="Back to top"
            type="button"
          >
            TOP
          </button>
        )}
      </div>
    </>
  );
}
