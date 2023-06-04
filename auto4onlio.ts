import { test, expect } from '@playwright/test';

test('onlio', async ({ page }) => {
  await page.goto('https://www.onlio.com/');
  await page.locator('#navMenu').getByRole('menuitem', { name: 'Reference' }).click();
  await expect(page.hover('(//div[@class='reference-text']//p)[1]')).toHaveText('Globální intranet');
}