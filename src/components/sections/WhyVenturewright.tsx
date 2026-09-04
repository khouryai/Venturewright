import { Reveal } from "@/components/Reveal";
import { PRINCIPLES } from "@/lib/content";

export function WhyVenturewright() {
  return (
    <section
      className="section section--lg section--ruled-inset"
      aria-labelledby="why-title"
    >
      <div className="container">
        <Reveal>
          <p className="eyebrow eyebrow--ruled">Why Venturewright</p>
          <h2 id="why-title" className="headline-stack">
            <span>Outside perspective.</span>{" "}
            <span>Operator judgment.</span>{" "}
            <span>Business-wide architecture.</span>
          </h2>
        </Reveal>

        <Reveal as="dl" className="principles principles--spaced" delay={60}>
          {PRINCIPLES.map((principle) => (
            <div className="principle" key={principle.term}>
              <dt className="principle__term">{principle.term}</dt>
              <dd className="principle__desc">{principle.description}</dd>
            </div>
          ))}
        </Reveal>

        <Reveal className="closing-note" delay={80}>
          <p>Venturewright is intentionally small.</p>
          <p>The objective is not to become another implementation agency.</p>
          <p>The scarce resource is senior judgment.</p>
        </Reveal>
      </div>
    </section>
  );
}
