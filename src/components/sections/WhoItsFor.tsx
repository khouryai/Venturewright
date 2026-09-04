import { BookingLink } from "@/components/BookingLink";
import { Reveal } from "@/components/Reveal";
import { OWNER_SITUATIONS } from "@/lib/content";

export function WhoItsFor() {
  return (
    <section className="section section--lg" aria-labelledby="who-title">
      <div className="container">
        <Reveal>
          <p className="eyebrow eyebrow--ruled">Who it’s for</p>
          <h2 id="who-title" className="section__title section__title--wide">
            Built for owners who have already decided the status quo is not
            enough.
          </h2>
        </Reveal>

        <Reveal as="ul" className="owner-list" delay={60}>
          {OWNER_SITUATIONS.map((item) => (
            <li key={item}>“{item}”</li>
          ))}
        </Reveal>

        <Reveal className="closing-note" delay={80}>
          <p>
            If one of these sounds familiar, the first step is not a proposal.
          </p>
          <p>It’s a conversation.</p>
          <div className="closing-note__cta">
            <BookingLink />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
