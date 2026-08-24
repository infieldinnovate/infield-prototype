'use client';

import { ShieldCheck, ChevronLeft } from 'lucide-react';
import Link from 'next/link';
import VerificationResult from '../VerificationResult';
import { lookupEmployee } from '@/data/teamData';
import styles from '../page.module.scss';

interface PageProps {
  params: Promise<{ verificationCode: string }>;
}

export default function VerificationCodePage({ params }: PageProps) {
  // Client component wrapper — uses the promise from params
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { verificationCode } = useAwaited(params);
  const result = lookupEmployee(verificationCode);

  if (!result.found) {
    return (
      <div className={styles.page}>
        <header className={styles.hero}>
          <div className={styles.heroContent}>
            <div className={styles.heroIcon}>
              <ShieldCheck size={36} />
            </div>
            <h1 className={styles.heroTitle}>Employee Verification</h1>
            <p className={styles.heroSubtitle}>
              Verification result for code {verificationCode.toUpperCase()}
            </p>
          </div>
        </header>
        <main className={styles.main}>
          <Link href="/v" className={styles.backBtn} style={{ alignSelf: 'flex-start' }}>
            <ChevronLeft size={18} />
            Back to Verification
          </Link>
          <VerificationResult result={{ found: false, employee: null }} />
        </main>
        <footer className={styles.footer}>
          <p>
            Infield Innovations Ltd. Employee Verification Portal.
            <br />
            For assistance, contact your HR administrator.
          </p>
        </footer>
      </div>
    );
  }

  return (
    <div className={styles.page}>
      <header className={styles.hero}>
        <div className={styles.heroContent}>
          <div className={styles.heroIcon}>
            <ShieldCheck size={36} />
          </div>
          <h1 className={styles.heroTitle}>Employee Verification</h1>
          <p className={styles.heroSubtitle}>
            Verification result for code {verificationCode.toUpperCase()}
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
      <VerificationResult result={result} />
    </div>
  );
}

// Small helper to await params in a client component
import { useState, useEffect } from 'react';
function useAwaited<T>(promise: Promise<T>): T {
  const [value, setValue] = useState<T | null>(null);
  useEffect(() => {
    promise.then(setValue);
  }, [promise]);
  return value as T;
}
