import type { KeywordId, Locale, TextSegment } from '../content/homepageContent';
import { homepageContent } from '../content/homepageContent';
import { KeywordText } from './KeywordText';

type InteractiveParagraphProps = {
  locale: Locale;
  segments: TextSegment[];
  activeKeyword: KeywordId | null;
  onToggleKeyword: (id: KeywordId) => void;
};

export function InteractiveParagraph({
  locale,
  segments,
  activeKeyword,
  onToggleKeyword,
}: InteractiveParagraphProps) {
  return (
    <p className="mother-paragraph" data-expanded={Boolean(activeKeyword)}>
      {segments.map((segment, index) => {
        if (segment.kind === 'text') {
          return (
            <span key={`${segment.text}-${index}`} className="text-fragment" data-defocused={Boolean(activeKeyword)}>
              {segment.text}
            </span>
          );
        }

        const keyword = homepageContent.keywords[segment.keywordId];
        const active = activeKeyword === segment.keywordId;
        const defocused = Boolean(activeKeyword) && !active;

        return (
          <span key={segment.keywordId} className="keyword-wrap">
            <KeywordText
              id={segment.keywordId}
              text={segment.text}
              active={active}
              defocused={defocused}
              onToggle={onToggleKeyword}
            />
            {active && keyword.mode === 'inline' ? (
              <span className="inline-rewrite"> {keyword.content[locale][0]}</span>
            ) : null}
          </span>
        );
      })}
    </p>
  );
}
