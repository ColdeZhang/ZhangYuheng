type ExpansionContentProps = {
  paragraphs: string[];
  id: string;
};

export function ExpansionContent({ paragraphs, id }: ExpansionContentProps) {
  return (
    <span className="cross-section" id={id} role="region" aria-live="polite">
      {paragraphs.map((paragraph) => (
        <span className="cross-section-paragraph" key={paragraph}>
          {paragraph}
        </span>
      ))}
    </span>
  );
}
