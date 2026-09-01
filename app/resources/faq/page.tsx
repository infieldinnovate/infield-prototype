import type { Metadata } from "next";
import FAQClient from "./FAQClient";
import { FAQs } from "@/data/faqs";
import { siteConfig } from "@/data/site.config";
import { buildFAQSchema } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description:
    "Find answers to common questions about Infield Innovations' services, products, installation, maintenance, warranties, and payment options. Get help via WhatsApp, phone, or email.",
  keywords: [
    "engineering faq",
    "engineering frequently asked questions",
    "solar faq",
    "borehole faq",
    "water solutions faq",
    "irrigation faq",
  ],
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

const jsonLd = buildFAQSchema(
  FAQs.map((f) => ({ question: f.question, answer: f.answer })),
);

export default function FAQPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <FAQClient />
    </>
  );
}
