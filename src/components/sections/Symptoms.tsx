import { Reveal } from "@/components/Reveal";
import { SYMPTOMS } from "@/lib/content";

export function Symptoms() {
  return (
    <section className="section section--lg" aria-labelledby="symptoms-title">
      <div className="container">
        <Reveal>
          <p className="eyebrow eyebrow--ruled">Examples of problems</p>
          <h2 className="headline-pair" id="symptoms-title">
            <span>Different symptoms.</span>{" "}
            <span>Same question.</span>
          </h2>
          <p className="statement section__subhead">
            What change would create the most value?
          </p>
        </Reveal>

        <Reveal as="ul" className="symptoms" delay={60}>
          {SYMPTOMS.map((item) => (
            <li key={item}>“{item}”</li>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
