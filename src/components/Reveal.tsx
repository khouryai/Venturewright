"use client";

import { useEffect, useRef, type ElementType, type ReactNode } from "react";

/**
 * A single IntersectionObserver shared by every Reveal on the page, created
 * lazily on first mount. Elements reveal once and are then unobserved.
 */
let observer: IntersectionObserver | null = null;

function getObserver() {
  if (observer) return observer;
  observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer?.unobserve(entry.target);
        }
      }
    },
    { rootMargin: "0px 0px -8% 0px", threshold: 0.08 },
  );
  return observer;
}

type Props = {
  children: ReactNode;
  /** Element to render. Defaults to a div. */
  as?: ElementType;
  className?: string;
  /** Stagger, in milliseconds. */
  delay?: number;
  id?: string;
};

/**
 * Fades content up as it enters the viewport. Purely decorative: the markup
 * is server-rendered and remains fully readable if the observer never runs
 * (see the <noscript> fallback in layout.tsx) or when the visitor prefers
 * reduced motion.
 */
export function Reveal({
  children,
  as: Tag = "div",
  className = "",
  delay = 0,
  id,
}: Props) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (
      typeof IntersectionObserver === "undefined" ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      el.classList.add("is-visible");
      return;
    }

    const io = getObserver();
    io.observe(el);
    return () => io.unobserve(el);
  }, []);

  return (
    <Tag
      id={id}
      ref={ref}
      className={`reveal ${className}`.trim()}
      style={delay ? ({ "--reveal-delay": `${delay}ms` } as React.CSSProperties) : undefined}
    >
      {children}
    </Tag>
  );
}
