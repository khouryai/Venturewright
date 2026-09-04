import type { Metadata, Viewport } from "next";
import { Inter, Newsreader } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import {
  CATEGORY,
  COMPANY_NAME,
  EMAIL,
  FOUNDER_NAME,
  SEO,
  SITE_URL,
} from "@/lib/site";
import "./globals.css";

/**
 * Display serif. Only the 400 weight is used, so a static instance is
 * requested rather than the full variable font — noticeably smaller.
 */
const newsreader = Newsreader({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-newsreader",
});

/** Text face. Variable, so intermediate weights (450) render correctly. */
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: SEO.title,
  description: SEO.description,
  applicationName: COMPANY_NAME,
  authors: [{ name: COMPANY_NAME, url: SITE_URL }],
  creator: COMPANY_NAME,
  publisher: COMPANY_NAME,
  openGraph: {
    type: "website",
    url: SEO.canonical,
    siteName: COMPANY_NAME,
    title: SEO.title,
    description: SEO.description,
    locale: "en_US",
    images: [
      {
        url: SEO.ogImage,
        width: 1200,
        height: 630,
        alt: SEO.ogImageAlt,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SEO.title,
    description: SEO.description,
    images: [SEO.ogImage],
  },
  category: CATEGORY,
};

export const viewport: Viewport = {
  themeColor: "#fbf9f5",
  colorScheme: "light",
};

/** Organization / service description for search engines. */
const structuredData = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: COMPANY_NAME,
  alternateName: `${COMPANY_NAME} ${CATEGORY}`,
  description: SEO.description,
  url: SEO.canonical,
  email: EMAIL,
  image: SEO.ogImage,
  founder: { "@type": "Person", name: FOUNDER_NAME },
  address: { "@type": "PostalAddress", addressCountry: "PR" },
  serviceType: CATEGORY,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${newsreader.variable}`}>
      <head>
        <script
          type="application/ld+json"
          // Serialised from a local constant; no user input is involved.
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <noscript>
          {/* Scroll reveals are decorative — show everything without JS. */}
          <style>{`.reveal{opacity:1!important;transform:none!important}`}</style>
        </noscript>
      </head>
      <body>
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
