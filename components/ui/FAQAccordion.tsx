"use client";

// ============================================
// FAQAccordion Component
// ============================================

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronDown,
  Copy,
  Check,
  ThumbsUp,
  ThumbsDown,
  Link2,
  Clock,
} from "lucide-react";
import type { FAQ } from "@/data/faqs";
import { cn } from "@/lib/utils";
import styles from "./FAQAccordion.module.scss";

interface FAQAccordionProps {
  faqs: FAQ[];
  searchQuery?: string;
}

const RECENTLY_VIEWED_KEY = "vf-faq-recent";

export function FAQAccordion({ faqs, searchQuery = "" }: FAQAccordionProps) {
  const [openId, setOpenId] = useState<string | null>(null);
  const [allExpanded, setAllExpanded] = useState(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [votes, setVotes] = useState<Record<string, "helpful" | "not-helpful">>(
    {},
  );
  const [recentlyViewed, setRecentlyViewed] = useState<string[]>([]);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(RECENTLY_VIEWED_KEY);
      if (stored) setRecentlyViewed(JSON.parse(stored));
    } catch {
      // ignore
    }
  }, []);

  const addToRecent = useCallback((id: string) => {
    setRecentlyViewed((prev) => {
      const updated = [id, ...prev.filter((item) => item !== id)].slice(0, 5);
      try {
        localStorage.setItem(RECENTLY_VIEWED_KEY, JSON.stringify(updated));
      } catch {
        // ignore
      }
      return updated;
    });
  }, []);

  const toggle = (id: string) => {
    const isOpen = allExpanded || openId === id;
    if (isOpen) {
      if (!allExpanded) setOpenId(null);
    } else {
      setOpenId(id);
      addToRecent(id);
    }
  };

  const toggleAll = () => {
    if (allExpanded) {
      setAllExpanded(false);
      setOpenId(null);
    } else {
      setAllExpanded(true);
    }
  };

  const copyLink = async (faq: FAQ) => {
    const url = `${window.location.origin}/faq#faq-${faq.id}`;
    try {
      await navigator.clipboard.writeText(url);
      setCopiedId(faq.id);
      setTimeout(() => setCopiedId(null), 2000);
    } catch {
      // ignore
    }
  };

  const handleVote = (id: string, vote: "helpful" | "not-helpful") => {
    setVotes((prev) => ({ ...prev, [id]: vote }));
  };

  const highlight = (text: string) => {
    if (!searchQuery.trim()) return text;
    const regex = new RegExp(
      `(${searchQuery.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")})`,
      "gi",
    );
    const parts = text.split(regex);
    return parts.map((part, i) =>
      part.toLowerCase() === searchQuery.toLowerCase() ? (
        <mark key={i} className={styles.highlight}>
          {part}
        </mark>
      ) : (
        part
      ),
    );
  };

  const recentFAQs = recentlyViewed
    .map((id) => faqs.find((f) => f.id === id))
    .filter((f): f is FAQ => f !== undefined);

  return (
    <div className={styles.wrapper}>
      <div className={styles.toolbar}>
        <span className={styles.count}>{faqs.length} questions</span>
        <button
          className={styles.expandButton}
          onClick={toggleAll}
          type="button"
        >
          <ChevronDown
            size={16}
            className={cn(
              styles.expandIcon,
              allExpanded && styles.expandIconOpen,
            )}
          />
          {allExpanded ? "Collapse All" : "Expand All"}
        </button>
      </div>

      {recentFAQs.length > 0 && !searchQuery && (
        <div className={styles.recentSection}>
          <h4 className={styles.recentTitle}>
            <Clock size={14} />
            Recently Viewed
          </h4>
          <div className={styles.recentChips}>
            {recentFAQs.map((faq) => (
              <button
                key={faq.id}
                className={styles.recentChip}
                onClick={() => {
                  setOpenId(faq.id);
                  document
                    .getElementById(`faq-${faq.id}`)
                    ?.scrollIntoView({ behavior: "smooth", block: "center" });
                }}
                type="button"
              >
                {faq.question.length > 40
                  ? faq.question.slice(0, 40) + "..."
                  : faq.question}
              </button>
            ))}
          </div>
        </div>
      )}

      <div className={styles.accordion}>
        {faqs.map((faq) => {
          const isOpen = allExpanded || openId === faq.id;
          const userVote = votes[faq.id];
          return (
            <div
              key={faq.id}
              id={`faq-${faq.id}`}
              className={cn(styles.item, isOpen && styles.itemOpen)}
            >
              <div className={styles.questionRow}>
                <button
                  className={styles.question}
                  onClick={() => toggle(faq.id)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-content-${faq.id}`}
                  type="button"
                >
                  <span className={styles.questionText}>
                    {highlight(faq.question)}
                  </span>
                  <ChevronDown
                    size={20}
                    className={cn(styles.chevron, isOpen && styles.chevronOpen)}
                  />
                </button>
              </div>
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    id={`faq-content-${faq.id}`}
                    className={styles.content}
                    role="region"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: "easeInOut" }}
                    style={{ overflow: "hidden" }}
                  >
                    <div className={styles.answerWrapper}>
                      <p className={styles.answer}>{highlight(faq.answer)}</p>
                      <div className={styles.actions}>
                        <button
                          className={styles.actionButton}
                          onClick={() => copyLink(faq)}
                          type="button"
                          aria-label="Copy link to this question"
                        >
                          {copiedId === faq.id ? (
                            <Check size={14} />
                          ) : (
                            <Link2 size={14} />
                          )}
                          {copiedId === faq.id ? "Copied!" : "Copy Link"}
                        </button>
                        <div className={styles.voteGroup}>
                          <span className={styles.voteLabel}>
                            Was this helpful?
                          </span>
                          <button
                            className={cn(
                              styles.voteButton,
                              userVote === "helpful" && styles.votedHelpful,
                            )}
                            onClick={() => handleVote(faq.id, "helpful")}
                            type="button"
                            aria-label="Mark as helpful"
                          >
                            <ThumbsUp size={14} />
                          </button>
                          <button
                            className={cn(
                              styles.voteButton,
                              userVote === "not-helpful" &&
                                styles.votedNotHelpful,
                            )}
                            onClick={() => handleVote(faq.id, "not-helpful")}
                            type="button"
                            aria-label="Mark as not helpful"
                          >
                            <ThumbsDown size={14} />
                          </button>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>

      {faqs.length === 0 && (
        <div className={styles.noResults}>
          <p>No questions found. Try a different search term.</p>
        </div>
      )}
    </div>
  );
}
