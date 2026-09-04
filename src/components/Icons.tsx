/** Decorative inline icons. All are hidden from assistive technology. */

const base = {
  viewBox: "0 0 16 16",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
  focusable: false,
};

export function ArrowUpRight({ className }: { className?: string }) {
  return (
    <svg {...base} className={className}>
      <path d="M4 12 12 4" />
      <path d="M5.5 4H12v6.5" />
    </svg>
  );
}

export function ArrowDown({ className }: { className?: string }) {
  return (
    <svg {...base} className={className}>
      <path d="M8 3.5v9" />
      <path d="M3.75 8.25 8 12.5l4.25-4.25" />
    </svg>
  );
}
