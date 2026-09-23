'use client';

import { useState } from 'react';
import { MessageSquare, Calendar } from 'lucide-react';
import { ContactForm } from '@/components/forms/ContactForm';
import { BookSiteVisitForm } from '@/components/forms/BookSiteVisitForm';
import styles from './ContactFormSection.module.scss';

type Tab = 'message' | 'visit';

interface ContactFormSectionProps {
  initialTab?: Tab;
}

export function ContactFormSection({ initialTab = 'message' }: ContactFormSectionProps) {
  const [activeTab, setActiveTab] = useState<Tab>(initialTab);

  return (
    <div className={styles.formWrapper}>
      <div className={styles.toggleGroup} role="tablist" aria-label="Contact form options">
        <button
          type="button"
          role="tab"
          aria-selected={activeTab === 'message'}
          className={`${styles.toggleBtn} ${activeTab === 'message' ? styles.toggleBtnActive : ''}`}
          onClick={() => setActiveTab('message')}
        >
          <MessageSquare size={18} />
          Send Us a Message
        </button>
        <button
          type="button"
          role="tab"
          aria-selected={activeTab === 'visit'}
          className={`${styles.toggleBtn} ${activeTab === 'visit' ? styles.toggleBtnActive : ''}`}
          onClick={() => setActiveTab('visit')}
        >
          <Calendar size={18} />
          Book a Site Visit
        </button>
      </div>

      <div className={styles.formHeader}>
        {activeTab === 'message' ? (
          <>
            <MessageSquare size={24} />
            <h2 className={styles.formTitle}>Send Us a Message</h2>
            <p className={styles.formDescription}>
              Fill out the form below and we&apos;ll get back to you as soon as possible.
            </p>
          </>
        ) : (
          <>
            <Calendar size={24} />
            <h2 className={styles.formTitle}>Book a Site Visit</h2>
            <p className={styles.formDescription}>
              Schedule a professional site assessment with one of our engineers. Choose your preferred date and time below.
            </p>
          </>
        )}
      </div>

      {activeTab === 'message' ? <ContactForm /> : <BookSiteVisitForm />}
    </div>
  );
}
