"use client";

// ============================================
// useScrollDirection Hook
// ============================================

import { useState, useEffect } from "react";

export function useScrollDirection() {
  const [scrolled, setScrolled] = useState(false);
  const [scrollDirection, setScrollDirection] = useState<"up" | "down">("up");

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const updateScroll = () => {
      const currentScrollY = window.scrollY;
      // Header shrinks once user scrolls past 20px
      setScrolled(currentScrollY > 20);
      // Direction drives header show/hide behavior
      setScrollDirection(currentScrollY > lastScrollY ? "down" : "up");
      // Clamp to 0 to avoid negative scroll values on overscroll
      lastScrollY = currentScrollY > 0 ? currentScrollY : 0;
    };

    window.addEventListener("scroll", updateScroll, { passive: true });
    return () => window.removeEventListener("scroll", updateScroll);
  }, []);

  return { scrolled, scrollDirection };
}
