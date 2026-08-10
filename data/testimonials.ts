// ============================================
// Testimonials Data
// ============================================

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
    id: 't1',
    name: 'Wanjiru Kamau',
    role: 'Homeowner',
    company: 'Private Residence',
    rating: 5,
    content:
      'Infield rewired our entire home and the experience was exceptional. The team was professional, punctual, and incredibly clean. They explained everything and the final inspection passed without a single issue.',
    service: 'Electrical',
    date: '2024-02-15',
    avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200',
  },
  {
    id: 't2',
    name: 'James Mwangi',
    role: 'Operations Manager',
    company: 'Manufacturing Co.',
    rating: 5,
    content:
      'The commercial solar installation has been a game-changer for our facility. We\'re saving 85% on energy costs and the ROI is ahead of schedule. Infield handled everything from design to commissioning seamlessly.',
    service: 'Solar',
    date: '2024-03-20',
    avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=200',
  },
  {
    id: 't3',
    name: 'Achieng Otieno',
    role: 'Property Manager',
    company: 'Riverside Properties',
    rating: 5,
    content:
      'We use Infield for all our plumbing needs across 12 properties. Their response time is incredible and they always provide clear pricing upfront. The quality of work is consistently excellent.',
    service: 'Plumbing',
    date: '2024-01-10',
    avatar: 'https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg?auto=compress&cs=tinysrgb&w=200',
  },
  {
    id: 't4',
    name: 'David Kiprop',
    role: 'Farm Owner',
    company: 'Green Valley Farm',
    rating: 5,
    content:
      'Having our own borehole has transformed our farm operations. The Infield team was knowledgeable, efficient, and the water quality is excellent. They handled all the permits and testing professionally.',
    service: 'Borehole',
    date: '2023-09-15',
    avatar: 'https://images.pexels.com/photos/3777943/pexels-photo-3777943.jpeg?auto=compress&cs=tinysrgb&w=200',
  },
  {
    id: 't5',
    name: 'Faith Wanjiku',
    role: 'Estate Owner',
    company: 'Private Estate',
    rating: 5,
    content:
      'The smart irrigation system Infield installed has cut our water bill by 40% and the landscape has never looked better. The mobile app makes it so easy to manage everything from anywhere.',
    service: 'Irrigation',
    date: '2023-11-20',
    avatar: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=200',
  },
  {
    id: 't6',
    name: 'Peter Mutua',
    role: 'Business Owner',
    company: 'Bistro 24',
    rating: 5,
    content:
      'Infield handled all the plumbing for our new restaurant. They worked around our tight schedule and delivered on time. The health inspector commented on the quality of the installation. Highly recommend.',
    service: 'Plumbing',
    date: '2023-07-25',
    avatar: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=200',
  },
];

export function getFeaturedTestimonials(limit = 3): Testimonial[] {
  return testimonials.slice(0, limit);
}
