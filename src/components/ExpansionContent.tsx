type ExpansionContentProps = {
  paragraphs: string[];
  id: string;
  label: string;
};

export function ExpansionContent({ paragraphs, id, label }: ExpansionContentProps) {
  return (
    <span className="cross-section" id={id} role="region" aria-label={label} aria-live="polite">
      {paragraphs.map((paragraph) => (
        <span className="cross-section-paragraph" key={paragraph}>
          {paragraph}
        </span>
      ))}
    </span>
  );
}
