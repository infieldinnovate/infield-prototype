'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { X, ScanLine, Camera, AlertTriangle, Loader2 } from 'lucide-react';
import styles from './page.module.scss';

interface QrScannerProps {
  onScan: (code: string) => void;
  onClose: () => void;
}

export default function QrScanner({ onScan, onClose }: QrScannerProps) {
  const [isInitializing, setIsInitializing] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isScanning, setIsScanning] = useState(false);
  const scannerRef = useRef<HTMLDivElement>(null);
  const scannerInstance = useRef<InstanceType<typeof import('html5-qrcode').Html5Qrcode> | null>(null);
  const abortRef = useRef(false);

  const cleanup = useCallback(() => {
    abortRef.current = true;
    if (scannerInstance.current) {
      try {
        scannerInstance.current.stop();
      } catch {
        // already stopped
      }
      scannerInstance.current = null;
    }
  }, []);

  useEffect(() => {
    return () => {
      cleanup();
    };
  }, [cleanup]);

  useEffect(() => {
    let mounted = true;

    async function initScanner() {
      try {
        const { Html5Qrcode } = await import('html5-qrcode');
        if (!mounted || abortRef.current) return;

        if (!scannerRef.current) {
          setError('Scanner element not found. Please try again.');
          setIsInitializing(false);
          return;
        }

        const id = 'qr-scanner-' + Math.random().toString(36).slice(2, 10);
        scannerRef.current.id = id;

        const scanner = new Html5Qrcode(id);
        scannerInstance.current = scanner;

        const onSuccess = (decodedText: string) => {
          if (abortRef.current) return;
          cleanup();
          const code = extractCode(decodedText);
          onScan(code);
          onClose();
        };

        const onError = (_err: string) => {
          // QR errors during scanning are normal — we ignore them
        };

        await scanner.start(
          { facingMode: 'environment' },
          { fps: 10, qrbox: { width: 250, height: 250 } },
          onSuccess,
          onError
        );

        if (!mounted || abortRef.current) {
          cleanup();
          return;
        }

        setIsScanning(true);
        setIsInitializing(false);
      } catch (err) {
        if (!mounted || abortRef.current) return;
        setIsInitializing(false);
        if (err instanceof Error && err.name === 'NotAllowedError') {
          setError('Camera permission denied. Please allow camera access and try again.');
        } else if (err instanceof Error && err.name === 'NotFoundError') {
          setError('No camera found on this device. Please use manual verification instead.');
        } else if (err instanceof Error) {
          setError('Camera error: ' + err.message);
        } else {
          setError('Failed to start camera. Please try manual verification.');
        }
      }
    }

    initScanner();

    return () => {
      mounted = false;
      cleanup();
    };
  }, [cleanup, onScan, onClose]);

  return (
    <div className={styles.qrOverlay} onClick={onClose}>
      <div className={styles.qrOverlayContent} onClick={(e) => e.stopPropagation()}>
        <div className={styles.qrOverlayHeader}>
          <h3 className={styles.qrOverlayTitle}>
            <ScanLine size={20} />
            Scan QR Code
          </h3>
          <button
            className={styles.qrCloseBtn}
            onClick={() => {
              cleanup();
              onClose();
            }}
            aria-label="Close scanner"
          >
            <X size={20} />
          </button>
        </div>

        <div className={styles.qrScannerWrap}>
          {isInitializing && (
            <div className={styles.qrStateMsg}>
              <div className={styles.qrStateIcon}>
                <Loader2 size={24} className="spin" />
              </div>
              <p>Initializing camera...</p>
            </div>
          )}

          {error && (
            <div className={styles.qrStateMsg}>
              <div className={`${styles.qrStateIcon} ${styles.qrErrorIcon}`}>
                <AlertTriangle size={24} />
              </div>
              <p>{error}</p>
            </div>
          )}

          <div
            ref={scannerRef}
            style={{
              width: '100%',
              height: '100%',
              visibility: isScanning ? 'visible' : 'hidden',
              position: 'absolute',
              top: 0,
              left: 0,
            }}
          />
        </div>
      </div>
    </div>
  );
}

// Extract verification code from full URL or bare code
function extractCode(raw: string): string {
  const trimmed = raw.trim();

  // Try to match a URL pattern with /v/ or /v/ prefix
  const urlMatch = trimmed.match(/\/v\/([A-Z0-9]+)/i);
  if (urlMatch) {
    return urlMatch[1].toUpperCase();
  }

  // If it looks like a full URL but no /v/ pattern, just return the last path segment
  if (trimmed.startsWith('http')) {
    const parts = trimmed.split('/').filter(Boolean);
    const last = parts[parts.length - 1];
    if (last) return last.toUpperCase();
  }

  // Bare code — return as-is, uppercase
  return trimmed.toUpperCase();
}
