import { expect, test } from "@playwright/test";

import { DateTime } from "luxon";

test("simple date picker", async ({ page }) => {
  await page.goto(
    "https://www.lambdatest.com/selenium-playground/bootstrap-date-picker-demo"
  );
  await page.locator("#birthday").fill("2025-03-12");
  await page.pause();
});

test ("datepicker using luxon", async ({ page }) => {
  await page.goto("https://www.lambdatest.com/selenium-playground/bootstrap-date-picker-demo");
  await page.locator('[placeholder="Start date"]').click();
  const month = page.locator('div[class="datepicker-days"] th[class="datepicker-switch"]');
  const previous = page.locator('div[class="datepicker-days"] th[class="prev"]');
  const next = page.locator('div[class="datepicker-days"] th[class="next"]');

  let selectionDate = "November 2025";

  const formattedDate = DateTime.fromFormat(selectionDate, "MMMM yyyy");
  console.log(DateTime.fromJSDate(new Date()));
  console.log(formattedDate);

  while ((await month.textContent()) !== selectionDate) {
    if (formattedDate < DateTime.fromJSDate(new Date())) {
      await previous.click();
    } else {
      await next.click();
    }
  }
  await page.locator('//td[@class="day"][text()="8"]').click();
  await page.pause();
});


// END DATE
test.only("datepicker using luxon - End Date", async ({ page }) => {

  await page.goto("https://www.lambdatest.com/selenium-playground/bootstrap-date-picker-demo");

  // CLICK END DATE FIELD
  await page.locator('[placeholder="End date"]').click();

  // LOCATORS FOR CALENDAR
  const month = page.locator('div[class="datepicker-days"] th[class="datepicker-switch"]');
  const previous = page.locator('div[class="datepicker-days"] th[class="prev"]');
  const next = page.locator('div[class="datepicker-days"] th[class="next"]');

  // DATE YOU WANT TO SELECT
  let selectionDate = "December 2026";

  // CONVERT STRING TO DATE USING LUXON
  const formattedDate = DateTime.fromFormat(selectionDate, "MMMM yyyy");

  // LOOP UNTIL CALENDAR MATCHES TARGET MONTH/YEAR
  while ((await month.textContent()) !== selectionDate) {

    if (formattedDate < DateTime.fromJSDate(new Date())) {
      await previous.click(); // go to past
    } else {
      await next.click();     // go to future
    }
  }

  // SELECT DAY
  await page.locator('//td[normalize-space()="12"]').click();

  await page.pause();
});


test.only("yearpicker using luxon - End Date", async ({ page }) => {

  await page.goto("https://www.lambdatest.com/selenium-playground/bootstrap-date-picker-demo");

  // CLICK END DATE FIELD
  await page.locator('[placeholder="End date"]').click();

  // LOCATORS FOR CALENDAR
  const month = page.locator('div[class="datepicker-days"] th[class="datepicker-switch"]');
  const previous = page.locator('div[class="datepicker-days"] th[class="prev"]');
  const next = page.locator('div[class="datepicker-days"] th[class="next"]');

  // DATE YOU WANT TO SELECT
  let selectionDate = "December 2030";

  // CONVERT STRING TO DATE USING LUXON
  const formattedDate = DateTime.fromFormat(selectionDate, "MMMM yyyy");

  // LOOP UNTIL CALENDAR MATCHES TARGET MONTH/YEAR
  while ((await month.textContent()) !== selectionDate) {

    if (formattedDate < DateTime.fromJSDate(new Date())) {
      await previous.click(); // go to past
    } else {
      await next.click();     // go to future
    }
  }

  // SELECT DAY
  await page.locator('//td[normalize-space()="12"]').click();

  await page.pause();
});



test.only("Startpicker using luxon - End Date", async ({ page }) => {

  await page.goto("https://www.lambdatest.com/selenium-playground/bootstrap-date-picker-demo");

  // CLICK END DATE FIELD
  await page.locator('//input[@placeholder="Start date"]').click();

  // LOCATORS FOR CALENDAR
  const month = page.locator('div[class="datepicker-days"] th[class="datepicker-switch"]');
  const previous = page.locator('div[class="datepicker-days"] th[class="prev"]');
  const next = page.locator('div[class="datepicker-days"] th[class="next"]');

  // DATE YOU WANT TO SELECT
  let selectionDate = "December 2025";

  // CONVERT STRING TO DATE USING LUXON
  const formattedDate = DateTime.fromFormat(selectionDate, "MMMM yyyy");

  // LOOP UNTIL CALENDAR MATCHES TARGET MONTH/YEAR
  while ((await month.textContent()) !== selectionDate) {

    if (formattedDate < DateTime.fromJSDate(new Date())) {
      await previous.click(); // go to past
    } else {
      await next.click();     // go to future
    }
  }

  // SELECT DAY
  await page.locator('//td[normalize-space()="25"]').click();

  await page.pause();
});





