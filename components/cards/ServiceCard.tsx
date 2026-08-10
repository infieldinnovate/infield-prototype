"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ImageWithFallback } from "@/components/ui/ImageWithFallback";
import {
  ArrowRight,
  CircleCheck,
  Sun,
  Droplets,
  Zap,
  Sprout,
  Lightbulb,
  type LucideIcon,
} from "lucide-react";
import styles from "./ServiceCard.module.scss";
import { SectionHeading } from "../ui/SectionHeading";

export interface ServiceCardProps {
  id: string;
  title: string;
  description: string;
  image: string;
  icon: LucideIcon;
  features: string[];
  color: string;
}

export const ServiceCard = ({
  id,
  title,
  description,
  image,
  icon: Icon,
  features,
  color,
}: ServiceCardProps) => {
  return (
    <motion.article
      className={styles.serviceCard}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.2 }}
      whileHover={{ y: -10 }}
    >
      <div className={styles.imageWrapper}>
        <ImageWithFallback src={image} alt={title} fill className={styles.serviceImage} />

        <div className={styles.imageOverlay}>
          <div
            className={styles.iconWrapper}
            style={{ backgroundColor: color }}
          >
            <Icon size={48} />
          </div>
        </div>
      </div>

      <div className={styles.cardContent}>
        <SectionHeading level="h3" centered={false} title={title} />

        <ul className={styles.featureList}>
          {features.map((feature) => (
            <li key={feature}>
              <CircleCheck size={16} />
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        <Link
          href={`/services/${id}`}
          className={styles.serviceButton}
          style={{ backgroundColor: color }}
        >
          How We Do It
          <ArrowRight size={18} />
        </Link>
      </div>
    </motion.article>
  );
};
