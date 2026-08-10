// ============================================
// Form Submission Services (Simulated)
// ============================================

import { FORM_SUBMISSION_DELAY } from "./constants";
import type { ContactFormData } from "./validations";
import type { QuoteFullData } from "./validations";
import type { SubmissionResult } from "@/types/submission";

export type { SubmissionResult };

function generateReferenceId(prefix: string): string {
  const timestamp = Date.now().toString(36).toUpperCase();
  const random = Math.random().toString(36).slice(2, 6).toUpperCase();
  return `${prefix}-${timestamp}-${random}`;
}

export async function submitContactForm(
  data: ContactFormData,
): Promise<SubmissionResult> {
  await new Promise((resolve) => setTimeout(resolve, FORM_SUBMISSION_DELAY));

  return {
    success: true,
    message: `Thank you, ${data.name}! Your message has been received. Our team will respond within 24 hours.`,
    referenceId: generateReferenceId("CT"),
  };
}

export async function submitQuoteForm(
  data: QuoteFullData,
): Promise<SubmissionResult> {
  await new Promise((resolve) => setTimeout(resolve, FORM_SUBMISSION_DELAY));

  return {
    success: true,
    message: `Thank you, ${data.name}! Your quote request has been submitted. A project specialist will contact you within 1 business day at your preferred time.`,
    referenceId: generateReferenceId("QT"),
  };
}
