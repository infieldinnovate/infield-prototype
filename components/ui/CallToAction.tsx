"use client";

import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  ArrowRight,
  CircleCheck as CheckCircle,
} from "lucide-react";
import Link from "next/link";
import styles from "./CallToAction.module.scss";
import { SectionHeading } from "./SectionHeading";

const CallToAction = () => {
  const benefits = [
    "Free consultation and site visit",
    "Transparent pricing with no hidden costs",
    "Licensed and insured professionals",
    "Quality guarantee on all work",
  ];

  return (
    <section className={styles.ctaSection}>
      <div className={styles.container}>
        <div className={styles.content}>
          <motion.div
            className={styles.textContent}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <SectionHeading
              themeColor="light"
              title="Ready to Get Started?"
              description="
              Transform your property with our expert water and energy
              solutions. Contact us today for a free consultation."
            />

            <ul className={styles.benefitsList}>
              {benefits.map((benefit, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                >
                  <CheckCircle size={20} />
                  <span>{benefit}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            className={styles.actionContent}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className={styles.ctaCard}>
              <SectionHeading
                level="h3"
                title="Get Your Free Quote Today"
                description="Join 150+ satisfied customers who trust Infield Innovations"
              />

              <div className={styles.buttonGroup}>
                <Link href="/quote" className={styles.primaryButton}>
                  Request Quote
                  <ArrowRight size={20} />
                </Link>

                <div className={styles.contactOptions}>
                  <a href="tel:+254702393677" className={styles.contactButton}>
                    <Phone size={18} />
                    <span>Call Now</span>
                  </a>

                  <a
                    href="mailto:Infieldinnovations@gmail.com"
                    className={styles.contactButton}
                  >
                    <Mail size={18} />
                    <span>Email Us</span>
                  </a>
                </div>
              </div>

              <div className={styles.guarantee}>
                <div className={styles.guaranteeIcon}>✓</div>
                <div className={styles.guaranteeText}>
                  <strong>100% Satisfaction Guaranteed</strong>
                  <span>or your money back</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
