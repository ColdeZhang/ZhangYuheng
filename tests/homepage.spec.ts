import { expect, test } from '@playwright/test';

test('homepage renders and expands keyword content', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByRole('link', { name: /张宇衡 \/ Yuheng Zhang/ })).toBeVisible();
  await page.getByRole('button', { name: '异常检测' }).click();
  await expect(page.getByText('真正进入生产决策链路')).toBeVisible();
});

test('language switch keeps expanded content coherent', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('button', { name: 'Agent 化实践' }).click();
  await page.getByRole('button', { name: /switch language/i }).click();
  await expect(page.getByText('Lodey is an open-source')).toBeVisible();
});
