import { Reveal } from "@/components/Reveal";

export function Judgment() {
  return (
    <section className="section quiet section--sunk" aria-labelledby="ai-title">
      <div className="container">
        <Reveal className="editorial">
          <div className="editorial__aside">
            <p className="eyebrow eyebrow--ruled">Technology</p>
            <h2 className="headline-pair headline-pair--sm" id="ai-title">
              <span>AI makes answers cheaper.</span>{" "}
              <span>Judgment matters more.</span>
            </h2>
          </div>

          <div className="prose prose--tight">
            <p>
              Business owners now have unprecedented access to information,
              frameworks, analysis, and possible solutions.
            </p>
            <p>Venturewright embraces AI aggressively.</p>
            <p>
              But generating possibilities and determining which problem
              actually deserves to be solved are different capabilities.
            </p>
            <p>
              Technology is used to accelerate research, analysis, modeling,
              documentation, and implementation while preserving human judgment
              where the consequences are highest.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
