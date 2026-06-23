import { expect, test } from '@playwright/test';

test('Window Handling',async({page})=>{
    await page.goto('https://www.redbus.in/');
    const[newWindow]=await Promise.all([
        page.waitForEvent('popup'),
        page.click('[class="optionIcon___886bd2 icon-list"]')
    
    ]);
    await newWindow.waitForLoadState('domcontentloaded');
    await newWindow.locator('[id="account_dd"]').click();
    await newWindow.locator('#user_sign_in_sign_up').click();
    const logi = newWindow.frameLocator('[class="modalIframe"]');
    await logi.locator('//input[@id="mobileNoInp"]').pressSequentially('7972391058',{delay:250});    
});

test.only('handling 2database table',async({page})=>{
    await page.goto("https://www.redbus.in/");
    
    const[newTab] = await Promise.all([
        page.waitForEvent('popup'),
        page.click('//div[text()="Bookings"]')
    ]);
    await newTab.waitForLoadState('domcontentloaded')
    await newTab.locator('//span[text()="Account"]').click();
    await newTab.locator('#user_sign_in_sign_up').click();
    
    const frame1 = newTab.frameLocator('iframe.modalIframe');
    
    await frame1.locator('#mobileNoInp').click();
    await frame1.locator('#mobileNoInp').fill('7972391058');
    
    await page.pause();
});