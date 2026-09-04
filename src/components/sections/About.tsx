import { Reveal } from "@/components/Reveal";
import { FOUNDER_NAME } from "@/lib/site";

export function About() {
  return (
    <section
      className="section section--lg section--ink on-ink"
      id="about"
      aria-labelledby="about-title"
    >
      <div className="container">
        <Reveal className="editorial">
          <div className="editorial__aside">
            <p className="eyebrow eyebrow--ruled eyebrow--accent">About</p>
            <h2 id="about-title">Built by an operator.</h2>
          </div>

          <div className="prose">
            <p>
              {FOUNDER_NAME} has spent the last eight years building, scaling,
              systematizing, and redesigning founder-led businesses from the
              inside.
            </p>
            <p>
              His operating experience includes company creation, organizational
              architecture, revenue systems, leadership development, founder
              independence, decision architecture, business-model design,
              commercialization, and new-venture development.
            </p>
            <p>Venturewright grew from a repeated pattern:</p>
            <p>
              Business owners would bring complex, scattered problems. The work
              was to simplify the complexity, identify what actually mattered,
              and design the system around the solution.
            </p>
            <p>
              Venturewright turns that work into a focused business architecture
              practice.
            </p>
          </div>
        </Reveal>

        <Reveal as="figure" className="quote" delay={60}>
          <blockquote>
            “I don’t want to build businesses that require more of the owner’s
            life. I want to build better assets.”
          </blockquote>
          <figcaption>
            {FOUNDER_NAME} — Founder, Venturewright
          </figcaption>
        </Reveal>
      </div>
    </section>
  );
}
