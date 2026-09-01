"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ImageWithFallback } from "@/components/ui/ImageWithFallback";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { ServiceIcons } from "@/data/service-icons";
import { SERVICES } from "@/data/services";
import styles from "./page.module.scss";

export default function ServicesPageClient() {
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroBg} aria-hidden="true" />
        <div className={styles.container}>
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Services" },
            ]}
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

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.servicesGrid}>
            {SERVICES.map((service, index) => {
              const Icon = ServiceIcons[service.icon];
              return (
                <motion.article
                  key={service.slug}
                  className={styles.serviceCard}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  whileHover={{ y: -10 }}
                >
                  <div className={styles.cardImageWrap}>
                    <ImageWithFallback
                      src={service.image}
                      alt={service.name}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className={styles.cardImage}
                    />
                    <div className={styles.cardOverlay} />
                    <div
                      className={styles.cardIconWrap}
                      style={{ backgroundColor: service.color }}
                    >
                      <Icon size={32} strokeWidth={1.8} />
                    </div>
                    <span className={styles.cardIndex}>
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <div className={styles.cardBody}>
                    <h3 className={styles.cardTitle}>{service.name}</h3>
                    <p className={styles.cardTagline}>{service.tagline}</p>
                    <Link
                      href={`/services/${service.slug}`}
                      className={styles.cardLink}
                      style={{ backgroundColor: service.color }}
                    >
                      Explore Service
                      <ArrowRight size={16} />
                    </Link>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
