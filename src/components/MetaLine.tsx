import type { Locale } from '../content/homepageContent';

type MetaLineProps = {
  displayName: string;
  email: string;
  locale: Locale;
  onToggleLocale: () => void;
};

export function MetaLine({ displayName, email, locale, onToggleLocale }: MetaLineProps) {
  return (
    <div className="meta-line" aria-label="Identity and language">
      <a className="text-link" href={`mailto:${email}`}>
        {displayName} / {email}
      </a>
      <button
        className="text-button text-link"
        type="button"
        onClick={onToggleLocale}
        aria-label="Switch language"
      >
        {locale === 'zh' ? '中 / EN' : 'EN / 中'}
      </button>
    </div>
  );
}
