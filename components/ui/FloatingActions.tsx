"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowUp, FileText } from "lucide-react";
import { siteConfig } from "@/data/site.config";
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
    <div
      className={`${styles.wrap} ${visible ? styles.visible : ""}`}
      aria-hidden={!visible}
    >
      <WhatsApp />
      <Link
        href="/quote"
        className={`${styles.btn} ${styles.quote}`}
        aria-label="Request a quote"
      >
        <FileText size={24} />
        <span className={styles.tooltip}>Request a quote</span>
      </Link>

      {/* Back to Top */}
      {showTop && (
        <button
          className={styles.backToTop}
          onClick={scrollToTop}
          aria-label="Back to top"
          type="button"
        >
          {/* <ArrowUp size={20} /> */}
          TOP
        </button>
      )}
    </div>
  );
}
