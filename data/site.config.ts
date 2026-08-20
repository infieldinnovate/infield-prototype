// ============================================
// Site Configuration & Constants
// ============================================

export const siteConfig = {
  name: "Infield Innovations",
  shortName: "Infield",
  tagline: "Powering Homes & Businesses with Expert Engineering",
  description:
    "Infield Innovations delivers professional electrical, plumbing, solar, irrigation, and borehole services across Kenya. Certified technicians, quality workmanship, and reliable solutions for residential and commercial properties.",
  url: "https://infieldinnovations.co.ke",
  ogImage: "/og-image.png",
  email: "infieldinnovations@gmail.com",
  phone: "+254 702 393 677",
  phoneHref: "tel:+254702393677",
  emergencyPhone: "+254 718 338 810",
  emergencyPhoneHref: "tel:+254718338810",
  whatsapp: "+254702393677",
  address: {
    street: "Meru Makutano, C91, Opp. Equity Bank",
    city: "Meru",
    state: "Meru",
    zip: "60200",
    country: "Kenya",
  },
  mapsUrl: "https://maps.google.com/?q=Meru+Makutano+C91+Equity+Bank",
  hours: [
    { day: "Monday – Friday", time: "7:00 AM – 6:00 PM" },
    { day: "Saturday", time: "8:00 AM – 4:00 PM" },
    { day: "Sunday", time: "Emergency Only" },
  ],
  social: {
    facebook: "https://facebook.com/infieldinnovations",
    instagram: "https://instagram.com/infieldinnovations",
    linkedin: "https://linkedin.com/company/infieldinnovations",
    tiktok: "https://tiktok.com/@infieldinnovations",
    youtube: "https://youtube.com/@InfieldInnovations",
    whatsapp: "https://wa.me/254702393677",
  },
  mission:
    "To deliver reliable, sustainable engineering solutions that empower Kenyan communities.",
  brands: [
    "Grundfos",
    "Lorentz",
    "Schneider Electric",
    "Huawei",
    "Canadian Solar",
    "JA Solar",
    "Trina Solar",
    "Davis & Shirtliff",
  ],
  serviceAreas: [
    "Meru",
    "Nairobi",
    "Kiambu",
    "Nyeri",
    "Embu",
    "Isiolo",
    "Nanyuki",
    "Thika",
  ],
} as const;

export const navItems = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "Resources", href: "/resources" },
  { label: "FAQ", href: "/faq" },
  { label: "Quote", href: "/quote" },
] as const;

export const footerLinks = {
  services: [
    { label: "Electrical", href: "/services/electrical" },
    { label: "Plumbing", href: "/services/plumbing" },
    { label: "Solar", href: "/services/solar" },
    { label: "Irrigation", href: "/services/irrigation" },
    { label: "Borehole", href: "/services/boreholes" },
  ],
  company: [
    { label: "About Us", href: "/about" },
    { label: "Resources", href: "/resources" },
    { label: "FAQ", href: "/faq" },
    { label: "Contact", href: "/contact" },
    { label: "Request a Quote", href: "/quote" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms & Conditions", href: "/terms" },
    { label: "Sitemap", href: "/sitemap.xml" },
    { label: "Cookie Policy", href: "/cookies" },
  ],
} as const;

export const certifications = [
  "Licensed & Insured",
  "ISO 9001 Certified",
  "Master Electrician",
  "Green Energy Pro",
] as const;
