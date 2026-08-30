"use client";

// ============================================
// QuoteForm Component (Multi-Step)
// ============================================

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Send,
  AlertCircle,
  FileText,
  Building,
  User,
  CheckCheck,
} from "lucide-react";
import { quoteFullSchema, type QuoteFullData } from "@/lib/validations";
import { submitQuoteForm, type SubmissionResult } from "@/lib/services";
import {
  QUOTE_STEPS,
  QUOTE_SERVICE_OPTIONS,
  PROPERTY_TYPES,
  URGENCY_LEVELS,
  BUDGET_RANGES,
  CONTACT_METHODS,
  PREFERRED_TIMES,
} from "@/data/quoteFormOptions";
import { Button } from "@/components/ui/Button";
import InputField from "@/components/forms/form_elements/input";
import SelectField from "@/components/forms/form_elements/select";
import { cn } from "@/lib/utils";
import styles from "./QuoteForm.module.scss";

const stepIcons = [FileText, Building, User, CheckCheck];

export function QuoteForm() {
  const [currentStep, setCurrentStep] = useState(0);
  const [result, setResult] = useState<SubmissionResult | null>(null);

  const {
    register,
    handleSubmit,
    trigger,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<QuoteFullData>({
    resolver: zodResolver(quoteFullSchema),
    mode: "onChange",
    reValidateMode: "onChange",
  });

  const watchedValues = watch();

  const stepFields: (keyof QuoteFullData)[][] = [
    ["serviceType", "serviceDetails", "urgency", "budget"],
    ["propertyType", "address", "city", "county", "zipCode"],
    ["name", "email", "phone", "preferredContact", "preferredTime"],
  ];

  const handleNext = async () => {
    const fields = stepFields[currentStep];
    const valid = await trigger(fields);
    if (valid)
      setCurrentStep((prev) => Math.min(prev + 1, QUOTE_STEPS.length - 1));
  };

  const handleBack = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 0));
  };

  const onSubmit = async (data: QuoteFullData) => {
    const res = await submitQuoteForm(data);
    setResult(res);
  };

  if (result?.success) {
    return (
      <div className={styles.success} role="status">
        <div className={styles.successIcon}>
          <CheckCircle2 size={56} />
        </div>
        <h2 className={styles.successTitle}>Quote Request Submitted!</h2>
        <p className={styles.successMessage}>{result.message}</p>
        {result.referenceId && (
          <div className={styles.referenceCard}>
            <span className={styles.referenceLabel}>Your Reference Number</span>
            <span className={styles.referenceId}>{result.referenceId}</span>
            <span className={styles.referenceHint}>
              Please save this number for future correspondence about your
              request.
            </span>
          </div>
        )}
        <div className={styles.successActions}>
          <Button
            variant="outline"
            onClick={() => {
              setResult(null);
              setCurrentStep(0);
            }}
          >
            Submit Another Request
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.wrapper}>
      {/* Stepper */}
      <div
        className={styles.stepper}
        role="navigation"
        aria-label="Form progress"
      >
        {QUOTE_STEPS.map((step, index) => {
          const StepIcon = stepIcons[index];
          const isComplete = index < currentStep;
          const isActive = index === currentStep;
          return (
            <div
              key={step.id}
              className={cn(
                styles.step,
                isActive && styles.stepActive,
                isComplete && styles.stepComplete,
              )}
            >
              <div className={styles.stepIndicator}>
                {isComplete ? (
                  <CheckCircle2 size={20} />
                ) : (
                  <StepIcon size={20} />
                )}
              </div>
              <div className={styles.stepInfo}>
                <span className={styles.stepNumber}>Step {step.id}</span>
                <span className={styles.stepTitle}>{step.title}</span>
              </div>
              {index < QUOTE_STEPS.length - 1 && (
                <div className={styles.stepConnector} />
              )}
            </div>
          );
        })}
      </div>

      {/* Form */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={styles.form}
        noValidate
      >
        {/* Step 1: Service Details */}
        {currentStep === 0 && (
          <div className={styles.stepContent}>
            <h2 className={styles.stepHeading}>Service Details</h2>
            <p className={styles.stepDescription}>
              Tell us what you need help with.
            </p>
            <div className={styles.fields}>
              <SelectField
                register={register}
                name="serviceType"
                label="Service Type"
                required
                placeholder="Select a service"
                options={QUOTE_SERVICE_OPTIONS.map((s) => ({
                  value: s,
                  label: s,
                }))}
                error={errors.serviceType}
              />
              <InputField
                register={register}
                name="serviceDetails"
                label="Project Details"
                as="textarea"
                required
                placeholder="Describe what you need done. The more detail you provide, the more accurate your quote will be."
                rows={4}
                error={errors.serviceDetails}
              />
              <div className={styles.fieldRow}>
                <SelectField
                  register={register}
                  name="urgency"
                  label="Urgency"
                  required
                  placeholder="How urgent is this?"
                  options={[...URGENCY_LEVELS]}
                  error={errors.urgency}
                />
                <SelectField
                  register={register}
                  name="budget"
                  label="Budget Range"
                  required
                  placeholder="What's your budget?"
                  options={[...BUDGET_RANGES]}
                  error={errors.budget}
                />
              </div>
            </div>
          </div>
        )}

        {/* Step 2: Property Info */}
        {currentStep === 1 && (
          <div className={styles.stepContent}>
            <h2 className={styles.stepHeading}>Property Information</h2>
            <p className={styles.stepDescription}>
              Where is the project located?
            </p>
            <div className={styles.fields}>
              <SelectField
                register={register}
                name="propertyType"
                label="Property Type"
                required
                placeholder="Select property type"
                options={PROPERTY_TYPES.map((p) => ({ value: p, label: p }))}
                error={errors.propertyType}
              />
              <InputField
                register={register}
                name="address"
                label="Street Address"
                required
                placeholder="123 Main Street"
                error={errors.address}
              />
              <div className={styles.fieldRow}>
                <InputField
                  register={register}
                  name="city"
                  label="City"
                  required
                  placeholder="Springfield"
                  error={errors.city}
                />
                <InputField
                  register={register}
                  name="county"
                  label="County"
                  required
                  placeholder="Meru"
                  error={errors.county}
                />
              </div>
              <div className={styles.fieldRow}>
                <InputField
                  register={register}
                  name="zipCode"
                  label="Postal Code"
                  required
                  placeholder="60200"
                  error={errors.zipCode}
                />
                <InputField
                  register={register}
                  name="propertySize"
                  label="Property Size (optional)"
                  placeholder="e.g. 1/2 acre"
                />
              </div>
              <InputField
                register={register}
                name="additionalInfo"
                label="Additional Information (optional)"
                as="textarea"
                placeholder="Any additional details about the property that might be relevant..."
                rows={3}
                error={errors.additionalInfo}
              />
            </div>
          </div>
        )}

        {/* Step 3: Contact Info */}
        {currentStep === 2 && (
          <div className={styles.stepContent}>
            <h2 className={styles.stepHeading}>Contact Information</h2>
            <p className={styles.stepDescription}>How can we reach you?</p>
            <div className={styles.fields}>
              <div className={styles.fieldRow}>
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
                  name="company"
                  label="Company (optional)"
                  placeholder="Your company name"
                  error={errors.company}
                />
              </div>
              <div className={styles.fieldRow}>
                <InputField
                  register={register}
                  name="email"
                  label="Email"
                  type="email"
                  required
                  placeholder="john@example.com"
                  error={errors.email}
                />
                <InputField
                  register={register}
                  name="phone"
                  label="Phone"
                  type="tel"
                  required
                  placeholder="(555) 123-4567"
                  error={errors.phone}
                />
              </div>
              <div className={styles.fieldRow}>
                <SelectField
                  register={register}
                  name="preferredContact"
                  label="Preferred Contact Method"
                  required
                  placeholder="How should we contact you?"
                  options={CONTACT_METHODS.map((m) => ({
                    value: m.value,
                    label: m.label,
                  }))}
                  error={errors.preferredContact}
                />
                <SelectField
                  register={register}
                  name="preferredTime"
                  label="Preferred Time"
                  required
                  placeholder="When should we contact you?"
                  options={PREFERRED_TIMES.map((t) => ({
                    value: t.value,
                    label: t.label,
                  }))}
                  error={errors.preferredTime}
                />
              </div>
            </div>
          </div>
        )}

        {/* Step 4: Review */}
        {currentStep === 3 && (
          <div className={styles.stepContent}>
            <h2 className={styles.stepHeading}>Review & Submit</h2>
            <p className={styles.stepDescription}>
              Please review your information before submitting.
            </p>
            <div className={styles.review}>
              <div className={styles.reviewSection}>
                <h3 className={styles.reviewTitle}>Service Details</h3>
                <dl className={styles.reviewList}>
                  <div className={styles.reviewItem}>
                    <dt>Service Type</dt>
                    <dd>{watchedValues.serviceType || "—"}</dd>
                  </div>
                  <div className={styles.reviewItem}>
                    <dt>Urgency</dt>
                    <dd>
                      {URGENCY_LEVELS.find(
                        (u) => u.value === watchedValues.urgency,
                      )?.label || "—"}
                    </dd>
                  </div>
                  <div className={styles.reviewItem}>
                    <dt>Budget</dt>
                    <dd>
                      {BUDGET_RANGES.find(
                        (b) => b.value === watchedValues.budget,
                      )?.label || "—"}
                    </dd>
                  </div>
                  <div className={styles.reviewItem}>
                    <dt>Project Details</dt>
                    <dd>{watchedValues.serviceDetails || "—"}</dd>
                  </div>
                </dl>
              </div>
              <div className={styles.reviewSection}>
                <h3 className={styles.reviewTitle}>Property Information</h3>
                <dl className={styles.reviewList}>
                  <div className={styles.reviewItem}>
                    <dt>Property Type</dt>
                    <dd>{watchedValues.propertyType || "—"}</dd>
                  </div>
                  <div className={styles.reviewItem}>
                    <dt>Address</dt>
                    <dd>
                      {watchedValues.address
                        ? `${watchedValues.address}, ${watchedValues.city || ""}, ${watchedValues.county || ""} ${watchedValues.zipCode || ""}`
                        : "—"}
                    </dd>
                  </div>
                </dl>
              </div>
              <div className={styles.reviewSection}>
                <h3 className={styles.reviewTitle}>Contact Information</h3>
                <dl className={styles.reviewList}>
                  <div className={styles.reviewItem}>
                    <dt>Name</dt>
                    <dd>{watchedValues.name || "—"}</dd>
                  </div>
                  <div className={styles.reviewItem}>
                    <dt>Email</dt>
                    <dd>{watchedValues.email || "—"}</dd>
                  </div>
                  <div className={styles.reviewItem}>
                    <dt>Phone</dt>
                    <dd>{watchedValues.phone || "—"}</dd>
                  </div>
                  <div className={styles.reviewItem}>
                    <dt>Preferred Contact</dt>
                    <dd>
                      {CONTACT_METHODS.find(
                        (c) => c.value === watchedValues.preferredContact,
                      )?.label || "—"}
                    </dd>
                  </div>
                  <div className={styles.reviewItem}>
                    <dt>Preferred Time</dt>
                    <dd>
                      {PREFERRED_TIMES.find(
                        (t) => t.value === watchedValues.preferredTime,
                      )?.label || "—"}
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        )}

        {/* Error */}
        {result && !result.success && (
          <div className={styles.error} role="alert">
            <AlertCircle size={20} />
            <span>{result.message}</span>
          </div>
        )}

        {/* Navigation */}
        <div className={styles.navigation}>
          {currentStep > 0 && (
            <Button
              type="button"
              variant="outline"
              onClick={handleBack}
              leftIcon={<ChevronLeft size={18} />}
            >
              Back
            </Button>
          )}
          {currentStep < QUOTE_STEPS.length - 1 ? (
            <Button
              type="button"
              onClick={handleNext}
              rightIcon={<ChevronRight size={18} />}
            >
              Continue
            </Button>
          ) : (
            <Button
              type="submit"
              loading={isSubmitting}
              leftIcon={<Send size={18} />}
            >
              {isSubmitting ? "Submitting..." : "Submit Request"}
            </Button>
          )}
        </div>
      </form>
    </div>
  );
}
