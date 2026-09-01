"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  ArrowRight,
  CircleCheck as CheckCircle,
  Minus,
  Calendar,
  Star,
} from "lucide-react";
import Link from "next/link";
import styles from "./CallToAction.module.scss";
import { SectionHeading } from "./SectionHeading";
import { siteConfig } from "@/data/site.config";
import { COMMON_IMPACT_STATS } from "@/data/impactStats";
import { ReviewModal } from "@/components/forms/ReviewModal";

const CallToAction = () => {
  const [reviewOpen, setReviewOpen] = useState(false);
  const benefits = [
    "Free consultation and site visit",
    "Transparent pricing with no hidden costs",
    "Licensed and insured professionals",
    "Quality guarantee on all work",
  ];

  return (
    <>
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
              // icon={Minus}
              // eyebrow="Start a conversation"
              title="Let's build a solution that works for you."
              description="
              Transform your property with our expert water and energy
              solutions. Contact us today for a free consultation."
              centered={false}
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
                title="Get Your Free Consultation Now"
                description={`Join ${COMMON_IMPACT_STATS.clientsServed.value} satisfied customers who trust Infield Innovations`}
              />

              <div className={styles.buttonGroup}>
                <Link href="/quote" className={styles.primaryButton}>
                  Request Quote
                  <ArrowRight size={20} />
                </Link>

                <div className={styles.contactOptions}>
                  <a
                    href={`tel:${siteConfig.phone}`}
                    className={styles.contactButton}
                  >
                    <Phone size={18} />
                    <span>Call Now</span>
                  </a>

                  <Link
                    href="/contact?tab=visit#book-site-visit"
                    className={styles.contactButton}
                  >
                    <Calendar size={18} />
                    <span>Book Site Visit</span>
                  </Link>
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

        {/* Review Us Section */}
        <motion.div
          className={styles.reviewSection}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className={styles.reviewCard}>
            <div className={styles.reviewIcon}>
              <Star size={28} fill="currentColor" />
            </div>
            <div className={styles.reviewContent}>
              <h3 className={styles.reviewTitle}>Been happy with our work?</h3>
              <p className={styles.reviewDesc}>
                Share your experience with Infield Innovations. Your review
                helps us improve and helps others find the right partner.
              </p>
            </div>
            <button
              type="button"
              className={styles.reviewButton}
              onClick={() => setReviewOpen(true)}
            >
              <Star size={18} />
              Review Us
            </button>
          </div>
        </motion.div>
      </div>
    </section>

    <ReviewModal open={reviewOpen} onClose={() => setReviewOpen(false)} />
    </>
  );
};

export default CallToAction;
