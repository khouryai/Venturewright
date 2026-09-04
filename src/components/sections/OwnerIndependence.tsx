import { Reveal } from "@/components/Reveal";
import { TRANSFORMATION } from "@/lib/content";

export function OwnerIndependence() {
  return (
    <section
      className="section section--lg"
      id="owner-independence"
      aria-labelledby="owner-title"
    >
      <div className="container">
        <Reveal className="editorial">
          <div className="editorial__aside">
            <p className="eyebrow eyebrow--ruled">Owner Independence</p>
            <h2 id="owner-title">
              The business should be an asset — not another job the owner cannot
              quit.
            </h2>
          </div>

          <div className="prose">
            <p>
              Founder dependence often develops precisely because the founder is
              highly capable.
            </p>
            <p>
              The founder becomes the fastest decision-maker, the person with
              the most context, the strongest relationship holder, and the
              person everyone trusts to resolve uncertainty.
            </p>
            <p>Eventually, the organization learns to depend on that capability.</p>
            <p>
              Venturewright helps reverse that dependence without requiring the
              founder to become irrelevant.
            </p>
            <p>The goal is choice.</p>
          </div>
        </Reveal>

        <Reveal delay={60}>
          <p className="feature-line">
            <span>Work because you want to.</span>{" "}
            <span>Not because the company requires you to.</span>
          </p>
        </Reveal>

        <Reveal className="transform" delay={80}>
          {TRANSFORMATION.map((stage, index) => (
            <div
              className={`transform__stage${
                index === TRANSFORMATION.length - 1
                  ? " transform__stage--end"
                  : ""
              }`}
              key={stage.label}
            >
              <p className="transform__label">{stage.label}</p>
              {stage.items ? (
                <ul className="transform__list">
                  {stage.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              ) : (
                <p className="transform__note">{stage.note}</p>
              )}
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
