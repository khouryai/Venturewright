import { Rail } from "@/components/Rail";
import { Reveal } from "@/components/Reveal";
import { DIAGNOSIS_RAIL } from "@/lib/content";

export function Problem() {
  return (
    <section
      className="section section--lg section--ruled-inset"
      id="approach"
      aria-labelledby="problem-title"
    >
      <div className="container">
        <Reveal className="editorial">
          <div className="editorial__aside">
            <p className="eyebrow eyebrow--ruled">The Problem</p>
            <h2 className="headline-pair" id="problem-title">
              <span>Most businesses don’t suffer from a lack of ideas.</span>{" "}
              <span>They suffer from uncertainty about what matters most.</span>
            </h2>
          </div>

          <div className="prose">
            <p>
              An owner may think the business needs more marketing when the real
              constraint is sales conversion.
            </p>
            <p>
              They may think they need another executive when the real problem
              is unclear authority and decision rights.
            </p>
            <p>
              They may see a new revenue opportunity when the existing company
              is already too dependent on the founder.
            </p>
            <p>
              Venturewright begins by separating the stated problem from the
              highest-leverage problem.
            </p>
          </div>
        </Reveal>

        <Reveal delay={80}>
          <Rail steps={DIAGNOSIS_RAIL} />
        </Reveal>
      </div>
    </section>
  );
}
