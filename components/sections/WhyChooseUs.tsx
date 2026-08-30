"use client";

import { motion } from "framer-motion";
import { Award, Users, Clock, Shield } from "lucide-react";
import styles from "./WhyChooseUs.module.scss";
import { SectionHeading } from "../ui/SectionHeading";
import { AnimatedStats } from "@/components/sections/AnimatedStats";
import whyUsStats from "@/data/whyUsStats";

const WhyChooseUs = () => {
  const icons = {
    Award,
    Users,
    Clock,
    Shield,
  };
  return (
    <section className={styles.whyChooseUsSection}>
      <div className={styles.container}>
        <SectionHeading
          eyebrow="Why Choose Us"
          title="The Infield Difference"
          description="We combine technical expertise with genuine care for our customers. Every project, big or small, gets our full commitment."
        />

        <div className={styles.content}>
          <motion.div
            className={styles.featuresGrid}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {whyUsStats.map((feature, index) => {
              const Icon = icons[feature.icon as keyof typeof icons];

              return (
                <motion.div
                  key={feature.title}
                  className={styles.featureCard}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <div
                    className={styles.iconWrapper}
                    style={{ backgroundColor: feature.color }}
                  >
                    <Icon size={48} />
                  </div>

                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </motion.div>
              );
            })}
          </motion.div>

          <motion.div
            className={styles.statsSection}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <AnimatedStats
              eyebrow="Our Track Record"
              title="The Numbers Behind Our Promise"
              description="Real outcomes from real projects — the proof that our commitment to quality delivers."
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
