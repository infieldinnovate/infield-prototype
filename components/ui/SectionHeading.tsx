"use client";

import { cn } from "@/lib/utils";
import styles from "./SectionHeading.module.scss";
import { motion } from "framer-motion";
import { type LucideIcon } from "lucide-react";

type HeadingLevel = "h1" | "h2" | "h3" | "h4";
type HeadingColor = "default" | "primary" | "secondary" | "light";

interface SectionHeadingProps {
  level?: HeadingLevel;
  themeColor?: HeadingColor;
  eyebrow?: string;
  title: string;
  description?: string;
  icon?: LucideIcon;
  centered?: boolean;
}

export function SectionHeading({
  level = "h2",
  themeColor = "default",
  eyebrow,
  title,
  description,
  icon: Icon,
  centered = true,
}: SectionHeadingProps) {
  const HeadingTag = level;

  return (
    <motion.div
      className={cn(
        styles.heading,
        styles[level],
        styles[themeColor],
        !centered && styles.left,
      )}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      {eyebrow && (
        <div className={styles.eyebrow}>
          {Icon && <Icon size={18} />}
          {eyebrow}
        </div>
      )}

      <HeadingTag className={styles.title}>{title}</HeadingTag>

      {description && <p className={styles.description}>{description}</p>}
    </motion.div>
  );
}
