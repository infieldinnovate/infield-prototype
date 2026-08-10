"use client";

import { motion } from "framer-motion";
import * as Icons from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { ArrowRight } from "lucide-react";
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
    return <Icon size={28} strokeWidth={1.8} />;
  };

  return (
    <div className={styles.infographic}>
      <div className={styles.header}>
        <span className={styles.eyebrow}>Integrated Solutions</span>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.subtitle}>{subtitle}</p>
      </div>

      <div className={styles.flow}>
        {steps.map((step, i) => (
          <motion.div
            key={step.label}
            className={styles.step}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
          >
            <div className={styles.stepCard}>
              <div className={styles.stepIcon}>{renderIcon(step.icon)}</div>
              <div className={styles.stepContent}>
                <h4 className={styles.stepLabel}>{step.label}</h4>
                <p className={styles.stepDescription}>{step.description}</p>
              </div>
            </div>
            {i < steps.length - 1 && (
              <motion.div
                className={styles.arrow}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.15 + 0.3 }}
              >
                <ArrowRight size={20} strokeWidth={2.5} />
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ServiceInfographic;
