import { expect, test } from '@playwright/test';

test('to be visible/to be hidden', async ({ page }) => {//toBeVisible,toBeHidden,toHaveText(assertions)
    await page.goto('https://kitchen.applitools.com/');
    await expect(page.locator('text= The Kitchen')).toBeVisible();
    await expect(page.locator('text= A pantry full of web components that can be used for automated testing.')).toBeVisible();

    
    // await expect(page.locator('text= The Kitchen')).toBeHidden();
    
    await expect(page.locator('text= The Kitchen')).toHaveCount(1);
    await expect(page.locator('text= A pantry full of web components that can be used for automated testing.')).toHaveCount(2);

    // await expect(page.locator('text= The Kitchen')).toBeDisabled();

    // await expect(page.locator('text= The Kitchen')).toHaveText('The Kitchen');
    //  await expect(page.locator('text= The Kitchen')).not.toHaveText('darshna');


    

});