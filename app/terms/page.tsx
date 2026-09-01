// /app/terms/page.tsx
import type { Metadata } from 'next';
import { siteConfig } from '@/data/site.config';
import styles from "./Terms.module.scss";

export const metadata: Metadata = {
  title: 'Terms of Service',
  description:
    'Read the Infield Innovations terms of service — the terms and conditions governing use of our website and engineering services.',
  keywords: [
    "terms of service Kenya",
    "terms and conditions Kenya",
    "Infield Innovations terms",
  ],
  alternates: {
    canonical: '/terms',
  },
  openGraph: {
    title: `Terms of Service | ${siteConfig.name}`,
    description:
      'The terms and conditions governing use of our website and engineering services.',
    url: `${siteConfig.url}/terms`,
    siteName: siteConfig.name,
    type: 'website',
  },
  robots: { index: false, follow: true },
};

export default function TermsPage() {
  return (
    <main className={styles.terms}>
      <div className={styles.container}>
        <h1 className={styles.title}>Terms of Service</h1>
        <p className={styles.updated}>Last Updated: March 2026</p>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Acceptance of Terms</h2>
          <p className={styles.text}>
            By accessing and using this website, you agree to comply with these
            Terms of Service and all applicable laws.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Services Provided</h2>
          <p className={styles.text}>
            Our company provides services including solar installation,
            plumbing, borehole drilling, irrigation systems, and electrical
            installations.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Use of Website</h2>
          <ul className={styles.list}>
            <li className={styles.listItem}>
              Do not misuse or attempt to disrupt the website
            </li>
            <li className={styles.listItem}>
              Do not copy or reproduce content without permission
            </li>
            <li className={styles.listItem}>
              Provide accurate information when submitting forms
            </li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Intellectual Property</h2>
          <p className={styles.text}>
            All website content including images, text and designs are the
            property of our company unless otherwise stated.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Limitation of Liability</h2>
          <p className={styles.text}>
            We are not responsible for any damages arising from the use of this
            website or reliance on the information provided.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Changes to Terms</h2>
          <p className={styles.text}>
            We may update these terms at any time. Continued use of the website
            constitutes acceptance of the updated terms.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Contact</h2>
          <p className={styles.text}>
            For questions about these terms, please contact us through our
            official contact page.
          </p>
        </section>
      </div>
    </main>
  );
}
