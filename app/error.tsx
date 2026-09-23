"use client";

// ============================================
// Error Boundary Page
// ============================================

import { useEffect } from "react";
import {
  CircleAlert as AlertCircle,
  RotateCcw,
  Dome as Home,
} from "lucide-react";
import { LinkButton } from "@/components/ui/LinkButton";
import { Button } from "@/components/ui/Button";
import styles from "./error.module.scss";

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    console.error("Application error:", error);
  }, [error]);

  return (
    <div className={styles.container} role="alert" aria-live="assertive">
      <div className={styles.content}>
        <div className={styles.iconWrapper} aria-hidden="true">
          <AlertCircle size={48} />
        </div>
        <span className={styles.errorCode} aria-hidden="true">
          500
        </span>
        <h1 className={styles.title}>Something Went Wrong</h1>
        <p className={styles.description}>
          We encountered an unexpected error. Our team has been notified. Please
          try again or return to the home page.
        </p>
        {error.digest && (
          <p className={styles.digest}>Error ID: {error.digest}</p>
        )}
        <div className={styles.actions}>
          <Button size="lg" onClick={reset} leftIcon={RotateCcw}>
            Try Again
          </Button>
          <LinkButton href="/" variant="outline" size="lg" leftIcon={Home}>
            Back to Home
          </LinkButton>
        </div>
      </div>
    </div>
  );
}
