import type { Metadata } from "next";
import { siteConfig } from "@/data/site.config";
import AboutClient from "./AboutClient";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Infield Innovations — our mission, values, and the team of certified professionals dedicated to delivering exceptional electrical, plumbing, solar, irrigation, and borehole services across Kenya.",
  keywords: [
    "about Infield Innovations",
    "engineering company Kenya",
    "certified engineers Kenya",
    "solar company Meru",
    "borehole drilling company",
    "electrical contractor Kenya",
  ],
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About Infield Innovations",
    description:
      "For over 15 years, Infield Innovations has been the trusted name in electrical, plumbing, solar, irrigation, and borehole services across Kenya.",
    url: `${siteConfig.url}/about`,
    siteName: siteConfig.name,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Infield Innovations",
    description:
      "For over 15 years, Infield Innovations has been the trusted name in electrical, plumbing, solar, irrigation, and borehole services across Kenya.",
  },
};

export default function AboutPage() {
  return <AboutClient />;
}
