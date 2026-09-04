import { Reveal } from "@/components/Reveal";
import { CASES } from "@/lib/content";

export function Practice() {
  return (
    <section
      className="section section--lg section--sunk"
      id="architecture-in-practice"
      aria-labelledby="practice-title"
    >
      <div className="container">
        <Reveal className="editorial">
          <div className="editorial__aside">
            <p className="eyebrow eyebrow--ruled">Founder operating experience</p>
            <h2 id="practice-title">Architecture in practice.</h2>
          </div>

          <div>
            <div className="prose">
              <p>
                The thinking behind Venturewright was developed by building and
                redesigning founder-led businesses from the inside.
              </p>
            </div>

            <p className="disclaimer">
              These examples reflect founder operating experience and business
              architecture work performed before or outside formal Venturewright
              client engagements. They are not Venturewright client engagements,
              and no outcome described here should be read as a Venturewright
              client result.
            </p>
          </div>
        </Reveal>

        <div className="cases">
          {CASES.map((entry, index) => (
            <Reveal as="article" className="case" key={entry.title}>
              <header className="case__head">
                <span className="case__index">
                  Case {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="case__title">{entry.title}</h3>
                <p className="case__sector">{entry.sector}</p>
              </header>

              <dl className="case__rows">
                {entry.rows.map((row) => (
                  <div className="case__row" key={row.label}>
                    <dt>{row.label}</dt>
                    <dd>{row.text}</dd>
                  </div>
                ))}
              </dl>

              <p className="case__note">{entry.note}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
