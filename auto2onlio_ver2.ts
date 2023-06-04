// @ts-check
import { test, expect } from '@playwright/test';

test('onlio2', async ({ page, context, browser }) => {
  await page.goto('https://www.onlio.com/');

  const elements = await page.$$('text=Kariéra');

  for (let i = 0; i < elements.length; i++) {
    const element = elements[i];

    await Promise.all([
      page.waitForNavigation(),
      element.click(),
    ]);

    const currentURL = page.url();
    const expectedURL = getExpectedURL(i);

    if (currentURL === expectedURL) {
      console.log(`Click ${i + 1} led to the correct page:`, currentURL);
    } else {
      console.error(`Click ${i + 1} did not lead to the correct page. Expected URL: ${expectedURL}, Actual URL: ${currentURL}`);
    }

    await page.goBack();
    await page.waitForNavigation();
  }
});

function getExpectedURL(index) {
  if (index === 0) {
    return 'https://onlio.com/kariera';
  } else if (index === 1) {
    return 'https://onlio.com/kariera';
  }
  return '';