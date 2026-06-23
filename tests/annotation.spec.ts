import {expect, test} from '@playwright/test'

var Username = "standard_user";
var Username = "problem_user";
var Username = "locked_out_user";
var Username = "visual_user";
var Username = "error_user";
var Password = "secret_sauce";

test("skip", async ({ page }) => {
  test.skip(Password === "secret_sauce");
  
  await page.goto("https://www.saucedemo.com/");
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill("standard_user");
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill("secret_sauce");
  await page.locator('[data-test="login-button"]').click();
});

