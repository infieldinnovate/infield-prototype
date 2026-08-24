"use client";

import { useState, useCallback } from "react";
import { ShieldCheck, Search, QrCode, TriangleAlert as AlertTriangle, Hash, Phone } from "lucide-react";
import VerificationResult from "./VerificationResult";
import QrScanner from "./QrScanner";
import {
  lookupEmployee,
  lookupEmployeeByNumber,
  lookupEmployeeByPhone,
  type LookupResult,
} from "@/data/teamData";
import styles from "./page.module.scss";

type LookupMethod = "code" | "phone";

interface MethodConfig {
  label: string;
  icon: typeof Hash;
  placeholder: string;
  maxLength: number;
  transform: (v: string) => string;
}

const methodConfig: Record<LookupMethod, MethodConfig> = {
  code: {
    label: "Employee No.",
    icon: Hash,
    placeholder: "e.g. EMP-001 or 8XJ4PKM2",
    maxLength: 20,
    transform: (v) => v.toUpperCase(),
  },
  phone: {
    label: "Phone No.",
    icon: Phone,
    placeholder: "e.g. +254712345678",
    maxLength: 20,
    transform: (v) => v,
  },
};

export default function VerificationPage() {
  const [method, setMethod] = useState<LookupMethod>("code");
  const [inputValue, setInputValue] = useState("");
  const [result, setResult] = useState<LookupResult | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [showScanner, setShowScanner] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const performLookup = useCallback(
    (value: string, activeMethod: LookupMethod) => {
      const trimmed = value.trim();
      if (!trimmed) {
        setError("Please enter a value to verify.");
        return;
      }
      setError(null);
      setIsLoading(true);

      let lookupResult: LookupResult;

      if (activeMethod === "phone") {
        lookupResult = lookupEmployeeByPhone(trimmed);
      } else {
        // Try employee number first, then verification code
        lookupResult = lookupEmployeeByNumber(trimmed);
        if (!lookupResult.found) {
          lookupResult = lookupEmployee(trimmed);
        }
      }

      setResult(lookupResult);
      setIsLoading(false);
    },
    [],
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    performLookup(inputValue, method);
  };

  const handleScan = useCallback(
    (scannedCode: string) => {
      setInputValue(scannedCode);
      setMethod("code");
      performLookup(scannedCode, "code");
    },
    [performLookup],
  );

  const switchMethod = (newMethod: LookupMethod) => {
    setMethod(newMethod);
    setInputValue("");
    setError(null);
    setResult(null);
  };

  const config = methodConfig[method];
  const MethodIcon = config.icon;

  return (
    <div className={styles.page}>
      <header className={styles.hero}>
        <div className={styles.heroContent}>
          <div className={styles.heroIcon}>
            <ShieldCheck size={36} />
          </div>
          <h1 className={styles.heroTitle}>Employee Verification</h1>
          <p className={styles.heroSubtitle}>
            Verify employee credentials by employee number, phone number, or QR code.
          </p>
        </div>
      </header>

      <main className={styles.main}>
        <div className={styles.card}>
          {/* Method toggle */}
          <div className={styles.methodToggle}>
            <button
              type="button"
              className={`${styles.methodBtn} ${method === "code" ? styles.methodBtnActive : ""}`}
              onClick={() => switchMethod("code")}
            >
              <Hash size={16} />
              Employee No.
            </button>
            <button
              type="button"
              className={`${styles.methodBtn} ${method === "phone" ? styles.methodBtnActive : ""}`}
              onClick={() => switchMethod("phone")}
            >
              <Phone size={16} />
              Phone No.
            </button>
          </div>

          {/* Input */}
          <form onSubmit={handleSubmit} className={styles.inputSection}>
            <label className={styles.inputLabel} htmlFor="verification-input">
              <Search size={14} />
              {method === "phone" ? "Enter Phone Number" : "Enter Employee Number or Code"}
            </label>
            <div className={styles.inputWrap}>
              <div className={styles.inputIconWrap}>
                <MethodIcon size={18} className={styles.inputIcon} />
                <input
                  id="verification-input"
                  type="text"
                  inputMode={method === "phone" ? "tel" : "text"}
                  className={`${styles.input} ${error ? styles.inputError : ""}`}
                  placeholder={config.placeholder}
                  value={inputValue}
                  onChange={(e) => {
                    setInputValue(config.transform(e.target.value));
                    setError(null);
                  }}
                  maxLength={config.maxLength}
                  autoComplete="off"
                  autoFocus
                />
              </div>
              <button
                type="submit"
                className={styles.verifyBtn}
                disabled={isLoading || !inputValue.trim()}
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

          {/* QR section */}
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
      </main>

      {/* Result modal */}
      {result && (
        <VerificationResult
          result={result}
          onClose={() => setResult(null)}
        />
      )}

      {/* QR Scanner overlay */}
      {showScanner && (
        <QrScanner onScan={handleScan} onClose={() => setShowScanner(false)} />
      )}
    </div>
  );
}
