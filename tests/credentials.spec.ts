import {expect , test } from '@playwright/test'
const credentialsData = [
  {
    username: "standard_user",
    password: "secret_sauce"
  },

  {
    username: "loacked_out_user",
    password: "secret_sauce"
  }
]

credentialsData.forEach(data => {
  test(`to check URL ${data.username} and ${data.password}`, async ({page}) => {
    await page.goto("https://www.saucedemo.com/");
    await page.locator('[data-test="username"]').fill(data.username);
    await page.locator('[data-test="password"]').fill(data.password);
    await page.locator('[data-test="login-button"]').click();
    await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");
  });
})
