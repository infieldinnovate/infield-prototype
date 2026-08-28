"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, MapPin, Calendar, CircleCheck as CheckCircle2, TrendingUp } from "lucide-react";
import { ImageWithFallback } from "@/components/ui/ImageWithFallback";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { projects } from "@/data/projectStats";
import { ServiceIcons } from "@/data/service-icons";
import { AnimatedStats } from "@/components/sections/AnimatedStats";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

import styles from "./ProjectsHeroCarousel.module.scss";

const heroSlides = projects
  .filter((p) => p.featured)
  .slice(0, 3)
  .map((p) => ({
    id: p.id,
    title: p.title,
    category: p.category,
    county: p.county,
    completionDate: p.completionDate,
    challenge: p.challenge,
    results: p.results,
    image: p.gallery.find((g) => g.phase === "after")?.url || p.gallery[0]?.url,
    icon: p.category,
  }));

export default function ProjectsHeroCarousel() {
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
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop={true}
        className={styles.swiper}
      >
        {heroSlides.map((slide, index) => {
          const Icon = ServiceIcons[slide.icon] || CheckCircle2;
          return (
            <SwiperSlide key={slide.id}>
              <div className={styles.slide}>
                <div className={styles.slideImage}>
                  <ImageWithFallback
                    src={slide.image ?? ""}
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
                        { label: "Projects" },
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
                        className={styles.categoryBadge}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                      >
                        {slide.category}
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
                        {slide.challenge}
                      </motion.p>

                      <motion.div
                        className={styles.metaRow}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.9 }}
                      >
                        <span className={styles.metaItem}>
                          <MapPin size={16} />
                          {slide.county} County
                        </span>
                        <span className={styles.metaItem}>
                          <Calendar size={16} />
                          {slide.completionDate}
                        </span>
                      </motion.div>

                      <motion.div
                        className={styles.resultsRow}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 1 }}
                      >
                        {slide.results.slice(0, 3).map((result) => (
                          <span key={result} className={styles.resultChip}>
                            <TrendingUp size={14} />
                            {result}
                          </span>
                        ))}
                      </motion.div>

                      <motion.div
                        className={styles.buttons}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 1.1 }}
                      >
                        <Link href="/projects" className={styles.primaryButton}>
                          View All Projects
                          <ArrowRight size={20} />
                        </Link>
                        <Link href="/quote" className={styles.secondaryButton}>
                          Start Your Project
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

      <div className={styles.statsBar}>
        <AnimatedStats theme="light" scroll />
      </div>
    </section>
  );
}
