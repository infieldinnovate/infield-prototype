// ============================================
// Site Configuration & Constants
// ============================================

import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTiktok,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";

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

export const socialLinks = {
  facebook: {
    link: "https://facebook.com/infieldinnovations",
    icon: FaFacebook,
    label: "Facebook",
  },
  instagram: {
    link: "https://instagram.com/infieldinnovations",
    icon: FaInstagram,
    label: "Instagram",
  },
  linkedin: {
    link: "https://linkedin.com/company/infieldinnovations",
    icon: FaLinkedin,
    label: "LinkedIn",
  },
  tiktok: {
    link: "https://tiktok.com/@infieldinnovations",
    icon: FaTiktok,
    label: "TikTok",
  },
  youtube: {
    link: "https://youtube.com/@InfieldInnovations",
    icon: FaYoutube,
    label: "YouTube",
  },
  whatsapp: {
    link: "https://wa.me/254702393677",
    icon: FaWhatsapp,
    label: "WhatsApp",
  },
};
