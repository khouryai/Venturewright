import type { Metadata } from "next";
import Link from "next/link";
import { BookingLink } from "@/components/BookingLink";

// Next.js marks the not-found route noindex automatically.
export const metadata: Metadata = {
  title: "Page not found | Venturewright",
};

export default function NotFound() {
  return (
    <section className="section section--lg" aria-labelledby="nf-title">
      <div className="container">
        <p className="eyebrow eyebrow--ruled eyebrow--accent">Error 404</p>
        <h1 id="nf-title" className="section__title">
          This page does not exist.
        </h1>

        <div className="prose not-found__body">
          <p>The page you were looking for has moved, or never existed.</p>
        </div>

        <div className="btn-row not-found__actions">
          <Link href="/" className="btn btn--secondary">
            <span>Back to the home page</span>
          </Link>
          <BookingLink />
        </div>
      </div>
    </section>
  );
}
