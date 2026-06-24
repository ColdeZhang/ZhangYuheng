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
            element.textContent?.startsWith('我是张宇衡，数据算法工程师'),
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
            element.textContent?.startsWith("I'm Yuheng Zhang, a data algorithm engineer"),
        ),
      ),
    ).toBeInTheDocument();
  });

  it('expands an inline keyword in place', async () => {
    const user = userEvent.setup();
    render(<HomePage />);

    await user.click(screen.getByRole('button', { name: '数据算法工程师' }));

    expect(screen.getByText(/不只做单点建模/)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: '数据算法工程师' })).toHaveAttribute('aria-expanded', 'true');
  });
  it('opens cross-section evidence for long keywords', async () => {
    const user = userEvent.setup();
    render(<HomePage />);

    await user.click(screen.getByRole('button', { name: '异常检测' }));

    expect(screen.getByRole('region', { name: '异常检测' })).toBeInTheDocument();
    expect(screen.getByText(/冻干机冷凝腔外漏/)).toBeInTheDocument();
    expect(screen.getByText(/真正进入生产决策链路/)).toBeInTheDocument();
  });
});
