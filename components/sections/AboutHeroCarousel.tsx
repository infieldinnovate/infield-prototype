"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Target, Eye, Heart, Users, Award, ShieldCheck, Briefcase, CalendarDays, CircleCheck as CheckCircle2 } from "lucide-react";
import { ImageWithFallback } from "@/components/ui/ImageWithFallback";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { COMMON_IMPACT_STATS } from "@/data/impactStats";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

import styles from "./AboutHeroCarousel.module.scss";

const slides = [
  {
    id: "story",
    icon: Briefcase,
    eyebrow: "Our Story",
    title: "Engineering Excellence Since 2009",
    description:
      "From a three-person operation to a multi-disciplinary engineering company serving thousands of satisfied customers across Kenya — we combine technical expertise with genuine care for our community.",
    image:
      "https://images.pexels.com/photos/13005576/pexels-photo-13005576.jpeg?auto=compress&cs=tinysrgb&w=1600",
    stats: [
      { icon: CalendarDays, value: "15+", label: "Years" },
      { icon: CheckCircle2, value: "150+", label: "Projects" },
      { icon: Users, value: "28", label: "Experts" },
    ],
    buttonText: "Explore Our Work",
    buttonLink: "/projects",
  },
  {
    id: "mission",
    icon: Target,
    eyebrow: "Our Mission",
    title: "Sustainable Water & Energy for Every Client",
    description:
      "To provide innovative, reliable, and sustainable water and energy solutions that improve the quality of life for our clients while contributing to environmental conservation.",
    image:
      "https://images.pexels.com/photos/371900/pexels-photo-371900.jpeg?auto=compress&cs=tinysrgb&w=1600",
    stats: [
      { icon: Award, value: "99%", label: "Satisfaction" },
      { icon: ShieldCheck, value: "27+", label: "Counties" },
      { icon: CheckCircle2, value: "120+", label: "Clients" },
    ],
    buttonText: "Our Services",
    buttonLink: "/services/solar",
  },
  {
    id: "team",
    icon: Users,
    eyebrow: "Our People",
    title: "28 Certified Professionals, One Standard",
    description:
      "Our team of certified technicians, engineers, and specialists brings expertise, professionalism, and a commitment to quality to every project across Kenya.",
    image:
      "https://images.pexels.com/photos/8961065/pexels-photo-8961065.jpeg?auto=compress&cs=tinysrgb&w=1600",
    stats: [
      { icon: Users, value: "28", label: "Technicians" },
      { icon: Award, value: "6", label: "Certifications" },
      { icon: ShieldCheck, value: "100%", label: "Compliant" },
    ],
    buttonText: "Meet the Team",
    buttonLink: "/about",
  },
  {
    id: "values",
    icon: Heart,
    eyebrow: "Our Values",
    title: "Integrity, Quality & Customer-First Thinking",
    description:
      "We treat every project as if it were our own. Integrity, quality, customer-first thinking, and continuous improvement guide everything we do.",
    image:
      "https://images.pexels.com/photos/4226796/pexels-photo-4226796.jpeg?auto=compress&cs=tinysrgb&w=1600",
    stats: [
      { icon: Heart, value: "100%", label: "Dedication" },
      { icon: ShieldCheck, value: "ISO", label: "9001" },
      { icon: Award, value: "EPRA", label: "Licensed" },
    ],
    buttonText: "Get a Free Quote",
    buttonLink: "/quote",
  },
];

export default function AboutHeroCarousel() {
  return (
    <section className={`${styles.heroSection} ${styles.swiperButtons}`}>
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        spaceBetween={0}
        slidesPerView={1}
        effect="fade"
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        pagination={{ clickable: true, el: ".pagination-buttons" }}
        autoplay={{ delay: 5500, disableOnInteraction: false }}
        loop={true}
        className={styles.swiper}
      >
        {slides.map((slide, index) => {
          const Icon = slide.icon;
          return (
            <SwiperSlide key={slide.id}>
              <div className={styles.slide}>
                <div className={styles.slideImage}>
                  <ImageWithFallback
                    src={slide.image}
                    alt={slide.title}
                    fill
                    priority={index === 0}
                    sizes="100vw"
                    className={styles.backgroundImage}
                  />
                  <div className={styles.overlay} />
                </div>

                <div className={styles.slideContent}>
                  <div className={styles.container}>
                    <Breadcrumbs
                      items={[
                        { label: "Home", href: "/" },
                        { label: "About" },
                      ]}
                      theme="dark"
                    />

                    <motion.div
                      className={styles.content}
                      initial={{ opacity: 0, y: 50 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.2 }}
                    >
                      <motion.div
                        className={styles.iconWrapper}
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                      >
                        <Icon size={48} strokeWidth={1.5} />
                      </motion.div>

                      <motion.span
                        className={styles.eyebrow}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                      >
                        {slide.eyebrow}
                      </motion.span>

                      <motion.h1
                        className={styles.title}
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                      >
                        {slide.title}
                      </motion.h1>

                      <motion.p
                        className={styles.description}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.8 }}
                      >
                        {slide.description}
                      </motion.p>

                      <motion.div
                        className={styles.statsRow}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.9 }}
                      >
                        {slide.stats.map((stat) => {
                          const StatIcon = stat.icon;
                          return (
                            <div key={stat.label} className={styles.statItem}>
                              <span className={styles.statIcon}>
                                <StatIcon size={18} />
                              </span>
                              <span className={styles.statValue}>{stat.value}</span>
                              <span className={styles.statLabel}>{stat.label}</span>
                            </div>
                          );
                        })}
                      </motion.div>

                      <motion.div
                        className={styles.buttons}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 1 }}
                      >
                        <Link href={slide.buttonLink} className={styles.primaryButton}>
                          {slide.buttonText}
                          <ArrowRight size={20} />
                        </Link>
                        <Link href="/contact" className={styles.secondaryButton}>
                          Contact Us
                        </Link>
                      </motion.div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>

      <div className="swiper-button-prev"></div>
      <div className="swiper-button-next"></div>
      <div className="swiper-pagination pagination-buttons"></div>
    </section>
  );
}
