// components\sections\ServicesOverview.tsx

"use client";

import { motion } from "framer-motion";
import {
  Sun,
  Droplets,
  Zap,
  Sprout,
  ArrowRight,
  CircleCheck as CheckCircle,
  Lightbulb,
} from "lucide-react";
import Link from "next/link";
import styles from "./ServicesOverview.module.scss";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ServiceCard } from "../cards/ServiceCard";
import { servicesPreview } from "@/data/services";

const ServicesOverview = () => {
  return (
    <section className={styles.servicesSection}>
      <div className={styles.container}>
        <SectionHeading
          eyebrow="Our Services"
          title="Comprehensive Solutions for You"
          description="From electrical and plumbing to solar, irrigation, and borehole drilling, we deliver professional services you can trust."
        />
        <div className={styles.servicesGrid}>
          {servicesPreview.map((service, index) => (
            <ServiceCard key={service.id} {...service} />
          ))}
        </div>

        <motion.div
          className={styles.ctaSection}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <SectionHeading
            themeColor="light"
            title="Need a Custom Solution?"
            description="
            Our experts are ready to design the perfect system for your specific
            needs"
          />

          <Link href="/quote" className={styles.ctaButton}>
            Get Your Free Consultation
            <ArrowRight size={20} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesOverview;
