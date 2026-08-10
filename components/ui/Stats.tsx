// ============================================
// Stats Component
// ============================================

import { stats } from '@/data/site.config';
import styles from './Stats.module.scss';

export function Stats() {
  return (
    <div className={styles.stats}>
      {stats.map((stat) => (
        <div key={stat.label} className={styles.stat}>
          <span className={styles.value}>{stat.value}</span>
          <span className={styles.label}>{stat.label}</span>
        </div>
      ))}
    </div>
  );
}
