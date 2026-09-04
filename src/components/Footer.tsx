import Link from "next/link";
import { EmailLink } from "./EmailLink";
import {
  CATEGORY,
  COMPANY_NAME,
  DOMAIN_DISPLAY,
  LOCATION,
} from "@/lib/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer on-ink">
      <div className="container">
        <div className="footer__top">
          <div>
            <span className="wordmark">{COMPANY_NAME}</span>
            <p className="footer__descriptor">{CATEGORY}</p>
          </div>

          <div className="footer__links">
            <Link href="/" prefetch={false}>
              {DOMAIN_DISPLAY}
            </Link>
            <EmailLink />
          </div>
        </div>

        <div className="footer__bottom">
          <p>{LOCATION}</p>
          <p>
            © {year} {COMPANY_NAME}
          </p>
        </div>
      </div>
    </footer>
  );
}
