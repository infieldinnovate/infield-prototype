"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import styles from "./about.module.scss";

interface Milestone {
  year: string | number;
  event: string;
  description: string;
}

interface AboutTimelineProps {
  milestones: Milestone[];
}

export default function AboutTimeline({ milestones }: AboutTimelineProps) {
  return (
    <div className={styles.timeline}>
      {milestones.map((milestone, index) => (
        <motion.div
          key={`${milestone.year}-${milestone.event}`}
          className={styles.timelineItem}
          initial={{
            opacity: 0,
            x: index % 2 === 0 ? -60 : 60,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: 0.6,
            delay: index * 0.12,
            ease: "easeOut",
          }}
        >
          <div className={styles.timelineContent}>
            <div className={styles.timelineYear}>{milestone.year}</div>

            <h3>{milestone.event}</h3>

            <p>{milestone.description}</p>
          </div>

          <motion.div
            className={styles.timelineDot}
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{
              delay: index * 0.12 + 0.25,
              type: "spring",
              stiffness: 250,
            }}
          >
            <CheckCircle2 size={20} />
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
}
