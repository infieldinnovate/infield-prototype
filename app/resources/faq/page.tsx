import type { Metadata } from "next";
import FAQClient from "./FAQClient";
import { siteConfig } from "@/data/site.config";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description:
    "Find answers to common questions about Infield Innovations' services, products, installation, maintenance, warranties, and payment options. Get help via WhatsApp, phone, or email.",
  alternates: {
    canonical: "/resources/faq",
  },
  openGraph: {
    title: `FAQ | ${siteConfig.name}`,
    description:
      "Get answers to common questions about our electrical, plumbing, solar, irrigation, and borehole services.",
    url: `${siteConfig.url}/resources/faq`,
    siteName: siteConfig.name,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `FAQ | ${siteConfig.name}`,
    description:
      "Get answers to common questions about our electrical, plumbing, solar, irrigation, and borehole services.",
  },
};

export default function FAQPage() {
  return <FAQClient />;
}
