import type { ReactNode } from "react";
import {
  BOOKING_URL,
  EXTERNAL_LINK_PROPS,
  PRIMARY_CTA_LABEL,
} from "@/lib/site";
import { ArrowUpRight } from "./Icons";

type Props = {
  /** Visual variant. Defaults to the solid primary button. */
  variant?: "primary" | "secondary";
  className?: string;
  children?: ReactNode;
};

/**
 * The single primary conversion element. Every instance points at
 * BOOKING_URL from the centralised config and opens in a new tab.
 */
export function BookingLink({
  variant = "primary",
  className = "",
  children = PRIMARY_CTA_LABEL,
}: Props) {
  return (
    <a
      href={BOOKING_URL}
      {...EXTERNAL_LINK_PROPS}
      className={`btn btn--${variant} ${className}`.trim()}
    >
      <span>{children}</span>
      <ArrowUpRight className="btn__icon" />
      <span className="sr-only">(opens in a new tab)</span>
    </a>
  );
}
