// ============================================
// Zod Validation Schemas
// ============================================

import { z } from "zod";

export const contactSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(80, "Name must be less than 80 characters"),
  email: z
    .string()
    .min(1, "Email is required")
    .email("Please enter a valid email address"),
  phone: z
    .string()
    .min(10, "Phone number must be at least 10 digits")
    .max(20, "Phone number is too long")
    .regex(/^[\d\s+()-]+$/, "Please enter a valid phone number"),
  subject: z
    .string()
    .min(3, "Subject must be at least 3 characters")
    .max(120, "Subject must be less than 120 characters"),
  message: z
    .string()
    .min(10, "Message must be at least 10 characters")
    .max(2000, "Message must be less than 2000 characters"),
});

export type ContactFormData = z.infer<typeof contactSchema>;

export const quoteStep1Schema = z.object({
  serviceType: z.string().min(1, "Please select a service"),
  serviceDetails: z
    .string()
    .min(10, "Please provide at least 10 characters of detail")
    .max(1000, "Please keep details under 1000 characters"),
  urgency: z.string().min(1, "Please select urgency level"),
  budget: z.string().min(1, "Please select a budget range"),
});

export const quoteStep2Schema = z.object({
  propertyType: z.string().min(1, "Please select a property type"),
  address: z
    .string()
    .min(5, "Address must be at least 5 characters")
    .max(200, "Address is too long"),
  city: z.string().min(2, "City/Town is required").max(60, "City name is too long"),
  state: z
    .string()
    .min(2, "County is required")
    .max(60, "County name is too long"),
  zipCode: z
    .string()
    .min(4, "Postal code must be at least 4 digits")
    .max(10, "Postal code is too long")
    .regex(/^[\d\s-]+$/, "Please enter a valid postal code"),
  propertySize: z.string().optional(),
  additionalInfo: z
    .string()
    .max(500, "Please keep under 500 characters")
    .optional(),
});

export const quoteStep3Schema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(80, "Name must be less than 80 characters"),
  email: z
    .string()
    .min(1, "Email is required")
    .email("Please enter a valid email address"),
  phone: z
    .string()
    .min(10, "Phone number must be at least 10 digits")
    .max(20, "Phone number is too long")
    .regex(/^[\d\s+()-]+$/, "Please enter a valid phone number"),
  preferredContact: z
    .string()
    .min(1, "Please select a preferred contact method"),
  preferredTime: z.string().min(1, "Please select a preferred time"),
  company: z.string().max(100, "Company name is too long").optional(),
});

export const quoteFullSchema = quoteStep1Schema
  .merge(quoteStep2Schema)
  .merge(quoteStep3Schema);

export type QuoteStep1Data = z.infer<typeof quoteStep1Schema>;
export type QuoteStep2Data = z.infer<typeof quoteStep2Schema>;
export type QuoteStep3Data = z.infer<typeof quoteStep3Schema>;
export type QuoteFullData = z.infer<typeof quoteFullSchema>;
