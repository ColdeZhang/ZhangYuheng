import '@testing-library/jest-dom/vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import { HomePage } from './HomePage';
import { getYearsOfExperience } from '../content/homepageContent';

describe('HomePage', () => {
  it('renders identity, email, and English text by default', () => {
    render(<HomePage />);

    expect(
      screen.getByRole('link', { name: /Yuheng Zhang \/ 张宇衡 \/ zhangyuheng@lunadeer.cn/ }),
    ).toBeInTheDocument();
    expect(
      screen.getByText((text, element) =>
        Boolean(
            element?.classList.contains('mother-paragraph') &&
            element.textContent?.startsWith(`I'm Yuheng Zhang, a data algorithm engineer with ${getYearsOfExperience()} years of experience`),
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
            element.textContent?.startsWith(`我是张宇衡，数据算法工程师，拥有 ${getYearsOfExperience()} 年工作经验`),
        ),
      ),
    ).toBeInTheDocument();
  });

  it('expands education details inline from the mother paragraph', async () => {
    const user = userEvent.setup();
    render(<HomePage />);

    expect(screen.queryByRole('button', { name: 'a data algorithm engineer' })).not.toBeInTheDocument();
    await user.click(screen.getByRole('button', { name: 'graduated from Southwest Jiaotong University' }));
    expect(
      screen.getByLabelText('Public administration major, then a long-term shift into data, algorithms, and engineering systems.'),
    ).toBeInTheDocument();

    await user.click(screen.getByRole('button', { name: /switch language/i }));

    expect(screen.queryByRole('button', { name: '数据算法工程师' })).not.toBeInTheDocument();
    expect(screen.getByRole('button', { name: '毕业于西南交通大学' })).toHaveAttribute(
      'aria-expanded',
      'true',
    );
    expect(screen.getByLabelText('公共事业管理专业，之后长期转向数据、算法与工程系统方向。')).toBeInTheDocument();
  });

  it('does not render inline rewrite elements for the revised homepage copy', async () => {
    const user = userEvent.setup();
    render(<HomePage />);

    await user.click(screen.getByRole('button', { name: 'currently work at Shanghai Huaxun Network Systems' }));

    expect(document.querySelector('.inline-rewrite')).not.toBeInTheDocument();
    expect(screen.getByRole('region', { name: 'currently work at Shanghai Huaxun Network Systems' })).toBeInTheDocument();
  });
  it('opens cross-section evidence for long keywords', async () => {
    const user = userEvent.setup();
    render(<HomePage />);

    await user.click(screen.getByRole('button', { name: /switch language/i }));
    await user.click(screen.getByRole('button', { name: '异常检测' }));

    expect(screen.getByRole('region', { name: '异常检测' })).toBeInTheDocument();
    expect(screen.getByText(/冻干机冷凝腔外漏/)).toBeInTheDocument();
    expect(screen.getByText(/进入生产决策链路/)).toBeInTheDocument();
  });

  it('keeps the same semantic keyword expanded across language changes', async () => {
    const user = userEvent.setup();
    render(<HomePage />);

    await user.click(screen.getByRole('button', { name: 'Agent-based practice' }));
    await user.click(screen.getByRole('button', { name: /switch language/i }));

    expect(screen.getByText(/Lodey 是我正在开发/)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Agent 化实践' })).toHaveAttribute('aria-expanded', 'true');
  });

  it('renders cross-section evidence with a staged reveal container', async () => {
    const user = userEvent.setup();
    render(<HomePage />);

    await user.click(screen.getByRole('button', { name: 'anomaly detection' }));

    const crossSection = screen.getByRole('region', { name: 'anomaly detection' });
    expect(crossSection.querySelector('.cross-section-inner')).toBeInTheDocument();
    expect(crossSection.querySelectorAll('.cross-section-paragraph').length).toBeGreaterThan(1);
  });

  it('keeps the selected cross-section button state in sync', async () => {
    const user = userEvent.setup();
    render(<HomePage />);

    await user.click(screen.getByRole('button', { name: /switch language/i }));
    await user.click(screen.getByRole('button', { name: '工业智能' }));

    expect(screen.getByRole('button', { name: '工业智能' })).toHaveAttribute('aria-expanded', 'true');
    expect(screen.getByRole('region', { name: '工业智能' })).toBeInTheDocument();
  });

  it('keeps cross-section evidence mounted briefly for a closing animation', async () => {
    const user = userEvent.setup();
    render(<HomePage />);

    await user.click(screen.getByRole('button', { name: 'anomaly detection' }));
    await user.click(screen.getByRole('button', { name: 'anomaly detection' }));

    const crossSection = screen.getByRole('region', { name: 'anomaly detection' });
    expect(crossSection).toHaveAttribute('data-state', 'closing');
    expect(screen.getByRole('button', { name: 'anomaly detection' })).toHaveAttribute('aria-expanded', 'false');
  });
});
