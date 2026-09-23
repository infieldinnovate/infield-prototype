// "use client";

"use client";

import { certificationsList } from "@/data/certifications";
import styles from "./CertificationsSection.module.scss";

export function CertificationsSection() {
  return (
    <section className={styles.section} aria-labelledby="cert-heading">
      <div className={styles.container}>
        <p className={styles.eyebrow}>Trust & Compliance</p>

        <h2 id="cert-heading" className={styles.title}>
          Certifications & Licences
        </h2>

        <p className={styles.description}>
          We hold the certifications and licences that matter — proof of our
          commitment to quality, safety, and professional standards.
        </p>

        <div className={styles.grid}>
          {certificationsList.map((cert) => {
            return (
              <div key={cert.id} className={styles.card}>
                <div className={styles.iconWrap}>
                  <cert.icon size={28} strokeWidth={1.8} />
                </div>

                <div className={styles.content}>
                  <h3 className={styles.name}>{cert.name}</h3>

                  <p className={styles.issuer}>{cert.issuer}</p>

                  <p className={styles.desc}>{cert.description}</p>

                  <span className={styles.yearBadge}>Since {cert.year}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
