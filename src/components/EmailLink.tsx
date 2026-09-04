import { EMAIL, EMAIL_HREF } from "@/lib/site";

/** Displays the founder's email address, always linked via mailto:. */
export function EmailLink({ className = "" }: { className?: string }) {
  return (
    <a href={EMAIL_HREF} className={className}>
      {EMAIL}
    </a>
  );
}
