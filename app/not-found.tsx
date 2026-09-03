import Link from "next/link";
import type { Metadata } from "next";
import { Chrome as Home, ArrowLeft, Search, Wrench } from "lucide-react";
import { LinkButton } from "@/components/ui/LinkButton";
import { navLinks, resourcesNavItems } from "@/data/links";
import styles from "./not-found.module.scss";

export const metadata: Metadata = {
  title: "Page Not Found",
  description:
    "The page you are looking for could not be found. Browse our services or return to the home page.",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <div className={styles.container} role="main">
      <div className={styles.content}>
        <div className={styles.iconWrapper} aria-hidden="true">
          <Wrench size={48} />
        </div>
        <span className={styles.errorCode} aria-hidden="true">
          404
        </span>
        <h1 className={styles.title}>Page Not Found</h1>
        <p className={styles.description}>
          Looks like this page took a wrong turn. The page you&apos;re looking
          for doesn&apos;t exist or has been moved.
        </p>
        <div className={styles.actions}>
          <LinkButton href="/" size="lg" leftIcon={<Home size={18} />}>
            Back to Home
          </LinkButton>
        </div>

        <nav className={styles.suggestions} aria-label="Suggested pages">
          <p className={styles.suggestionsTitle}>Try one of these pages:</p>
          <div className={styles.suggestionLinks}>
            {navLinks
              .filter((item) => item.href !== "/")
              .map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={styles.suggestionLink}
                >
                  {item.label}
                </Link>
              ))}
            {resourcesNavItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={styles.suggestionLink}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </nav>
      </div>
    </div>
  );
}
