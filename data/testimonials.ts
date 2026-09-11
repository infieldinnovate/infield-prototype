// ============================================
// Testimonials Data
// ============================================

// data\testimonials.ts

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  rating: number;
  content: string;
  service: string;
  date: string;
  avatar: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    name: "Wanjiru Kamau",
    role: "Homeowner",
    company: "Private Residence",
    rating: 5,
    content:
      "Infield rewired our entire home and the experience was exceptional. The team was professional, punctual, and incredibly clean. They explained everything and the final inspection passed without a single issue.",
    service: "Electrical",
    date: "2024-02-15",
    avatar:
      "/placeholder-image.jpg",
  },
  {
    id: "t2",
    name: "James Mwangi",
    role: "Operations Manager",
    company: "Manufacturing Co.",
    rating: 5,
    content:
      "The commercial solar installation has been a game-changer for our facility. We're saving 85% on energy costs and the ROI is ahead of schedule. Infield handled everything from design to commissioning seamlessly.",
    service: "Solar",
    date: "2024-03-20",
    avatar:
      "/placeholder-image.jpg",
  },
  {
    id: "t3",
    name: "Achieng Otieno",
    role: "Property Manager",
    company: "Riverside Properties",
    rating: 5,
    content:
      "We use Infield for all our plumbing needs across 12 properties. Their response time is incredible and they always provide clear pricing upfront. The quality of work is consistently excellent.",
    service: "Plumbing",
    date: "2024-01-10",
    avatar:
      "/placeholder-image.jpg",
  },
  {
    id: "t4",
    name: "David Kiprop",
    role: "Farm Owner",
    company: "Green Valley Farm",
    rating: 5,
    content:
      "Having our own borehole has transformed our farm operations. The Infield team was knowledgeable, efficient, and the water quality is excellent. They handled all the permits and testing professionally.",
    service: "Borehole",
    date: "2023-09-15",
    avatar:
      "/placeholder-image.jpg",
  },
  {
    id: "t5",
    name: "Faith Wanjiku",
    role: "Estate Owner",
    company: "Private Estate",
    rating: 5,
    content:
      "The smart irrigation system Infield installed has cut our water bill by 40% and the landscape has never looked better. The mobile app makes it so easy to manage everything from anywhere.",
    service: "Irrigation",
    date: "2023-11-20",
    avatar:
      "/placeholder-image.jpg",
  },
  {
    id: "t6",
    name: "Peter Mutua",
    role: "Business Owner",
    company: "Bistro 24",
    rating: 5,
    content:
      "Infield handled all the plumbing for our new restaurant. They worked around our tight schedule and delivered on time. The health inspector commented on the quality of the installation. Highly recommend.",
    service: "Plumbing",
    date: "2023-07-25",
    avatar:
      "/placeholder-image.jpg",
  },
];

export function getFeaturedTestimonials(limit = 3): Testimonial[] {
  return testimonials.slice(0, limit);
}

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
