import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { Problem } from "@/components/sections/Problem";
import { Pillars } from "@/components/sections/Pillars";
import { Method } from "@/components/sections/Method";
import { OwnerIndependence } from "@/components/sections/OwnerIndependence";
import { Practice } from "@/components/sections/Practice";
import { Symptoms } from "@/components/sections/Symptoms";
import { WhyVenturewright } from "@/components/sections/WhyVenturewright";
import { Judgment } from "@/components/sections/Judgment";
import { About } from "@/components/sections/About";
import { WhoItsFor } from "@/components/sections/WhoItsFor";
import { Engagement } from "@/components/sections/Engagement";
import { FinalCta } from "@/components/sections/FinalCta";

/**
 * Page-level metadata. The canonical URL and indexing directives live here
 * rather than in the layout so they are not inherited by the 404 route.
 */
export const metadata: Metadata = {
  alternates: { canonical: "/" },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <Problem />
      <Pillars />
      <Method />
      <OwnerIndependence />
      <Practice />
      <Symptoms />
      <WhyVenturewright />
      <Judgment />
      <About />
      <WhoItsFor />
      <Engagement />
      <FinalCta />
    </>
  );
}
