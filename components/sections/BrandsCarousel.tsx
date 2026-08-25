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
        <h2 id="brands-heading" className={styles.title}>
          BRANDS WE WORK WITH
        </h2>
        <AutoScroll
          items={brandItems}
          direction="left"
          speed={35}
          showNavButtons={true}
          pauseOnHover={true}
        />
      </div>
    </section>
  );
}
