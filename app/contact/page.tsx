import type { Metadata } from 'next';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { ContactForm } from '@/components/forms/ContactForm';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { siteConfig } from '@/data/site.config';
import { Phone, Mail, MapPin, Clock, MessageSquare, AlertCircle, MessageCircle, ExternalLink } from 'lucide-react';
import styles from './contact.module.scss';

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    'Get in touch with Infield Innovations for electrical, plumbing, solar, irrigation, and borehole services across Kenya. Call us, email us, WhatsApp us, or send a message through our contact form.',
  alternates: {
    canonical: '/contact',
  },
  openGraph: {
    title: 'Contact Infield Innovations',
    description:
      'Reach out to our team for reliable engineering services across Kenya. Phone, email, WhatsApp, and contact form available.',
    url: `${siteConfig.url}/contact`,
    siteName: siteConfig.name,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Infield Innovations',
    description:
      'Reach out to our team for reliable engineering services across Kenya. Phone, email, WhatsApp, and contact form available.',
  },
};

const contactInfo = [
  {
    icon: Phone,
    label: 'Phone',
    value: siteConfig.phone,
    href: siteConfig.phoneHref,
  },
  {
    icon: Mail,
    label: 'Email',
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
  },
  {
    icon: MapPin,
    label: 'Address',
    value: `${siteConfig.address.street}, ${siteConfig.address.city}, ${siteConfig.address.country}`,
  },
];

const enquiryTypes = [
  { icon: MessageSquare, label: 'General Enquiry', description: 'Questions about our services or company' },
  { icon: AlertCircle, label: 'Emergency Service', description: 'Urgent electrical, plumbing, or water issues' },
  { icon: MessageCircle, label: 'WhatsApp Chat', description: 'Quick questions and project discussions' },
];

export default function ContactPage() {
  return (
    <>
      <section className={styles.hero}>
        <div className={styles.container}>
          <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Contact' }]} />
          <SectionHeading
            eyebrow="Get in Touch"
            title="We're Here to Help"
            description="Have a question or ready to start a project? Reach out to us through any of the channels below, or send us a message using the form."
          />
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.grid}>
            {/* Contact Info */}
            <div className={styles.info}>
              <h2 className={styles.infoTitle}>Contact Information</h2>
              <p className={styles.infoDescription}>
                Reach out to us directly using any of these methods. We respond to all inquiries
                within 24 hours.
              </p>

              <div className={styles.infoList}>
                {contactInfo.map((item) => (
                  <div key={item.label} className={styles.infoItem}>
                    <div className={styles.infoIcon}>
                      <item.icon size={22} />
                    </div>
                    <div className={styles.infoContent}>
                      <span className={styles.infoLabel}>{item.label}</span>
                      {item.href ? (
                        <a href={item.href} className={styles.infoValue}>
                          {item.value}
                        </a>
                      ) : (
                        <span className={styles.infoValue}>{item.value}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Emergency Contact */}
              <div className={styles.emergencyCard}>
                <div className={styles.emergencyHeader}>
                  <AlertCircle size={22} />
                  <h3 className={styles.emergencyTitle}>24/7 Emergency</h3>
                </div>
                <p className={styles.emergencyDesc}>
                  For urgent electrical, plumbing, or water emergencies outside business hours.
                </p>
                <a href={siteConfig.emergencyPhoneHref} className={styles.emergencyPhone}>
                  <Phone size={18} />
                  {siteConfig.emergencyPhone}
                </a>
              </div>

              {/* Business Hours */}
              <div className={styles.hoursCard}>
                <div className={styles.hoursHeader}>
                  <Clock size={20} />
                  <h3 className={styles.hoursTitle}>Business Hours</h3>
                </div>
                <ul className={styles.hoursList}>
                  {siteConfig.hours.map((hour) => (
                    <li key={hour.day} className={styles.hoursItem}>
                      <span className={styles.hoursDay}>{hour.day}</span>
                      <span className={styles.hoursTime}>{hour.time}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Enquiry Types */}
              <div className={styles.enquiryTypes}>
                <h3 className={styles.enquiryTitle}>How Can We Help?</h3>
                <div className={styles.enquiryList}>
                  {enquiryTypes.map((type) => (
                    <div key={type.label} className={styles.enquiryItem}>
                      <div className={styles.enquiryIcon}>
                        <type.icon size={20} />
                      </div>
                      <div>
                        <span className={styles.enquiryLabel}>{type.label}</span>
                        <p className={styles.enquiryDesc}>{type.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className={styles.formWrapper}>
              <div className={styles.formHeader}>
                <MessageSquare size={24} />
                <h2 className={styles.formTitle}>Send Us a Message</h2>
                <p className={styles.formDescription}>
                  Fill out the form below and we&apos;ll get back to you as soon as possible.
                </p>
              </div>
              <ContactForm />
            </div>
          </div>

          {/* Interactive Google Map */}
          <ScrollReveal>
            <div className={styles.mapSection}>
              <h2 className={styles.mapTitle}>Visit Our Office</h2>
              <p className={styles.mapDesc}>
                Located in {siteConfig.address.city}, {siteConfig.address.country}. Click to open in Google Maps.
              </p>
              <div className={styles.mapWrapper}>
                <iframe
                  title="Infield Innovations office location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31911.703!2d36.82!3d-1.29!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMcKwMTcnMjQuMCJTIDM2wrA0OScyNC4wIkU!5e0!3m2!1sen!2ske!4v1700000000000"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className={styles.mapIframe}
                />
                <a
                  href={siteConfig.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.mapOverlay}
                >
                  <ExternalLink size={18} />
                  Open in Google Maps
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
