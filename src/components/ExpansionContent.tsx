import type { CSSProperties } from 'react';

type ExpansionContentProps = {
  paragraphs: string[];
  id: string;
  label: string;
  state: 'open' | 'closing';
};

export function ExpansionContent({ paragraphs, id, label, state }: ExpansionContentProps) {
  return (
    <span className="cross-section" data-state={state} id={id} role="region" aria-label={label} aria-live="polite">
      <span className="cross-section-inner">
        {paragraphs.map((paragraph, index) => (
          <span
            className="cross-section-paragraph"
            key={paragraph}
            style={{
              '--paragraph-delay': `${260 + index * 92}ms`,
              '--paragraph-exit-delay': `${(paragraphs.length - index - 1) * 44}ms`,
            } as CSSProperties}
          >
            {paragraph}
          </span>
        ))}
      </span>
    </span>
  );
}
