import { useMemo, useState } from 'react';
import { homepageContent, type Locale } from '../content/homepageContent';
import { MetaLine } from './MetaLine';

export function HomePage() {
  const [locale, setLocale] = useState<Locale>('zh');
  const content = homepageContent[locale];

  const paragraphText = useMemo(
    () =>
      content.segments
        .map((segment) => segment.text)
        .join('')
        .replace(/^我是张宇衡，/, '我是')
        .replace(/^I'm Yuheng Zhang, /, "I'm "),
    [content.segments],
  );

  return (
    <main className="page-shell">
      <section className="text-composition" aria-label="Personal introduction">
        <MetaLine
          displayName={content.meta.displayName}
          email={content.meta.email}
          locale={locale}
          onToggleLocale={() => setLocale((current) => (current === 'zh' ? 'en' : 'zh'))}
        />
        <p className="mother-paragraph">{paragraphText}</p>
      </section>
    </main>
  );
}
