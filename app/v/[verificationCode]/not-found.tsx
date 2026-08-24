'use client';

import { ShieldCheck, ChevronLeft } from 'lucide-react';
import Link from 'next/link';
import VerificationResult from '../VerificationResult';
import styles from '../page.module.scss';

export default function VerificationNotFound() {
  return (
    <div className={styles.page}>
      <header className={styles.hero}>
        <div className={styles.heroContent}>
          <div className={styles.heroIcon}>
            <ShieldCheck size={36} />
          </div>
          <h1 className={styles.heroTitle}>Employee Verification</h1>
          <p className={styles.heroSubtitle}>
            Verification result for the requested code
          </p>
        </div>
      </header>

      <main className={styles.main}>
        <Link href="/v" className={styles.backBtn} style={{ alignSelf: 'flex-start' }}>
          <ChevronLeft size={18} />
          Back to Verification
        </Link>
      </main>

      <footer className={styles.footer}>
        <p>
          Infield Innovations Ltd. Employee Verification Portal.
          <br />
          For assistance, contact your HR administrator.
        </p>
      </footer>

      <VerificationResult result={{ found: false, employee: null }} />
    </div>
  );
}
