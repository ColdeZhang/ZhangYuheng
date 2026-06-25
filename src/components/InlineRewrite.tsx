import type { CSSProperties } from 'react';

type InlineRewriteProps = {
  text: string;
  state: 'open' | 'closing';
};

export function InlineRewrite({ text, state }: InlineRewriteProps) {
  const characters = Array.from(text);

  return (
    <span className="inline-rewrite" data-state={state} aria-label={text}>
      {' '}
      {characters.map((char, index) => (
        <span
          aria-hidden="true"
          className="inline-rewrite-char"
          key={`${char}-${index}`}
          style={{
            '--char-delay': `${index * 18}ms`,
            '--char-exit-delay': `${(characters.length - index - 1) * 8}ms`,
          } as CSSProperties}
        >
          {char}
        </span>
      ))}
    </span>
  );
}
