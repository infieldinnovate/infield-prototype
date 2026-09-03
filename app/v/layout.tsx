import type { Metadata } from 'next';
import { siteConfig } from '@/data/site.config';

export const metadata: Metadata = {
  title: 'Employee Verification',
  description:
    'Verify Infield Innovations employee credentials using a unique verification code or QR scanner.',
  alternates: {
    canonical: '/v',
  },
  openGraph: {
    title: `Employee Verification | ${siteConfig.name}`,
    description:
      'Verify Infield Innovations employee credentials using a unique verification code or QR scanner.',
    url: `${siteConfig.url}/v`,
    siteName: siteConfig.name,
    type: 'website',
  },
  robots: { index: false, follow: false },
};

export default function VerificationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
