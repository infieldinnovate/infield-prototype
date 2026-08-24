"use client";

import { useState, useCallback } from "react";
import { ShieldCheck, Search, QrCode, AlertTriangle } from "lucide-react";
import VerificationResult from "./VerificationResult";
import QrScanner from "./QrScanner";
import { lookupEmployee, type LookupResult } from "@/data/teamData";
import styles from "./page.module.scss";

export default function VerificationPage() {
  const [code, setCode] = useState("");
  const [result, setResult] = useState<LookupResult | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [showScanner, setShowScanner] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const performLookup = useCallback((verificationCode: string) => {
    const trimmed = verificationCode.trim();
    if (!trimmed) {
      setError("Please enter a verification code.");
      return;
    }
    setError(null);
    setIsLoading(true);
    const lookupResult = lookupEmployee(trimmed);
    setResult(lookupResult);
    setIsLoading(false);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    performLookup(code);
  };

  const handleScan = useCallback(
    (scannedCode: string) => {
      setCode(scannedCode);
      performLookup(scannedCode);
    },
    [performLookup],
  );

  return (
    <div className={styles.page}>
      {/* Hero */}
      <header className={styles.hero}>
        <div className={styles.heroContent}>
          <div className={styles.heroIcon}>
            <ShieldCheck size={36} />
          </div>
          <h1 className={styles.heroTitle}>Employee Verification</h1>
          <p className={styles.heroSubtitle}>
            Verify employee credentials using their unique verification code.
          </p>
        </div>
      </header>

      {/* Main content */}
      <main className={styles.main}>
        <div className={styles.card}>
          <form onSubmit={handleSubmit} className={styles.inputSection}>
            <label className={styles.inputLabel} htmlFor="verification-code">
              <Search size={14} />
              Enter Verification Code
            </label>
            <div className={styles.inputWrap}>
              <input
                id="verification-code"
                type="text"
                className={`${styles.input} ${error ? styles.inputError : ""}`}
                placeholder="e.g. 8XJ4PKM2"
                value={code}
                onChange={(e) => {
                  setCode(e.target.value.toUpperCase());
                  setError(null);
                }}
                maxLength={20}
                autoComplete="off"
                autoFocus
              />
              <button
                type="submit"
                className={styles.verifyBtn}
                disabled={isLoading || !code.trim()}
              >
                <Search size={18} />
                {isLoading ? "Verifying..." : "Verify"}
              </button>
            </div>
            {error && (
              <div className={styles.errorMsg}>
                <AlertTriangle size={16} />
                {error}
              </div>
            )}
          </form>

          <div className={styles.qrSection}>
            <span className={styles.qrLabel}>Or scan a QR code</span>
            <button
              type="button"
              className={styles.qrBtn}
              onClick={() => setShowScanner(true)}
            >
              <QrCode size={18} />
              Scan QR Code
            </button>
          </div>
        </div>

        {/* Result */}
        {result && <VerificationResult result={result} />}
      </main>

      {/* QR Scanner overlay */}
      {showScanner && (
        <QrScanner onScan={handleScan} onClose={() => setShowScanner(false)} />
      )}
    </div>
  );
}
