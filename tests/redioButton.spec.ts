import { expect, test } from "@playwright/test";

test("checkbox operation", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/"); //Redio button
  // await expect(page.locator("#sunday")).not.toBeChecked();
  // await expect(page.locator("#monday")).not.toBeChecked();
  // await expect(page.locator("#tuesday")).not.toBeChecked();
  // await page.locator("#sunday").check();
  // await expect(page.locator("#sunday")).toBeChecked();
  // await expect(page.locator("#monday")).not.toBeChecked();
  // await expect(page.locator("#tuesday")).not.toBeChecked();

  // await page.locator("#monday").check();
  // await expect(page.locator("#sunday")).toBeChecked();
  // await expect(page.locator("#monday")).toBeChecked();
  // await expect(page.locator("#tuesday")).not.toBeChecked();

  // await page.locator("#tuesday").check();
  // await page.locator("#sunday").uncheck();
  // await expect(page.locator("#sunday")).not.toBeChecked();
  // await expect(page.locator("#monday")).toBeChecked();
  // await expect(page.locator("#tuesday")).toBeChecked();
  // expect(await page.locator("#sunday").isChecked()).toBeFalsy();
  // expect(await page.locator("#monday").isChecked()).toBeTruthy();
  // expect(await page.locator("#tuesday").isChecked()).toBeTruthy();

  // expect(await page.locator("#sunday").isChecked()).toBe(false);
  // expect(await page.locator("#monday").isChecked()).toBe(true);
  // expect(await page.locator("#tuesday").isChecked()).toBe(true);

  await page.locator('//input[@id="name"]').click();
  await page.locator('//input[@id="name"]').fill("darshna");
  await page.locator('//input[@id="email"]').click();
  await page.locator('//input[@id="email"]').fill("darshnaacharya22@gmail.com");
  await page.locator('//input[@id="phone"]').click();
  await page.locator('//input[@id="phone"]').fill("9325562672");
  await page.locator('//textarea[@id="textarea"]').click();
  await page.locator('//textarea[@id="textarea"]').fill("Kharadi pune");
  await page.locator('//label[@for="gender"]').click();
  await page.locator('//label[@for="male"]').click();
  await page.locator('//label[@for="female"]').click();
  await page.locator('//label[@for="days"]').click();
  await page.locator('//input[@id="sunday"]').click();
  await page.locator('//input[@id="monday"]').click();
  await page.locator('//label[@for="tuesday"]').click();
  await page.locator('//label[@for="wednesday"]').click();
  await page.locator('//input[@id="thursday"]').click();
  await page.locator('//input[@id="friday"]').click();
  await page.locator('//input[@id="saturday"]').click();
  await page.locator('//input[@id="saturday"]').uncheck();
  await page.locator('//label[@for="country"]').click();
  await page.locator("//div[5]//select[1]").click();
  await page.locator('//label[@for="colors"]').click();
  await page.locator('//select[@id="colors"]//option[1]').click();
  await page.locator('//select[@id="colors"]//option[3]').click();
  await page.locator('//label[@for="animals"]').click();
  await page.locator('//option[@value="deer"]').click();
  await page.locator('//input[@id="datepicker"]').click();
  await page.locator('//a[normalize-space()="Udemy Courses"]').click();
  await page.locator('//a[normalize-space()="Blog"]').click();
 
});
