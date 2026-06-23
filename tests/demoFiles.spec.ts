import { expect, test } from '@playwright/test';

// test('Click action on button',async({page}) =>{
// await page.goto('https://kitchen.applitools.com/');
// await page.locator('//h3[normalize-space()="Alert"]').click();
// // await page.locator('//h3[normalize-space()="Alert"]').click({button:'left'});
// await expect(page.locator('//h3[normalize-space()="Alert"]')).toHaveText('click');

// });

// test('double click action on button',async({page})=>{
// await page.goto('https://kitchen.applitools.com/');
// await page.locator('//h3[normalize-space()="Alert"]').dblclick();
// await expect(page.locator('#click_type')).toHaveText('Double-click');   
// });

// test('right click action on button',async({page})=> {
//     await page.goto('https://kitchen.applitools.com/');
//     await page.locator('//h3[normalize-space()="Alert"]').click();
//     await page.locator('//button[@id="alert-button"]').click();
//     // await expect(page.locator('#click_type')).toHaveText();
// });

// test('text field with sequential method with delay',async ({page}) =>{
// await page.goto('https://www.saucedemo.com/');
// await page.locator('//input[@id="user-name"]').fill('standard_user');
// await page.locator('//input[@id="password"]').fill('secret_sauce');
// await page.locator('//input[@id="login-button"]').click();
// });

// text('text field ', async({page})=>{
// await page.goto('https://www.saucedemo.com/');
// await page.locator('//input[@id="user-name').pressSequentially('standard_user');
// await page.locator('//input[@id="password"]').pressSequentially('secret_sauce');
// await page.locator('//input[@id="login-button"]').click();
// });

test('text field with sequential method with delay', async ({ page }) => {
  // Step 1: Open the website
  await page.goto('https://www.saucedemo.com/');

  // Step 2: Type username with delay
  await page.locator('//input[@id="user-name"]').fill(''); // clear field first
  await page.locator('//input[@id="user-name"]').fill('standard_user');

  // Step 3: Type password with delay
  await page.locator('//input[@id="password"]').fill('');
  await page.locator('//input[@id="password"]').fill('secret_sauce');

  // Step 4: Click login button
  await page.locator('//input[@id="login-button"]').click();

});


