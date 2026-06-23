import { expect, test } from '@playwright/test';

test('Single tab handling test', async ({ page }) => {
    await page.goto('https://demo.automationtesting.in/Windows.html');
    const [newTab] = await Promise.all([
        page.waitForEvent('popup'),
        await page.click('//button[text()= "       click      "]')
    ])
    await page.pause();
    await newTab.waitForLoadState('networkidle');
    await newTab.locator('//span[text()="Downloads"]').click();
    await expect(newTab.locator('//h1[text()="Downloads"]')).toHaveText("Downloads");
    await newTab.pause();
})

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