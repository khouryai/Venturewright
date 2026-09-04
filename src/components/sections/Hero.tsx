import { BookingLink } from "@/components/BookingLink";
import { ArrowDown } from "@/components/Icons";
import { CATEGORY } from "@/lib/site";

const TAGS = [
  "Owner Independence",
  "Growth",
  "New Ventures",
  "Business Architecture",
];

export function Hero() {
  return (
    <section className="hero" id="top" aria-labelledby="hero-title">
      <div className="container hero__inner">
        <div>
          <p className="eyebrow eyebrow--ruled eyebrow--accent">{CATEGORY}</p>
          <h1 className="hero__title" id="hero-title">
            <span>Find the constraint.</span>{" "}
            <span>Architect the solution.</span>{" "}
            <span>Build what comes next.</span>
          </h1>
        </div>

        <div className="hero__body">
          <p className="hero__lead">
            Venturewright is a business architecture studio for founder-led
            companies. We identify the constraint or opportunity with the
            greatest leverage, design the architecture around it, and help turn
            that architecture into measurable business reality.
          </p>

          <div className="hero__actions">
            <BookingLink />
            <a href="#approach" className="btn btn--secondary">
              <span>See How Venturewright Works</span>
              <ArrowDown className="btn__icon" />
            </a>
          </div>
        </div>

        <ul className="hero__tags">
          {TAGS.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
