'use client';

// ============================================
// FAQAccordion Component
// ============================================

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import type { FAQ } from '@/data/faqs';
import { cn } from '@/lib/utils';
import styles from './FAQAccordion.module.scss';

interface FAQAccordionProps {
  faqs: FAQ[];
}

export function FAQAccordion({ faqs }: FAQAccordionProps) {
  const [openId, setOpenId] = useState<string | null>(faqs[0]?.id ?? null);

  const toggle = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className={styles.accordion}>
      {faqs.map((faq) => {
        const isOpen = openId === faq.id;
        return (
          <div key={faq.id} className={cn(styles.item, isOpen && styles.itemOpen)}>
            <button
              className={styles.question}
              onClick={() => toggle(faq.id)}
              aria-expanded={isOpen}
              aria-controls={`faq-content-${faq.id}`}
            >
              <span>{faq.question}</span>
              <ChevronDown
                size={20}
                className={cn(styles.chevron, isOpen && styles.chevronOpen)}
              />
            </button>
            <div
              id={`faq-content-${faq.id}`}
              className={styles.content}
              role="region"
              hidden={!isOpen}
            >
              <p className={styles.answer}>{faq.answer}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
