"use client";

// ============================================
// IndustryCard Component
// ============================================

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import type { Industry } from "@/data/industries";
import styles from "./IndustryCard.module.scss";

interface IndustryCardProps {
  industry: Industry;
  index?: number;
}

export function IndustryCard({ industry, index = 0 }: IndustryCardProps) {
  const Icon = industry.icon;

  return (
    <motion.div
      className={styles.card}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4, delay: index * 0.06 }}
    >
      <div className={styles.iconWrapper}>
        <Icon size={28} strokeWidth={1.8} />
      </div>

      <h3 className={styles.title}>{industry.name}</h3>

      <p className={styles.description}>{industry.description}</p>

      <Link href={`/services`} className={styles.link}>
        Explore Services
        <ArrowRight size={16} />
      </Link>
    </motion.div>
  );
}
