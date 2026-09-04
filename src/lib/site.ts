/**
 * ---------------------------------------------------------------------------
 * VENTUREWRIGHT — CENTRALISED SITE CONFIGURATION
 * ---------------------------------------------------------------------------
 * This is the single source of truth for every business fact used across the
 * site: company name, email address, booking URL and domain.
 *
 * To change where the "Talk About Your Business" buttons point, or which email
 * address is displayed, edit the values below. Nothing is duplicated elsewhere
 * in the codebase — every call-to-action and every mailto: link reads from here.
 * ---------------------------------------------------------------------------
 */

export const COMPANY_NAME = "Venturewright";

export const EMAIL = "Matthew@venturewrightco.com";

export const BOOKING_URL =
  "https://calendly.com/matthew-venturewrightco/new-meeting";

/** The final production domain. This is the brand's address, always. */
export const DOMAIN = "https://venturewrightco.com";

/** Domain without protocol — used for display in the footer. */
export const DOMAIN_DISPLAY = "venturewrightco.com";

/* ---------------------------------------------------------------------------
 * WHERE THIS BUILD IS BEING SERVED FROM
 * ---------------------------------------------------------------------------
 * The site normally lives at DOMAIN, and these three values need no attention.
 * They exist so the same codebase can also be published to a preview host that
 * serves the site from somewhere else — GitHub Pages, for example, which serves
 * a project site under a sub-path such as /Venturewright.
 *
 * Set at build time; all three are optional:
 *
 *   NEXT_PUBLIC_SITE_ORIGIN   scheme + host, no trailing slash
 *                             e.g. https://khouryai.github.io
 *   NEXT_PUBLIC_BASE_PATH     sub-path the site is served from, leading slash
 *                             e.g. /Venturewright
 *   NEXT_PUBLIC_NOINDEX       "true" to ask search engines not to index this
 *                             build — used for preview deployments so they do
 *                             not compete with the real domain
 *
 * To move to the production domain, drop all three. Nothing else changes.
 * ------------------------------------------------------------------------- */

/** Sub-path this build is served from; empty when served at the root. */
export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

/** Absolute base URL of this particular deployment. */
export const SITE_URL =
  (process.env.NEXT_PUBLIC_SITE_ORIGIN ?? DOMAIN).replace(/\/+$/, "") +
  BASE_PATH;

/** True for preview deployments, which should stay out of search results. */
export const NOINDEX = process.env.NEXT_PUBLIC_NOINDEX === "true";

/** `mailto:` href derived from EMAIL so the address is never duplicated. */
export const EMAIL_HREF = `mailto:${EMAIL}` as const;

export const FOUNDER_NAME = "Matthew";

export const CATEGORY = "Business Architecture Studio";

export const LOCATION = "Based in Puerto Rico • Select engagements";

/** Label used on every primary call to action. */
export const PRIMARY_CTA_LABEL = "Talk About Your Business";

/** Attributes applied to every outbound link, including the booking URL. */
export const EXTERNAL_LINK_PROPS = {
  target: "_blank",
  rel: "noopener noreferrer",
} as const;

export const SEO = {
  title: `${COMPANY_NAME} | ${CATEGORY}`,
  description:
    "Venturewright helps founder-led businesses identify their highest-leverage constraint or opportunity, architect the solution, and turn it into measurable business reality.",
  canonical: `${SITE_URL}/`,
  ogImage: `${SITE_URL}/og.png`,
  ogImageAlt: `${COMPANY_NAME} — ${CATEGORY}`,
} as const;

/**
 * Primary navigation. Each `href` is a fragment on the home page, written
 * root-relative so the same header also works from the 404 page.
 */
export const NAV_LINKS = [
  { label: "Approach", href: "/#approach" },
  { label: "Owner Independence", href: "/#owner-independence" },
  { label: "Architecture in Practice", href: "/#architecture-in-practice" },
  { label: "About", href: "/#about" },
  { label: "Contact", href: "/#contact" },
] as const;
