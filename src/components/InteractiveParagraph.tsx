import type { KeywordId, Locale, TextSegment } from '../content/homepageContent';
import { homepageContent } from '../content/homepageContent';
import { ExpansionContent } from './ExpansionContent';
import { KeywordText } from './KeywordText';

type InteractiveParagraphProps = {
  locale: Locale;
  segments: TextSegment[];
  activeKeyword: KeywordId | null;
  onToggleKeyword: (id: KeywordId) => void;
};

const leadingPunctuationPattern = /^[、，,.;；:：。]+/;

function getLeadingPunctuation(segment: TextSegment | undefined) {
  if (!segment || segment.kind !== 'text') {
    return '';
  }

  return segment.text.match(leadingPunctuationPattern)?.[0] ?? '';
}

function followsActiveCrossSection(segments: TextSegment[], index: number, activeKeyword: KeywordId | null) {
  const previous = segments[index - 1];

  if (!previous || previous.kind !== 'keyword' || previous.keywordId !== activeKeyword) {
    return false;
  }

  return homepageContent.keywords[previous.keywordId].mode === 'crossSection';
}

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
          const text = followsActiveCrossSection(segments, index, activeKeyword)
            ? segment.text.replace(leadingPunctuationPattern, '')
            : segment.text;

          if (!text) {
            return null;
          }

          return (
            <span key={`${segment.text}-${index}`} className="text-fragment" data-defocused={Boolean(activeKeyword)}>
              {text}
            </span>
          );
        }

        const keyword = homepageContent.keywords[segment.keywordId];
        const active = activeKeyword === segment.keywordId;
        const defocused = Boolean(activeKeyword) && !active;
        const expansionId = `expansion-${segment.keywordId}`;
        const trailingPunctuation = active && keyword.mode === 'crossSection'
          ? getLeadingPunctuation(segments[index + 1])
          : '';

        return (
          <span key={`${segment.keywordId}-${index}`} className="keyword-wrap">
            <KeywordText
              id={segment.keywordId}
              text={segment.text}
              active={active}
              defocused={defocused}
              onToggle={onToggleKeyword}
              controls={keyword.mode === 'crossSection' ? expansionId : undefined}
            />
            {trailingPunctuation}
            {active && keyword.mode === 'inline' ? (
              <span className="inline-rewrite"> {keyword.content[locale][0]}</span>
            ) : null}
            {active && keyword.mode === 'crossSection' ? (
              <ExpansionContent id={expansionId} label={segment.text} paragraphs={keyword.content[locale]} />
            ) : null}
          </span>
        );
      })}
    </p>
  );
}
