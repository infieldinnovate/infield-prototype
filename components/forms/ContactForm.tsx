'use client';

// ============================================
// ContactForm Component
// ============================================

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { CheckCircle2, AlertCircle, Send } from 'lucide-react';
import { contactSchema, type ContactFormData } from '@/lib/validations';
import { submitContactForm, type SubmissionResult } from '@/lib/services';
import { Button } from '@/components/ui/Button';
import InputField from '@/components/forms/form_elements/input';
import styles from './ContactForm.module.scss';

export function ContactForm() {
  const [result, setResult] = useState<SubmissionResult | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    mode: 'onChange',
    reValidateMode: 'onChange',
  });

  const onSubmit = async (data: ContactFormData) => {
    const res = await submitContactForm(data);
    setResult(res);
    if (res.success) reset();
  };

  if (result?.success) {
    return (
      <div className={styles.success} role="status">
        <div className={styles.successIcon}>
          <CheckCircle2 size={48} />
        </div>
        <h3 className={styles.successTitle}>Message Sent!</h3>
        <p className={styles.successMessage}>{result.message}</p>
        {result.referenceId && (
          <p className={styles.reference}>
            Reference: <strong>{result.referenceId}</strong>
          </p>
        )}
        <Button variant="outline" onClick={() => setResult(null)}>
          Send Another Message
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form} noValidate>
      <div className={styles.row}>
        <InputField
          register={register}
          name="name"
          label="Full Name"
          required
          placeholder="John Doe"
          error={errors.name}
        />
        <InputField
          register={register}
          name="email"
          label="Email"
          type="email"
          required
          placeholder="john@example.com"
          error={errors.email}
        />
      </div>
      <div className={styles.row}>
        <InputField
          register={register}
          name="phone"
          label="Phone"
          type="tel"
          required
          placeholder="(555) 123-4567"
          error={errors.phone}
        />
        <InputField
          register={register}
          name="subject"
          label="Subject"
          required
          placeholder="How can we help?"
          error={errors.subject}
        />
      </div>
      <InputField
        register={register}
        name="message"
        label="Message"
        as="textarea"
        required
        placeholder="Tell us about your project or question..."
        rows={5}
        error={errors.message}
      />

      {result && !result.success && (
        <div className={styles.error} role="alert">
          <AlertCircle size={20} />
          <span>{result.message}</span>
        </div>
      )}

      <Button type="submit" size="lg" loading={isSubmitting} fullWidth leftIcon={<Send size={18} />}>
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </Button>
    </form>
  );
}
