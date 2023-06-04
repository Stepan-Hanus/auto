@ts-check
import { test, expect } from '@playwright/test';
const { chromium } = require('playwright');
test('onlio2', async ({ page }) => {
  await page.goto('https://www.onlio.com/');
(async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto('www.onlio.com');
  await page.locator('(//a[@role='menuitem'])[2]')click(); 
  await page.waitForNavigation();
  await page.click('//a[contains(text(),'Jsme partnerem automatizační platformy Integromat')]'); 
  await page.waitForSelector('//a[contains(text(),'Jsme partnerem automatizační platformy Integromat')]');
  const elementText = await page.textContent('//a[contains(text(),'Jsme partnerem automatizační platformy Integromat')]');

  const Text = 'Filozofie platformy';
  if (elementText.includes(Text)) {
    console.log('The element contains the desired text:', elementText);
  } else {
    console.log('The element does not contain the desired text:', elementText);
  }

  await browser.close();
})();
