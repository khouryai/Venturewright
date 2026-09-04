import { Rail } from "@/components/Rail";
import { Reveal } from "@/components/Reveal";
import { ENGAGEMENT_QUESTIONS, ENGAGEMENT_RAIL } from "@/lib/content";

export function Engagement() {
  return (
    <section
      className="section section--lg section--sunk"
      aria-labelledby="engagement-title"
    >
      <div className="container">
        <Reveal className="editorial">
          <div className="editorial__aside">
            <p className="eyebrow eyebrow--ruled">Engagement model</p>
            <h2 id="engagement-title">Start with the business.</h2>
          </div>

          <div>
            <div className="prose">
              <p>
                Every Venturewright engagement begins by understanding three
                things:
              </p>
            </div>

            <ul className="questions">
              {ENGAGEMENT_QUESTIONS.map((question) => (
                <li key={question}>{question}</li>
              ))}
            </ul>

            <div className="prose questions__after">
              <p>
                From there, Venturewright determines whether there is a
                sufficiently important constraint or opportunity to justify a
                formal architecture engagement.
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={60}>
          <Rail steps={ENGAGEMENT_RAIL} />
        </Reveal>

        <Reveal className="closing-note" delay={80}>
          <p>Some businesses need one architectural intervention.</p>
          <p>Others require broader redesign.</p>
          <p>Not every business needs Venturewright.</p>
        </Reveal>
      </div>
    </section>
  );
}
