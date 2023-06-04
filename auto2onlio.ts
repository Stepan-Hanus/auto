import { test, expect } from '@playwright/test';

test('onlio', async ({ page }) => {
  await page.goto('https://www.onlio.com/');
  await page.locator('#navMenu').getByRole('menuitem', { name: 'Kariéra' }).click();
  
const currentURL = page.url();


  const expectedURL = 'https://www.onlio.com/kariera'; 
  if (currentURL === expectedURL) {
    console.log('Clicking on the element led to the correct page.');
  } else {
    console.error('Clicking on the element did not lead to the correct page.');
  }
});