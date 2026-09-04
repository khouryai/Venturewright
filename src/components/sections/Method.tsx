import { Reveal } from "@/components/Reveal";
import { METHOD_STEPS } from "@/lib/content";

export function Method() {
  return (
    <section
      className="section section--lg section--ink on-ink"
      id="method"
      aria-labelledby="method-title"
    >
      <div className="container">
        <Reveal>
          <p className="eyebrow eyebrow--ruled eyebrow--accent">
            The Venturewright Method
          </p>
          <h2 id="method-title" className="section__title">
            From ambiguity to architecture.
          </h2>
        </Reveal>

        <Reveal as="ol" className="method" delay={60}>
          {METHOD_STEPS.map((step, index) => (
            <li className="method__step" key={step.term}>
              <span className="method__num" aria-hidden="true">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="method__term">{step.term}</h3>
              <p className="method__q">{step.question}</p>
            </li>
          ))}
        </Reveal>

        <Reveal className="method__anchor" delay={80}>
          <p className="method__pull">
            <span>The framework is simple.</span>{" "}
            <span>Correct diagnosis is not.</span>
          </p>
          <p className="final__meta">
            Venturewright does not sell answers for the sake of answers. The
            objective is a changed business outcome.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
