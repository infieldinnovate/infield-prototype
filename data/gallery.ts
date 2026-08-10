// ============================================
// Gallery Data
// ============================================

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  category: string;
  caption: string;
}

export const galleryImages: GalleryImage[] = [
  {
    id: 'g1',
    src: 'https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Electrician working on electrical panel',
    category: 'Electrical',
    caption: 'Panel upgrade in progress',
  },
  {
    id: 'g2',
    src: 'https://images.pexels.com/photos/371900/pexels-photo-371900.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Solar panels on residential roof',
    category: 'Solar',
    caption: 'Residential solar installation',
  },
  {
    id: 'g3',
    src: 'https://images.pexels.com/photos/8961065/pexels-photo-8961065.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Plumbing pipes and fixtures',
    category: 'Plumbing',
    caption: 'Commercial plumbing installation',
  },
  {
    id: 'g4',
    src: 'https://images.pexels.com/photos/2933243/pexels-photo-2933243.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Irrigation sprinkler system in garden',
    category: 'Irrigation',
    caption: 'Garden irrigation system',
  },
  {
    id: 'g5',
    src: 'https://images.pexels.com/photos/4226796/pexels-photo-4226796.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Borehole drilling rig',
    category: 'Borehole',
    caption: 'Borehole drilling operation',
  },
  {
    id: 'g6',
    src: 'https://images.pexels.com/photos/4338/photo.jpg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Commercial solar array',
    category: 'Solar',
    caption: 'Commercial solar array',
  },
  {
    id: 'g7',
    src: 'https://images.pexels.com/photos/9823144/pexels-photo-9823144.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Solar panel close-up',
    category: 'Solar',
    caption: 'Solar panel detail',
  },
  {
    id: 'g8',
    src: 'https://images.pexels.com/photos/3779457/pexels-photo-3779457.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Backup generator installation',
    category: 'Electrical',
    caption: 'Backup generator installation',
  },
];

export function getGalleryByCategory(category: string): GalleryImage[] {
  return galleryImages.filter((img) => img.category === category);
}
