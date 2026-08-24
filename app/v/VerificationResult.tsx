"use client";

import { useEffect } from "react";
import {
  ShieldCheck,
  ShieldAlert,
  ShieldX,
  Circle as XCircle,
  User,
  Briefcase,
  Users,
  Hash,
  Building2,
  ArrowLeft,
  X,
  Phone,
  IdCard,
} from "lucide-react";
import Link from "next/link";
import type { Employee, LookupResult } from "@/data/teamData";
import styles from "./page.module.scss";

interface VerificationResultProps {
  result: LookupResult;
  onClose?: () => void;
}

export default function VerificationResult({
  result,
  onClose,
}: VerificationResultProps) {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape" && onClose) onClose();
    };
    document.addEventListener("keydown", handleEsc);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div
        className={styles.modalContent}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className={styles.modalCloseBtn}
          onClick={onClose}
          aria-label="Close"
        >
          <X size={20} />
        </button>
        {!result.found ? <NotFound onClose={onClose} /> : <EmployeeCard employee={result.employee} />}
      </div>
    </div>
  );
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
      <div className={`${styles.resultHeader} ${config.header}`}>
        <div>
          <div className={`${styles.statusBadge} ${config.badge}`}>
            <StatusIcon size={16} />
            {config.label}
          </div>
        </div>
      </div>

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
        <h2 className={styles.resultName}>{employee.fullName}</h2>

        <div className={styles.resultDetails}>
          <DetailRow label="Employee No." value={employee.employeeNumber}>
            <IdCard size={14} />
          </DetailRow>
          <DetailRow label="Verification Code" value={employee.verificationCode} code>
            <Hash size={14} />
          </DetailRow>
          <DetailRow label="Job Title" value={employee.jobTitle}>
            <Briefcase size={14} />
          </DetailRow>
          <DetailRow label="Department" value={employee.department}>
            <Users size={14} />
          </DetailRow>
          <DetailRow label="Phone" value={employee.phone}>
            <Phone size={14} />
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

function NotFound({ onClose }: { onClose?: () => void }) {
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
          The information you entered does not match any employee in our
          system. Please check the details and try again, or contact your
          administrator for assistance.
        </p>
        <button
          type="button"
          className={styles.backBtn}
          onClick={onClose}
        >
          <ArrowLeft size={18} />
          Try Again
        </button>
      </div>
    </div>
  );
}
