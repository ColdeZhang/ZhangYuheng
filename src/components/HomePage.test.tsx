import '@testing-library/jest-dom/vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import { HomePage } from './HomePage';

describe('HomePage', () => {
  it('renders identity, email, and Chinese text by default', () => {
    render(<HomePage />);

    expect(
      screen.getByRole('link', { name: /张宇衡 \/ Yuheng Zhang \/ zhangyuheng@lunadeer.cn/ }),
    ).toBeInTheDocument();
    expect(
      screen.getByText((text, element) =>
        Boolean(
          element?.classList.contains('mother-paragraph') &&
            text.startsWith('我是张宇衡，数据算法工程师'),
        ),
      ),
    ).toBeInTheDocument();
  });

  it('switches language while keeping the same text system', async () => {
    const user = userEvent.setup();
    render(<HomePage />);

    await user.click(screen.getByRole('button', { name: /switch language/i }));

    expect(
      screen.getByText((text, element) =>
        Boolean(
          element?.classList.contains('mother-paragraph') &&
            text.startsWith("I'm Yuheng Zhang, a data algorithm engineer"),
        ),
      ),
    ).toBeInTheDocument();
  });
});
