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
  return (
    <button
      type="button"
      className="keyword"
      data-active={active}
      data-defocused={defocused}
      onClick={() => onToggle(id)}
      aria-expanded={active}
      aria-controls={controls}
      aria-label={text}
    >
      {text}
    </button>
  );
}
