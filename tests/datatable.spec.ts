import { expect, test } from '@playwright/test';

test('static dropdown operation', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/')
    const table = page.locator('[name="BookTable"]');//table locator
    const row = table.locator('tbody tr');//row locator
    const rowCount = await row.count();
    console.log('Rowcount = '+ rowCount);

    const column = table.locator('tbody th');//column locator
    const columnCount = await column.count();
    console.log('cloumn count = '+ columnCount);
})

test('datatable/webtable operations',async({page}) =>{
    await page.goto('https://testautomationpractice.blogspot.com/');
    const table = page.locator('#productTable');//table locator
    const row = table.locator('tbody tr'); //row locator
    
    const matchedRow = row.filter({
        has: page.locator('td'),
        hasText:'Laptop'
    })
    await matchedRow.locator('[type="checkbox"]').check();
    await page.pause();
})
