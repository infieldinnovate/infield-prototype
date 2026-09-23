"use client";

import { motion } from "framer-motion";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import styles from "./page.module.scss";
import ServicesOverview from "@/components/sections/ServicesOverview";

export default function ServicesPageClient() {
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroBg} aria-hidden="true" />
        <div className={styles.container}>
          <Breadcrumbs
            items={[{ label: "Home", href: "/" }, { label: "Services" }]}
          />
          <motion.div
            className={styles.heroContent}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h1 className={styles.heroTitle}>
              Integrated Water, Energy &amp;{" "}
              <span className={styles.heroAccent}>Engineering Solutions</span>
            </h1>
            <p className={styles.heroDescription}>
              From solar power and borehole drilling to electrical, plumbing,
              and irrigation — one partner for every detail.
            </p>
          </motion.div>
        </div>
      </section>

      <ServicesOverview />
    </div>
  );
}
