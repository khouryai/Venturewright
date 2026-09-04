import { Reveal } from "@/components/Reveal";
import { PILLARS } from "@/lib/content";

export function Pillars() {
  return (
    <section
      className="section section--lg section--sunk"
      aria-labelledby="pillars-title"
    >
      <div className="container">
        <Reveal>
          <p className="eyebrow eyebrow--ruled">
            Three ways Venturewright creates value
          </p>
          <h2 id="pillars-title" className="section__title">
            Architecture around what matters most.
          </h2>
        </Reveal>

        <div className="pillars">
          {PILLARS.map((pillar, index) => (
            <Reveal
              as="article"
              className="pillar"
              key={pillar.kicker}
              delay={index * 60}
            >
              <div>
                <div className="pillar__meta">
                  <span className="pillar__num" aria-hidden="true">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <p className="pillar__kicker">{pillar.kicker}</p>
                </div>
                <h3 className="pillar__title">{pillar.title}</h3>
              </div>

              <div className="prose prose--tight">
                {pillar.body.map((paragraph) => (
                  <p key={paragraph.slice(0, 32)}>{paragraph}</p>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
