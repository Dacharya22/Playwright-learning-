import { expect, test } from "@playwright/test";

test('to be visible/to be hidden', async ({ page }) => {//assertions
    await page.goto('https://www.saucedemo.com/');

    await page.locator('[data-test="username"]').fill('standard_user');

    await page.locator('[data-test="password"]').fill('secret_sauce');

    await page.locator('[data-test="login-button"]').click();

    // await expect(page.locator('//span[text()="Products"]')).toBeVisible();
    await expect(page.locator('//span[text()="Products"]')).toHaveText('Products');

    await page.locator('//a[@class="shopping_cart_link"]').click();

    // await expect(page.locator('//span[text()="Products"]')).toBeHidden();

       await expect(page.locator('//span[text()="Your Cart"]')).not.toHaveText('darshna');
    
      });

test('toHaveText', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="password"]').fill('secret_sauce');
    await page.locator('[data-test="login-button"]').click();
    await expect(page.locator('[class-"title"]')).toHaveText('Products');
    await page.locator('//a[@class="shopping_cart_link"]').click();
    await expect(page.locator('[class-"title"]')).not.toHaveText('product');
    // await expect(page.locator('//span[text()="product"]')).not.toBeHidden();
    await expect(page.locator('[class-"title"]]')).toHaveText('your cart');
    await page.locator('#continue-shopping').click();
    await expect(page.locator('[class="title"]')).not.toHaveText('Your Cart');
    });

test ('to check attribute',async({page}) =>{
await page.goto('https://automationexercise.com/');
await page.locator('(//a[@data-parent="#accordian"])[1]').click();
await page.locator('(//a[@data-parent="#accordian"])[1]').click();
await expect(page.locator('(//a[@data-parent="#accordian"])[1]')).toHaveAttribute('class','collapsed')

  await page.goto('https://kitchen.applitools.com');
  await expect(page.locator('//h1[@class="chakra-heading css-dpmy2a"]')).toHaveAttribute('class','chakra-heading css-dpmy2a');
  await page.locator('//h3[normalize-space()="Alert"]').click();
  await page.locator('//h1[@class="chakra-heading css-1vyua5b"]')
  await expect (page.locator('//button[@id="alert-button"]')).toHaveAttribute('id','alert-button');
});

test. only ('to check screenshot',async({page}) =>{
    await page.goto('https://kitchen.applitools.com');
    await expect(page).toHaveScreenshot();
});

 test('to check URL',async ({page}) =>{
  await page.goto('https://kitchen.applitools.com');
  await expect(page.locator('//h1[@class="chakra-heading css-dpmy2a"]')).toHaveAttribute('class','chakra-heading css-dpmy2a');
  await page.locator('//h3[normalize-space()="Alert"]').click();
  await page.locator('//h1[@class="chakra-heading css-1vyua5b"]').click();
  await expect (page.locator('//button[@id="alert-button"]')).toHaveAttribute('id','alert-button');

});


