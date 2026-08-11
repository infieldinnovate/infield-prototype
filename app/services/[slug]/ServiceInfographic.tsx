"use client";

import { motion } from "framer-motion";
import * as Icons from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { ChevronRight } from "lucide-react";
import type { InfographicStep } from "@/data/services";
import styles from "./ServiceInfographic.module.scss";

interface ServiceInfographicProps {
  steps: InfographicStep[];
  title: string;
  subtitle: string;
}

const ServiceInfographic = ({
  steps,
  title,
  subtitle,
}: ServiceInfographicProps) => {
  const renderIcon = (iconName: string) => {
    const Icon =
      (Icons[iconName as keyof typeof Icons] as LucideIcon) || Icons.Circle;
    return <Icon size={24} strokeWidth={1.8} />;
  };

  return (
    <div className={styles.infographic}>
      <div className={styles.header}>
        <span className={styles.eyebrow}>How It Works</span>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.subtitle}>{subtitle}</p>
      </div>

      <div className={styles.flowContainer}>
        <div className={styles.connector} />
        <div className={styles.flow}>
          {steps.map((step, i) => (
            <motion.div
              key={step.label}
              className={styles.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: i * 0.12 }}
            >
              <div className={styles.stepNumber}>{i + 1}</div>
              <div className={styles.stepCard}>
                <div className={styles.stepIcon}>{renderIcon(step.icon)}</div>
                <h4 className={styles.stepLabel}>{step.label}</h4>
                <p className={styles.stepDescription}>{step.description}</p>
              </div>
              {i < steps.length - 1 && (
                <div className={styles.arrow}>
                  <ChevronRight size={18} strokeWidth={2.5} />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceInfographic;
