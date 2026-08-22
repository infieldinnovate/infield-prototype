// components\sections\IndustriesPreview.tsx

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { industries } from "@/data/industries";
import styles from "./IndustriesPreview.module.scss";

export function IndustriesPreview() {
  const preview = industries.slice(0, 6);

  return (
    <section className={styles.section} aria-labelledby="industries-heading">
      <div className={styles.container}>
        <p className={styles.eyebrow}>Who We Serve</p>

        <h2 id="industries-heading" className={styles.title}>
          Industries We Serve
        </h2>

        <p className={styles.description}>
          From homes to hospitals, farms to factories — we deliver engineering
          solutions tailored to every sector.
        </p>

        <div className={styles.grid}>
          {preview.map((industry) => {
            return (
              <Link
                key={industry.id}
                href={`/services/${industry.serviceSlug}`}
                className={styles.card}
              >
                <div className={styles.iconWrap}>
                  <industry.icon size={28} strokeWidth={1.8} />
                </div>

                <h3 className={styles.name}>{industry.name}</h3>

                <p className={styles.desc}>{industry.description}</p>

                <span className={styles.link}>
                  Learn more
                  <ArrowRight size={14} />
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
