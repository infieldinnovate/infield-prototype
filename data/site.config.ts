// ============================================
// Site Configuration & Constants
// ============================================

export const siteConfig = {
  name: "Infield Innovations",
  shortName: "Infield",
  tagline: "Powering Homes & Businesses with Expert Engineering",
  foundedYear: "2018",
  description:
    "Infield Innovations delivers professional electrical, plumbing, solar, irrigation, and borehole services across Kenya. Certified technicians, quality workmanship, and reliable solutions for residential and commercial properties.",
  url: "https://infieldinnovations.co.ke",
  ogImage: "/og-image.png",
  email: "infieldinnovations@gmail.com",
  phone: "+254702393677",
  phoneHref: "tel:+254702393677",
  emergencyPhone: "+254718338810",
  emergencyPhoneHref: "tel:+254718338810",
  whatsapp: "+254702393677",
  address: {
    street: "Meru Makutano, C91, Opp. Equity Bank",
    city: "Meru",
    state: "Meru",
    zip: "60200",
    country: "Kenya",
  },
  mapsEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d1671.429492380814!2d37.64300033539926!3d0.05997718188361423!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMMKwMDMnMzUuMSJOIDM3wrAzOCczNS4yIkU!5e1!3m2!1sen!2ske!4v1787519714315!5m2!1sen!2ske",
  mapsUrl: "https://maps.app.goo.gl/qh4wY52hc3GF4DtE7",
  hours: [
    { day: "Monday – Friday", time: "7:00 AM – 6:00 PM" },
    { day: "Saturday", time: "8:00 AM – 4:00 PM" },
    { day: "Sunday", time: "Emergency Only" },
  ],
  mission:
    "To deliver reliable, sustainable engineering solutions that empower Kenyan communities.",
} as const;
