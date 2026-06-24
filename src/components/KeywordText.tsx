import type { KeyboardEvent } from 'react';
import type { KeywordId } from '../content/homepageContent';

type KeywordTextProps = {
  id: KeywordId;
  text: string;
  active: boolean;
  defocused: boolean;
  controls?: string;
  onToggle: (id: KeywordId) => void;
};

export function KeywordText({ id, text, active, defocused, controls, onToggle }: KeywordTextProps) {
  const handleKeyDown = (event: KeyboardEvent<HTMLSpanElement>) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      onToggle(id);
    }
  };

  return (
    <span
      role="button"
      tabIndex={0}
      className="keyword"
      data-active={active}
      data-defocused={defocused}
      onClick={() => onToggle(id)}
      onKeyDown={handleKeyDown}
      aria-expanded={active}
      aria-controls={controls}
      aria-label={text}
    >
      {text}
    </span>
  );
}
