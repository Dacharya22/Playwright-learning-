import { test, expect } from '@playwright/test'
// import { test, expect } from '@playwright/test';
import * as myMasterData from './testdata/credentials.json';
 
test('to check URL with valid credentials', async ({ page }) => {
  await page.goto('https://www.saucedemo.com');
  await page.locator('[data-test="username"]').fill(myMasterData.validUsername);
  await page.locator('[data-test="password"]').fill(myMasterData.validPassword);
  await page.locator('[data-test="login-button"]').click();
  await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
});
             
test('to check URL with invalid credential', async ({ page }) => {
  await page.goto('https://www.saucedemo.com');
  await page.locator('[data-test="username"]').fill(myMasterData.lockedoutUsername);
  await page.locator('[data-test="password"]').fill(myMasterData.lockedoutPassword);
  await page.locator('[data-test="login-button"]').click();
  await expect(page).not.toHaveURL('https://www.saucedemo.com/inventory.html');
});
 