"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, CircleCheck as CheckCircle } from "lucide-react";
import { ImageWithFallback } from "@/components/ui/ImageWithFallback";
import styles from "./services.module.scss";

interface Service {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: React.ReactNode;
  image: string;
  features: string[];
  benefits: string[];
  service_href: string;
  color: string;
}

interface ServicesGridProps {
  services: Service[];
}

export default function ServicesGrid({ services }: ServicesGridProps) {
  return (
    <div className={styles.container}>
      {services.map((service, index) => (
        <motion.div
          key={service.id}
          className={`${styles.serviceCard} ${
            index % 2 === 1 ? styles.reverse : ""
          }`}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.6,
            delay: index * 0.15,
          }}
        >
          <div className={styles.serviceImage}>
            <ImageWithFallback
              src={service.image}
              alt={service.title}
              width={600}
              height={400}
              className={styles.image}
            />

            <div className={styles.imageOverlay}>
              <div
                className={styles.iconWrapper}
                style={{ backgroundColor: service.color }}
              >
                {service.icon}
              </div>
            </div>
          </div>

          <div className={styles.serviceContent}>
            <div className={styles.serviceHeader}>
              <span
                className={styles.serviceSubtitle}
                style={{ color: service.color }}
              >
                {service.subtitle}
              </span>

              <h2>{service.title}</h2>

              <p className={styles.serviceDescription}>{service.description}</p>
            </div>

            <div className={styles.serviceDetails}>
              <div className={styles.featuresSection}>
                <h3>What We Offer</h3>

                <ul className={styles.featuresList}>
                  {service.features.map((feature) => (
                    <li key={feature}>
                      <CheckCircle size={16} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className={styles.benefitsSection}>
                <h3>Key Benefits</h3>

                <ul className={styles.benefitsList}>
                  {service.benefits.map((benefit) => (
                    <li key={benefit}>
                      <ArrowRight size={16} />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className={styles.serviceActions}>
              <Link
                href={service.service_href}
                className={styles.secondaryButton}
              >
                How We Do It
              </Link>

              <Link
                href="/quote"
                className={styles.primaryButton}
                style={{ backgroundColor: service.color }}
              >
                Get Quote
                <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
