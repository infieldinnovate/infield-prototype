import { SERVICES } from "./services";

export const QUOTE_STEPS = [
  { id: 1, title: "Service Details", description: "What do you need?" },
  { id: 2, title: "Property Info", description: "Where is the project?" },
  { id: 3, title: "Contact Info", description: "How can we reach you?" },
  { id: 4, title: "Review & Submit", description: "Confirm your request" },
] as const;

export const QUOTE_SERVICE_OPTIONS = SERVICES.map(
  (s) => s.shortName,
) as readonly string[];

export const PROPERTY_TYPES = [
  "Residential - Single Family",
  "Residential - Multi-Family",
  "Commercial - Office",
  "Commercial - Retail",
  "Industrial",
  "Agricultural / Farm",
  "Institutional (School, Hospital, Church)",
  "Other",
] as const;

export const URGENCY_LEVELS = [
  { value: "emergency", label: "Emergency (24-48 hours)" },
  { value: "urgent", label: "Urgent (1-2 weeks)" },
  { value: "standard", label: "Standard (2-4 weeks)" },
  { value: "flexible", label: "Flexible (1-3 months)" },
] as const;

export const BUDGET_RANGES = [
  { value: "under-100k", label: "Under KSh 100,000" },
  { value: "100k-500k", label: "KSh 100,000 - 500,000" },
  { value: "500k-1m", label: "KSh 500,000 - 1,000,000" },
  { value: "1m-5m", label: "KSh 1,000,000 - 5,000,000" },
  { value: "over-5m", label: "Over KSh 5,000,000" },
  { value: "unsure", label: "Not sure yet" },
] as const;

export const CONTACT_METHODS = [
  { value: "email", label: "Email" },
  { value: "phone", label: "Phone Call" },
  { value: "whatsapp", label: "WhatsApp" },
  { value: "any", label: "Any method" },
] as const;

export const PREFERRED_TIMES = [
  { value: "morning", label: "Morning (8AM - 12PM)" },
  { value: "afternoon", label: "Afternoon (12PM - 5PM)" },
  { value: "evening", label: "Evening (5PM - 7PM)" },
  { value: "anytime", label: "Anytime" },
] as const;

export const SITE_VISIT_SERVICES = SERVICES.map(
  (s) => s.name,
) as readonly string[];

export const SITE_VISIT_TIMES = [
  { value: "morning", label: "Morning (8AM - 12PM)" },
  { value: "afternoon", label: "Afternoon (12PM - 5PM)" },
  { value: "anytime", label: "Anytime" },
] as const;
