import { useEffect, useState } from 'react';
import type { KeywordId, Locale, TextSegment } from '../content/homepageContent';
import { homepageContent } from '../content/homepageContent';
import { ExpansionContent } from './ExpansionContent';
import { InlineRewrite } from './InlineRewrite';
import { KeywordText } from './KeywordText';

type InteractiveParagraphProps = {
  locale: Locale;
  segments: TextSegment[];
  activeKeyword: KeywordId | null;
  onToggleKeyword: (id: KeywordId) => void;
};

const exitAnimationMs = 760;

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
  const [renderedKeyword, setRenderedKeyword] = useState<KeywordId | null>(activeKeyword);
  const [expansionState, setExpansionState] = useState<'open' | 'closing'>('open');

  useEffect(() => {
    if (activeKeyword) {
      setRenderedKeyword(activeKeyword);
      setExpansionState('open');
      return undefined;
    }

    if (!renderedKeyword) {
      return undefined;
    }

    setExpansionState('closing');
    const timeout = window.setTimeout(() => {
      setRenderedKeyword(null);
    }, exitAnimationMs);

    return () => window.clearTimeout(timeout);
  }, [activeKeyword, renderedKeyword]);

  return (
    <p className="mother-paragraph" data-expanded={Boolean(renderedKeyword)}>
      {segments.map((segment, index) => {
        if (segment.kind === 'text') {
          const text = followsActiveCrossSection(segments, index, renderedKeyword)
            ? segment.text.replace(leadingPunctuationPattern, '')
            : segment.text;

          if (!text) {
            return null;
          }

          return (
            <span key={`${segment.text}-${index}`} className="text-fragment" data-defocused={Boolean(renderedKeyword)}>
              {text}
            </span>
          );
        }

        const keyword = homepageContent.keywords[segment.keywordId];
        const active = activeKeyword === segment.keywordId;
        const visible = renderedKeyword === segment.keywordId;
        const defocused = Boolean(renderedKeyword) && !visible;
        const expansionId = `expansion-${segment.keywordId}`;
        const trailingPunctuation = visible && keyword.mode === 'crossSection'
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
            {visible && keyword.mode === 'inline' ? (
              <InlineRewrite text={keyword.content[locale][0]} state={expansionState} />
            ) : null}
            {visible && keyword.mode === 'crossSection' ? (
              <ExpansionContent
                id={expansionId}
                label={segment.text}
                paragraphs={keyword.content[locale]}
                state={expansionState}
              />
            ) : null}
          </span>
        );
      })}
    </p>
  );
}
