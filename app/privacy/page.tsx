// /app/privacy/page.tsx
import type { Metadata } from 'next';
import { siteConfig } from '@/data/site.config';
import styles from "./Privacy.module.scss";

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'Read the Infield Innovations privacy policy — how we collect, use, and safeguard your personal information when you use our website and services.',
  keywords: [
    "privacy policy Kenya",
    "data protection Kenya",
    "Infield Innovations privacy",
  ],
  alternates: {
    canonical: '/privacy',
  },
  openGraph: {
    title: `Privacy Policy | ${siteConfig.name}`,
    description:
      'How we collect, use, and safeguard your personal information when you use our website and services.',
    url: `${siteConfig.url}/privacy`,
    siteName: siteConfig.name,
    type: 'website',
  },
  robots: { index: false, follow: true },
};

export default function PrivacyPage() {
  return (
    <main className={styles.privacy}>
      <div className={styles.container}>
        <h1 className={styles.title}>Privacy Policy</h1>
        <p className={styles.updated}>Last Updated: March 2026</p>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Introduction</h2>
          <p className={styles.text}>
            We respect your privacy and are committed to protecting the personal
            information you share with us through our website. This policy
            explains how we collect, use and safeguard your data.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Information We Collect</h2>
          <ul className={styles.list}>
            <li className={styles.listItem}>
              Name and contact details (email, phone)
            </li>
            <li className={styles.listItem}>
              Information submitted through contact or quote forms
            </li>
            <li className={styles.listItem}>
              Technical data such as browser type and IP address
            </li>
            <li className={styles.listItem}>
              Website usage information for analytics
            </li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>How We Use Your Information</h2>
          <p className={styles.text}>Your information may be used to:</p>
          <ul className={styles.list}>
            <li className={styles.listItem}>
              Respond to enquiries or service requests
            </li>
            <li className={styles.listItem}>
              Provide quotations or service information
            </li>
            <li className={styles.listItem}>
              Improve our website and services
            </li>
            <li className={styles.listItem}>
              Communicate updates about projects or services
            </li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Data Protection</h2>
          <p className={styles.text}>
            We implement appropriate security measures to protect your personal
            data against unauthorized access, alteration or disclosure.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Third-Party Services</h2>
          <p className={styles.text}>
            Our website may use third-party services such as analytics tools to
            help improve our services. These providers may collect anonymized
            usage data.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Your Rights</h2>
          <p className={styles.text}>
            You may request access, correction, or deletion of your personal
            information by contacting us directly.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Contact Us</h2>
          <p className={styles.text}>
            If you have questions about this Privacy Policy, please contact us
            through the website contact page.
          </p>
        </section>
      </div>
    </main>
  );
}
