"use client";

import {
  ShieldCheck,
  ShieldAlert,
  ShieldX,
  XCircle,
  User,
  Briefcase,
  Users,
  Hash,
  Building2,
  ArrowLeft,
} from "lucide-react";
import Link from "next/link";
import type { Employee, LookupResult } from "./data";
import styles from "./page.module.scss";

interface VerificationResultProps {
  result: LookupResult;
}

export default function VerificationResult({
  result,
}: VerificationResultProps) {
  if (!result.found) {
    return <NotFound />;
  }

  return <EmployeeCard employee={result.employee} />;
}

function EmployeeCard({ employee }: { employee: Employee }) {
  const statusConfig = {
    Active: {
      badge: styles.statusBadgeVerified,
      header: styles.resultHeaderVerified,
      label: "VERIFIED",
      icon: ShieldCheck,
    },
    Suspended: {
      badge: styles.statusBadgeSuspended,
      header: styles.resultHeaderSuspended,
      label: "SUSPENDED",
      icon: ShieldAlert,
    },
    Expired: {
      badge: styles.statusBadgeExpired,
      header: styles.resultHeaderExpired,
      label: "EXPIRED",
      icon: ShieldX,
    },
  };

  const config = statusConfig[employee.status];
  const StatusIcon = config.icon;

  return (
    <div className={styles.resultCard}>
      {/* Header with status */}
      <div className={`${styles.resultHeader} ${config.header}`}>
        <div>
          <div className={`${styles.statusBadge} ${config.badge}`}>
            <StatusIcon size={16} />
            {config.label}
          </div>
        </div>
      </div>

      {/* Photo */}
      <div className={styles.resultPhotoWrap}>
        {employee.photo ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={employee.photo}
            alt={employee.fullName}
            className={styles.resultPhoto}
          />
        ) : (
          <div className={styles.resultPhotoPlaceholder}>
            <User size={48} />
          </div>
        )}
      </div>

      <div className={styles.resultBody}>
        {/* Name */}
        <h2 className={styles.resultName}>{employee.fullName}</h2>

        {/* Details */}
        <div className={styles.resultDetails}>
          <DetailRow
            label="Verification Code"
            value={employee.verificationCode}
            code
          >
            <Hash size={14} />
          </DetailRow>
          <DetailRow label="Job Title" value={employee.jobTitle}>
            <Briefcase size={14} />
          </DetailRow>
          <DetailRow label="Department" value={employee.department}>
            <Users size={14} />
          </DetailRow>
          <DetailRow label="Status" value={employee.status}>
            <StatusIcon size={14} />
          </DetailRow>
        </div>
      </div>
    </div>
  );
}

function DetailRow({
  label,
  value,
  code,
  children,
}: {
  label: string;
  value: string;
  code?: boolean;
  children?: React.ReactNode;
}) {
  return (
    <div className={styles.detailRow}>
      <div className={styles.detailRowLabel}>
        {children && <span style={{ marginRight: "0.35rem" }}>{children}</span>}
        {label}
      </div>
      <div className={code ? styles.detailRowCode : styles.detailRowValue}>
        {value}
      </div>
    </div>
  );
}

function NotFound() {
  return (
    <div className={styles.resultCard}>
      <div className={`${styles.resultHeader} ${styles.resultHeaderNotFound}`}>
        <div className={`${styles.statusBadge} ${styles.statusBadgeNotFound}`}>
          <XCircle size={16} />
          EMPLOYEE NOT VERIFIED
        </div>
      </div>
      <div className={styles.notFound}>
        <div className={styles.notFoundIcon}>
          <ShieldX size={36} />
        </div>
        <h2 className={styles.notFoundTitle}>EMPLOYEE NOT VERIFIED</h2>
        <p className={styles.notFoundText}>
          The verification code you entered is invalid or does not exist in our
          system. Please check the code and try again, or contact your
          administrator for assistance.
        </p>
        <Link href="/v" className={styles.backBtn}>
          <ArrowLeft size={18} />
          Try Another Code
        </Link>
      </div>
    </div>
  );
}
