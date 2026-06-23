import { expect, test } from "@playwright/test";

// //Saucedemo Application 
// test.describe("All My Tests", () => {
//   // BEFORE EACH
//   test.beforeEach(async ({ page }) => {
//     await page.goto("https://www.saucedemo.com/");
//     await page.locator('[data-test="username"]').fill("standard_user");
//     await page.locator('[data-test="password"]').fill("secret_sauce");
//     await page.locator('[data-test="login-button"]').click();
//     await page.waitForURL("https://www.saucedemo.com/inventory.html");
//   })

//   // TEST 1
//   test("homepage", async ({ page }) => {
//     await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
//     await page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
//     // Correct product link selector
//     await page.locator("#item_1_title_link").click();
//     await page.waitForURL("**/inventory-item.html?id=1");
//     // await page.locator('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click();
//   })

  
//   // TEST 2
//   test("Logout", async ({ page }) => {
//     await page.locator("#react-burger-menu-btn").click();
//     await page.locator('[data-test="logout-sidebar-link"]').click();
//     await page.waitForURL("https://www.saucedemo.com/");
//   })
//     });


// RedBus Application
  test.beforeAll(async ({ browser}) => {
  console.log('Before All');
  });
  
  test.beforeEach(async({ page })=>{
     await page.goto("https://www.redbus.in/");
  })
  
  
  test.only("Test 1", async ({ page }) => {
    console.log("Test 1");
    await page.locator('//div[text()="From"]').click();
    await page.locator('//div[text()="Mumbai"]').click();
    await page.locator('//div[text()="To"]').click();
    await page.locator('//div[text()="Pune"]').click();

  });
  

  test("Test 2", async ({ page }) => {
    console.log("Test 2 ");
    await page.locator('//a[@aria-label="Bus tickets"]').click();
    await page.locator('//input[@id="txtSource"]').click();
    await page.waitForSelector('//input[@id="txtSource"]');
    await page.locator('//input[@id="txtDestination"]').click();
    await page.locator('//input[@id="txtOnwardCalendar"]').click();
    await page.locator("#txtOnwardCalendar").click();
    // await page.locator("//span[normalize-space()='10']").click();
  });
  
  test("Test 3", async ({ page }) => {
    console.log("Test 3 ");
    await page.locator('//button[@aria-label="Account"]').click();
    await page.locator('//button[@aria-label="Log in"]').click();
    await page.locator('//div[contains(@class,"marginTopActive___b65ba1")]').click();
    await page.locator('//input[@type="text"]').fill("9325562672");
    await page.locator('//div[contains(@aria-label,"Country")]//button[contains(@aria-label,"Close")]').click();
    await page.locator('//button[contains(@aria-label,"Close")]').click();
    await page.locator('//div[contains(text(),"Bookings")]').click();
  });

test("Test 4", async ({ page }) => {
  console.log("Test 4");
  await page.locator('//img[@title="Online Train Tickets Booking"]').click();
  await page.locator('//div//div[contains(@class,"label___a9c3cf")][normalize-space()="From"]').click();
  await page.locator('//div[normalize-space()="Delhi, Delhi"]').click();
  await page.locator('//div[normalize-space()="Delhi, Delhi"]').click();
  await page.locator('//img[@alt="Swap source and destination station"]').click();
  await page.locator('//div[normalize-space()="Date of Journey"]')
  await page.locator('//span[normalize-space()="11"]').click();
  await page.locator('//button[@aria-label="Tomorrow"]').click();
});

test.afterEach(async ({ page })=>{
  console.log('After each');

})

test.afterAll(async ({ browser })=>{
  console.log('After All');
  
})