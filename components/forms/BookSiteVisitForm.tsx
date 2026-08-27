'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { CircleCheck as CheckCircle2, CircleAlert as AlertCircle, Send, Calendar } from 'lucide-react';
import { siteVisitSchema, type SiteVisitFormData } from '@/lib/validations';
import { submitSiteVisitForm, type SubmissionResult } from '@/lib/services';
import { SITE_VISIT_SERVICES, SITE_VISIT_TIMES } from '@/lib/constants';
import { Button } from '@/components/ui/Button';
import InputField from '@/components/forms/form_elements/input';
import SelectField from '@/components/forms/form_elements/select';
import styles from './ContactForm.module.scss';

export function BookSiteVisitForm() {
  const [result, setResult] = useState<SubmissionResult | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<SiteVisitFormData>({
    resolver: zodResolver(siteVisitSchema),
    mode: 'onChange',
    reValidateMode: 'onChange',
  });

  const onSubmit = async (data: SiteVisitFormData) => {
    const res = await submitSiteVisitForm(data);
    setResult(res);
    if (res.success) reset();
  };

  if (result?.success) {
    return (
      <div className={styles.success} role="status">
        <div className={styles.successIcon}>
          <CheckCircle2 size={48} />
        </div>
        <h3 className={styles.successTitle}>Site Visit Requested!</h3>
        <p className={styles.successMessage}>{result.message}</p>
        {result.referenceId && (
          <p className={styles.reference}>
            Reference: <strong>{result.referenceId}</strong>
          </p>
        )}
        <Button variant="outline" onClick={() => setResult(null)}>
          Book Another Visit
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
        <SelectField
          register={register}
          name="serviceType"
          label="Service of Interest"
          required
          placeholder="Select a service"
          options={SITE_VISIT_SERVICES.map((s) => ({ value: s, label: s }))}
          error={errors.serviceType}
        />
      </div>
      <div className={styles.row}>
        <InputField
          register={register}
          name="preferredDate"
          label="Preferred Date"
          type="date"
          required
          error={errors.preferredDate}
        />
        <SelectField
          register={register}
          name="preferredTime"
          label="Preferred Time"
          required
          placeholder="Select a time slot"
          options={SITE_VISIT_TIMES.map((t) => ({ value: t.value, label: t.label }))}
          error={errors.preferredTime}
        />
      </div>
      <InputField
        register={register}
        name="address"
        label="Property Address"
        required
        placeholder="123 Main Street, City"
        error={errors.address}
      />
      <InputField
        register={register}
        name="notes"
        label="Additional Notes (optional)"
        as="textarea"
        placeholder="Any details about your property or project..."
        rows={3}
        error={errors.notes}
      />

      {result && !result.success && (
        <div className={styles.error} role="alert">
          <AlertCircle size={20} />
          <span>{result.message}</span>
        </div>
      )}

      <Button
        type="submit"
        size="lg"
        loading={isSubmitting}
        fullWidth
        leftIcon={<Calendar size={18} />}
      >
        {isSubmitting ? 'Booking...' : 'Book Site Visit'}
      </Button>
    </form>
  );
}
