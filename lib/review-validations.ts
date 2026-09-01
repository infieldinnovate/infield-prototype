import { z } from "zod";

export const reviewSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(80, "Name must be less than 80 characters"),
  email: z
    .string()
    .min(1, "Email is required")
    .email("Please enter a valid email address"),
  rating: z
    .number()
    .int("Please select a rating")
    .min(1, "Please select a rating")
    .max(5, "Rating must be 5 or less"),
  service: z.string().min(1, "Please select a service"),
  title: z
    .string()
    .min(3, "Title must be at least 3 characters")
    .max(120, "Title must be less than 120 characters"),
  body: z
    .string()
    .min(10, "Review must be at least 10 characters")
    .max(2000, "Review must be less than 2000 characters"),
});

export type ReviewFormData = z.infer<typeof reviewSchema>;
