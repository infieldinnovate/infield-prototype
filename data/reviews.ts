// ============================================
// Google Reviews Data
// ============================================
// Derived from data/testimonials.ts to avoid duplicating people data.
// reviewSummary and the GoogleReview interface remain here as the
// reviews-specific concerns.

import { testimonials } from "./testimonials";

export interface GoogleReview {
  id: string;
  author: string;
  avatar: string;
  rating: number;
  text: string;
  date: string;
  service: string;
  source: string;
}

export const googleReviews: GoogleReview[] = testimonials.map((t) => ({
  id: `gr${t.id.replace(/\D/g, "")}`,
  author: t.name,
  avatar: t.avatar,
  rating: t.rating,
  text: t.content,
  date: t.date,
  service: t.service,
  source: "Google",
}));

export const reviewSummary = {
  averageRating: 4.9,
  totalReviews: 287,
  ratingBreakdown: {
    5: 268,
    4: 15,
    3: 3,
    2: 1,
    1: 0,
  },
};
