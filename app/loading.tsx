import { Zap } from 'lucide-react';
import styles from './loading.module.scss';

export default function Loading() {
  return (
    <div
      className={styles.container}
      role="status"
      aria-live="polite"
      aria-label="Page is loading"
    >
      <div className={styles.content}>
        <div className={styles.iconWrapper} aria-hidden="true">
          <Zap size={32} className={styles.icon} />
        </div>
        <div className={styles.spinner} aria-hidden="true" />
        <p className={styles.text}>Loading...</p>
      </div>
    </div>
  );
}
