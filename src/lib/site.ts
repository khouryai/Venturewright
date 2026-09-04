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

export const DOMAIN = "https://venturewrightco.com";

/** Domain without protocol — used for display in the footer. */
export const DOMAIN_DISPLAY = "venturewrightco.com";

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
  canonical: DOMAIN,
  ogImage: `${DOMAIN}/og.png`,
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
