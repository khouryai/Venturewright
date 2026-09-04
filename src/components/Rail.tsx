/**
 * A linear progression rendered as a hairline rail: horizontal on wider
 * screens, stacked on small ones. Used for the diagnostic sequence and the
 * engagement sequence.
 */
export function Rail({ steps }: { steps: readonly string[] }) {
  return (
    <ol
      className="rail"
      style={{ ["--rail-cols" as string]: steps.length }}
    >
      {steps.map((step, index) => (
        <li className="rail__item" key={step}>
          <span className="rail__index">
            {String(index + 1).padStart(2, "0")}
          </span>
          <span className="rail__label">{step}</span>
        </li>
      ))}
    </ol>
  );
}
