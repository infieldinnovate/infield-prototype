// ============================================
// Articles / Knowledge Centre Data
// ============================================

export type ArticleCategory = 'Solar' | 'Electrical' | 'Boreholes' | 'Plumbing' | 'Irrigation';

export interface Article {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  category: ArticleCategory;
  image: string;
  readingTime: string;
  publishDate: string;
  author: string;
  featured: boolean;
}

export const articles: Article[] = [
  {
    id: 'a1',
    title: 'Complete Guide to Solar Panel Installation for Homes',
    slug: 'solar-panel-installation-guide',
    excerpt:
      'Everything you need to know about residential solar — from system sizing and roof assessment to choosing the right panels and inverters for maximum efficiency.',
    category: 'Solar',
    image:
      'https://images.pexels.com/photos/371900/pexels-photo-371900.jpeg?auto=compress&cs=tinysrgb&w=1200',
    readingTime: '8 min read',
    publishDate: '2024-06-15',
    author: 'Sarah Mwangi',
    featured: true,
  },
  {
    id: 'a2',
    title: 'How to Choose the Right Electrical Panel for Your Property',
    slug: 'choosing-electrical-panel',
    excerpt:
      'Upgrading your electrical panel? Learn about amperage requirements, smart panels, and how to future-proof your home or business for solar and backup power.',
    category: 'Electrical',
    image:
      'https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg?auto=compress&cs=tinysrgb&w=1200',
    readingTime: '6 min read',
    publishDate: '2024-05-28',
    author: 'James Otieno',
    featured: true,
  },
  {
    id: 'a3',
    title: 'Borehole Drilling: What to Expect from Start to Finish',
    slug: 'borehole-drilling-process',
    excerpt:
      'A step-by-step walkthrough of the borehole drilling process — geological surveys, permitting, drilling, casing, pump installation, and water quality testing.',
    category: 'Boreholes',
    image:
      'https://images.pexels.com/photos/4226796/pexels-photo-4226796.jpeg?auto=compress&cs=tinysrgb&w=1200',
    readingTime: '10 min read',
    publishDate: '2024-05-10',
    author: 'Michael Kiprop',
    featured: true,
  },
  {
    id: 'a4',
    title: '5 Common Plumbing Problems and How to Prevent Them',
    slug: 'common-plumbing-problems',
    excerpt:
      'From leaking taps to burst pipes, discover the most common plumbing issues homeowners face and practical tips to prevent costly repairs.',
    category: 'Plumbing',
    image:
      'https://images.pexels.com/photos/8961065/pexels-photo-8961065.jpeg?auto=compress&cs=tinysrgb&w=1200',
    readingTime: '5 min read',
    publishDate: '2024-04-22',
    author: 'Emily Njeri',
    featured: false,
  },
  {
    id: 'a5',
    title: 'Smart Irrigation: Saving Water with Technology',
    slug: 'smart-irrigation-technology',
    excerpt:
      'Explore how WiFi-enabled controllers, weather sensors, and drip systems can cut your water usage by up to 50% while keeping your landscape thriving.',
    category: 'Irrigation',
    image:
      'https://images.pexels.com/photos/2933243/pexels-photo-2933243.jpeg?auto=compress&cs=tinysrgb&w=1200',
    readingTime: '7 min read',
    publishDate: '2024-04-05',
    author: 'Lisa Wairimu',
    featured: false,
  },
  {
    id: 'a6',
    title: 'Solar Battery Storage: Is It Worth the Investment?',
    slug: 'solar-battery-storage-guide',
    excerpt:
      'A deep dive into solar battery systems — capacity sizing, lithium vs lead-acid, cost analysis, and how battery backup can provide energy independence.',
    category: 'Solar',
    image:
      'https://images.pexels.com/photos/9823144/pexels-photo-9823144.jpeg?auto=compress&cs=tinysrgb&w=1200',
    readingTime: '9 min read',
    publishDate: '2024-03-18',
    author: 'Sarah Mwangi',
    featured: false,
  },
  {
    id: 'a7',
    title: 'Backup Generator Installation: What Homeowners Need to Know',
    slug: 'backup-generator-installation-guide',
    excerpt:
      'Considering a backup generator for your home or business? Learn about generator sizing, fuel options, transfer switches, and maintenance best practices.',
    category: 'Electrical',
    image:
      'https://images.pexels.com/photos/3779457/pexels-photo-3779457.jpeg?auto=compress&cs=tinysrgb&w=1200',
    readingTime: '6 min read',
    publishDate: '2024-03-01',
    author: 'James Otieno',
    featured: false,
  },
  {
    id: 'a8',
    title: 'Water Quality Testing: Ensuring Safe Borehole Water',
    slug: 'borehole-water-quality-testing',
    excerpt:
      'After drilling your borehole, water quality testing is essential. Learn what we test for, how treatment systems work, and maintaining water safety.',
    category: 'Boreholes',
    image:
      'https://images.pexels.com/photos/4226796/pexels-photo-4226796.jpeg?auto=compress&cs=tinysrgb&w=1200',
    readingTime: '7 min read',
    publishDate: '2024-02-14',
    author: 'Michael Kiprop',
    featured: false,
  },
  {
    id: 'a9',
    title: 'Preparing Your Irrigation System for the Dry Season',
    slug: 'dry-season-irrigation-preparation',
    excerpt:
      'Keep your landscape thriving through the dry season. Learn how to adjust your irrigation system, conserve water, and protect your investment during Kenya\'s dry months.',
    category: 'Irrigation',
    image:
      'https://images.pexels.com/photos/2933243/pexels-photo-2933243.jpeg?auto=compress&cs=tinysrgb&w=1200',
    readingTime: '5 min read',
    publishDate: '2024-01-20',
    author: 'Lisa Wairimu',
    featured: false,
  },
];

export const articleCategories: ArticleCategory[] = ['Solar', 'Electrical', 'Boreholes', 'Plumbing', 'Irrigation'];

export function getFeaturedArticles(limit = 3): Article[] {
  return articles.filter((a) => a.featured).slice(0, limit);
}

export function getArticlesByCategory(category: ArticleCategory): Article[] {
  return articles.filter((a) => a.category === category);
}
