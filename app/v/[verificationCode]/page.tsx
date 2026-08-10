import { ShieldCheck, ChevronLeft } from 'lucide-react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import VerificationResult from '../VerificationResult';
import { lookupEmployee } from '../data';
import styles from '../page.module.scss';

interface PageProps {
  params: Promise<{ verificationCode: string }>;
}

export default async function VerificationCodePage({ params }: PageProps) {
  const { verificationCode } = await params;
  const result = lookupEmployee(verificationCode);

  if (!result.found) {
    notFound();
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

        <VerificationResult result={result} />
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
