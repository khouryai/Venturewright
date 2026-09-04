"use client";

import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { BookingLink } from "./BookingLink";
import { EmailLink } from "./EmailLink";
import { COMPANY_NAME, LOCATION, NAV_LINKS } from "@/lib/site";

const DESKTOP_QUERY = "(min-width: 62em)";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  /* Hairline appears once the page has moved away from the top. */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Close the panel if the viewport grows to the desktop layout. */
  useEffect(() => {
    const mq = window.matchMedia(DESKTOP_QUERY);
    const onChange = () => mq.matches && setOpen(false);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  /* Lock the page behind the panel, and keep focus inside it. */
  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
        return;
      }

      if (event.key !== "Tab") return;

      const focusable = menuRef.current?.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled])',
      );
      if (!focusable?.length) return;

      const items = [toggleRef.current, ...Array.from(focusable)].filter(
        Boolean,
      ) as HTMLElement[];
      const first = items[0];
      const last = items[items.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  /**
   * Closing the panel and scrolling are sequenced by hand: the page is locked
   * while the panel is open, so the browser's own anchor jump would be
   * swallowed.
   */
  const goToSection = useCallback(
    (event: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      const hash = href.slice(href.indexOf("#"));
      const target = document.querySelector(hash);
      // Not on the home page: let the browser follow the link normally.
      if (!target) return;

      event.preventDefault();
      setOpen(false);

      requestAnimationFrame(() => {
        const reduced = window.matchMedia(
          "(prefers-reduced-motion: reduce)",
        ).matches;
        target.scrollIntoView({
          behavior: reduced ? "auto" : "smooth",
          block: "start",
        });
        window.history.pushState(null, "", hash);
      });
    },
    [],
  );

  return (
    <header
      className="header"
      data-scrolled={scrolled}
      data-open={open}
    >
      <div className="container header__inner">
        <Link
          href="/#top"
          prefetch={false}
          className="wordmark"
          aria-label={`${COMPANY_NAME} — home`}
          onClick={(event) => goToSection(event, "/#top")}
        >
          {COMPANY_NAME}
        </Link>

        <nav className="header__nav" aria-label="Primary">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              prefetch={false}
              className="header__link"
              onClick={(event) => goToSection(event, link.href)}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="header__end">
          <BookingLink className="header__cta" />

          <button
            ref={toggleRef}
            type="button"
            className="header__toggle"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((value) => !value)}
          >
            <span>{open ? "Close" : "Menu"}</span>
            <span className="header__toggle-bars" aria-hidden="true">
              <span />
              <span />
            </span>
          </button>
        </div>
      </div>

      {open && (
        <div className="menu" id="mobile-menu" ref={menuRef}>
          <nav aria-label="Mobile">
            <ul className="menu__list">
              {NAV_LINKS.map((link, index) => (
                <li key={link.href} className="menu__item">
                  <Link
                    href={link.href}
                    prefetch={false}
                    className="menu__link"
                    onClick={(event) => goToSection(event, link.href)}
                  >
                    <span>{link.label}</span>
                    <span className="menu__index" aria-hidden="true">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="menu__foot">
            <BookingLink />
            <EmailLink className="menu__email" />
            <p className="menu__meta">{LOCATION}</p>
          </div>
        </div>
      )}
    </header>
  );
}
