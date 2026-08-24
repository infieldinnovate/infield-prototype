"use client";

import { siteConfig } from "@/data/site.config";
import { AutoScroll } from "@/components/ui/AutoScroll";
import styles from "./BrandsCarousel.module.scss";

export function BrandsCarousel() {
  const brandItems = siteConfig.brands.map((brand, index) => (
    <div className={styles.brandCard} key={index}>
      <span className={styles.brandName}>{brand}</span>
    </div>
  ));

  return (
    <section className={styles.section} aria-labelledby="brands-heading">
      <div className={styles.container}>
        <p className={styles.eyebrow}>Trusted Partners</p>
        <h2 id="brands-heading" className={styles.title}>
          Brands We Work With
        </h2>
        <p className={styles.description}>
          We partner with the world&apos;s leading manufacturers to deliver
          reliable, high-quality solutions.
        </p>

        <AutoScroll
          items={brandItems}
          direction="right"
          speed={35}
          showNavButtons={true}
          pauseOnHover={true}
        />
      </div>
    </section>
  );
}
