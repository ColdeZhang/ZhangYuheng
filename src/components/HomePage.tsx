import { useState } from 'react';
import { homepageContent, type KeywordId, type Locale } from '../content/homepageContent';
import { InteractiveParagraph } from './InteractiveParagraph';
import { MetaLine } from './MetaLine';

export function HomePage() {
  const [locale, setLocale] = useState<Locale>('zh');
  const [activeKeyword, setActiveKeyword] = useState<KeywordId | null>(null);
  const content = homepageContent[locale];

  const toggleKeyword = (keywordId: KeywordId) => {
    setActiveKeyword((current) => (current === keywordId ? null : keywordId));
  };

  return (
    <main className="page-shell" onClick={(event) => {
      if (event.target === event.currentTarget) {
        setActiveKeyword(null);
      }
    }}>
      <section className="text-composition" aria-label="Personal introduction">
        <MetaLine
          displayName={content.meta.displayName}
          email={content.meta.email}
          locale={locale}
          onToggleLocale={() => setLocale((current) => (current === 'zh' ? 'en' : 'zh'))}
        />
        <InteractiveParagraph
          locale={locale}
          segments={content.segments}
          activeKeyword={activeKeyword}
          onToggleKeyword={toggleKeyword}
        />
      </section>
    </main>
  );
}
