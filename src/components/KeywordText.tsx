import type { KeywordId } from '../content/homepageContent';

type KeywordTextProps = {
  id: KeywordId;
  text: string;
  active: boolean;
  defocused: boolean;
  onToggle: (id: KeywordId) => void;
};

export function KeywordText({ id, text, active, defocused, onToggle }: KeywordTextProps) {
  return (
    <button
      type="button"
      className="keyword"
      data-active={active}
      data-defocused={defocused}
      onClick={() => onToggle(id)}
      aria-expanded={active}
      aria-label={text}
    >
      {text}
    </button>
  );
}
