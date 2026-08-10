"use client";

import { motion } from "framer-motion";
import {
  CircleCheck as CheckCircle,
  ArrowRight,
  Phone,
  Mail,
  Clock,
  Shield,
  Award,
  TrendingUp,
} from "lucide-react";
import Link from "next/link";
import { ImageWithFallback } from "@/components/ui/ImageWithFallback";
import styles from "./ServiceDetail.module.scss";

interface ServiceDetailProps {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: React.ReactNode;
  image: string;
  features: string[];
  benefits: string[];
  color: string;
}

const ServiceDetail = ({
  id,
  title,
  subtitle,
  description,
  icon,
  image,
  features,
  benefits,
  color,
}: ServiceDetailProps) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <div className={styles.serviceDetail}>
      <motion.section
        className={styles.hero}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className={styles.heroImage}>
          <ImageWithFallback src={image} alt={title} fill className={styles.bgImage} />
          <div className={styles.overlay} />
        </div>

        <div className={styles.heroContent}>
          <motion.div
            className={styles.iconWrapper}
            style={{ backgroundColor: color }}
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, type: "spring" }}
          >
            {icon}
          </motion.div>

          <motion.h2
            className={styles.subtitle}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {subtitle}
          </motion.h2>

          <motion.h1
            className={styles.title}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            {title}
          </motion.h1>

          <motion.p
            className={styles.description}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            {description}
          </motion.p>

          <motion.div
            className={styles.ctaButtons}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
          >
            <Link href="/quote" className={styles.primaryBtn}>
              Get Free Quote
              <ArrowRight size={20} />
            </Link>
            <Link href="/contact" className={styles.secondaryBtn}>
              Contact Us
              <Phone size={20} />
            </Link>
          </motion.div>
        </div>
      </motion.section>

      <section className={styles.content}>
        <div className={styles.container}>
          <motion.div
            className={styles.features}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div
              className={styles.sectionHeader}
              variants={itemVariants}
            >
              <h2 className={styles.sectionTitle}>Our Services Include</h2>
              <div
                className={styles.titleUnderline}
                style={{ backgroundColor: color }}
              />
            </motion.div>

            <div className={styles.featureGrid}>
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className={styles.featureCard}
                  variants={itemVariants}
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <div
                    className={styles.featureIcon}
                    style={{ backgroundColor: `${color}20` }}
                  >
                    <CheckCircle size={24} style={{ color: color }} />
                  </div>
                  <p className={styles.featureText}>{feature}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className={styles.benefits}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div
              className={styles.sectionHeader}
              variants={itemVariants}
            >
              <h2 className={styles.sectionTitle}>Key Benefits</h2>
              <div
                className={styles.titleUnderline}
                style={{ backgroundColor: color }}
              />
            </motion.div>

            <div className={styles.benefitsList}>
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  className={styles.benefitItem}
                  variants={itemVariants}
                  whileHover={{ x: 10 }}
                  transition={{ duration: 0.3 }}
                >
                  <div
                    className={styles.benefitIcon}
                    style={{ backgroundColor: color }}
                  >
                    <TrendingUp size={20} />
                  </div>
                  <p className={styles.benefitText}>{benefit}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className={styles.whyChooseUs}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div
              className={styles.sectionHeader}
              variants={itemVariants}
            >
              <h2 className={styles.sectionTitle}>Why Choose Us</h2>
              <div
                className={styles.titleUnderline}
                style={{ backgroundColor: color }}
              />
            </motion.div>

            <div className={styles.whyGrid}>
              <motion.div
                className={styles.whyCard}
                variants={itemVariants}
                whileHover={{ y: -10 }}
              >
                <div
                  className={styles.whyIcon}
                  style={{ backgroundColor: `${color}20` }}
                >
                  <Shield size={40} style={{ color: color }} />
                </div>
                <h3 className={styles.whyTitle}>Licensed & Certified</h3>
                <p className={styles.whyText}>
                  All our technicians are fully licensed, certified, and insured
                  for your peace of mind.
                </p>
              </motion.div>

              <motion.div
                className={styles.whyCard}
                variants={itemVariants}
                whileHover={{ y: -10 }}
              >
                <div
                  className={styles.whyIcon}
                  style={{ backgroundColor: `${color}20` }}
                >
                  <Award size={40} style={{ color: color }} />
                </div>
                <h3 className={styles.whyTitle}>Quality Guaranteed</h3>
                <p className={styles.whyText}>
                  We use only premium materials and equipment, backed by
                  comprehensive warranties.
                </p>
              </motion.div>

              <motion.div
                className={styles.whyCard}
                variants={itemVariants}
                whileHover={{ y: -10 }}
              >
                <div
                  className={styles.whyIcon}
                  style={{ backgroundColor: `${color}20` }}
                >
                  <Clock size={40} style={{ color: color }} />
                </div>
                <h3 className={styles.whyTitle}>24/7 Support</h3>
                <p className={styles.whyText}>
                  Round-the-clock customer support and emergency services
                  available when you need us.
                </p>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            className={styles.cta}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className={styles.ctaContent} style={{ borderColor: color }}>
              <h2 className={styles.ctaTitle}>Ready to Get Started?</h2>
              <p className={styles.ctaText}>
                Contact us today for a free consultation and quote. Our experts
                are ready to help you with your {title.toLowerCase()} needs.
              </p>
              <div className={styles.ctaButtons}>
                <Link
                  href="/quote"
                  className={styles.ctaPrimary}
                  style={{ backgroundColor: color }}
                >
                  Request a Quote
                  <ArrowRight size={20} />
                </Link>
                <Link href="/contact" className={styles.ctaSecondary}>
                  <Mail size={20} />
                  Send Message
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetail;
