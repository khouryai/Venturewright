import { BookingLink } from "@/components/BookingLink";
import { EmailLink } from "@/components/EmailLink";
import { Reveal } from "@/components/Reveal";

export function FinalCta() {
  return (
    <section
      className="final section--ink on-ink"
      id="contact"
      aria-labelledby="contact-title"
    >
      <div className="container">
        <Reveal>
          <p className="eyebrow eyebrow--ruled eyebrow--accent">Contact</p>
          <h2 className="final__title" id="contact-title">
            What would most change your business?
          </h2>
        </Reveal>

        <Reveal className="final__grid" delay={60}>
          <div className="prose">
            <p>You may already know the answer.</p>
            <p>Or the problem you see may only be a symptom.</p>
            <p>Either way, the first step is understanding the business.</p>
          </div>

          <div className="final__aside">
            <BookingLink />
            <p className="final__meta">
              <EmailLink className="link" />
              <br />
              <span className="final__note">
                30-minute introductory business conversation.
                <br />
                No preparation required.
              </span>
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
