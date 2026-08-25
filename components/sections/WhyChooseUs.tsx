"use client";

import { motion } from "framer-motion";
import { Award, Users, Clock, Shield, Wrench, ThumbsUp } from "lucide-react";
import styles from "./WhyChooseUs.module.scss";
import { SectionHeading } from "../ui/SectionHeading";
import { AnimatedStats } from "@/components/sections/AnimatedStats";

const WhyChooseUs = () => {
  const features = [
    {
      icon: <Award size={48} />,
      title: "Expert Experience",
      description:
        "10+ years of proven excellence in water and energy solutions across Kenya",
      color: "#fbbf24",
    },
    {
      icon: <Users size={48} />,
      title: "Professional Team",
      description:
        "Licensed and certified technicians with extensive training and experience",
      color: "#1e40af",
    },
    {
      icon: <Clock size={48} />,
      title: "24/7 Support",
      description:
        "Round-the-clock emergency services and customer support when you need it",
      color: "#0891b2",
    },
    {
      icon: <Shield size={48} />,
      title: "Quality Guarantee",
      description:
        "Comprehensive warranty and guarantee on all our installations and services",
      color: "#10b981",
    },
  ];

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
            {features.map((feature, index) => (
              <motion.div
                key={index}
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
                  {feature.icon}
                </div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </motion.div>
            ))}
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
