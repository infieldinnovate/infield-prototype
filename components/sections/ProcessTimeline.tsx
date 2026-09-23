"use client";

// ============================================
// ProcessTimeline Component
// ============================================

import { motion } from "framer-motion";
import { processSteps } from "@/data/process";
import styles from "./ProcessTimeline.module.scss";

export function ProcessTimeline() {
  return (
    <div className={styles.timeline}>
      {processSteps.map((step, index) => {
        const isLast = index === processSteps.length - 1;

        return (
          <motion.div
            key={step.step}
            className={styles.step}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4, delay: index * 0.08 }}
          >
            <div className={styles.stepLeft}>
              <div className={styles.stepNumber}>{step.step}</div>
              {!isLast && <div className={styles.connector} />}
            </div>

            <div className={styles.stepContent}>
              <div className={styles.stepIcon}>
                <step.icon size={24} strokeWidth={1.8} />
              </div>

              <h3 className={styles.stepTitle}>{step.title}</h3>

              <p className={styles.stepDescription}>{step.description}</p>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
