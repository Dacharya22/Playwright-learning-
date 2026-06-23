import { expect, test } from '@playwright/test';

// test('static dropdown operation', async ({ page }) => {
//     await page.goto('https://demo.automationtesting.in/Register.html');
//     await page.selectOption('#Skills',{value:'Android'});
//     await page.selectOption('#Skills',{label:'Backup Management'});
//     await page.selectOption('#Skills',{index:5});
      
// })

// test.only('dropdown operation',async({page})=>{
//     await page.goto('https://demo.automationtesting.in/Register.html');
//     await page.selectOption('[placeholder="Month"]',{value:'May'});
//     await page.selectOption('[placeholder="Month"]',{label:'October'});
//     await page.selectOption('[placeholder="Month"]',{index:6});
// })



test.only('dropdown days', async ({ page }) => {
    await page.goto("https://demo.automationtesting.in/Register.html");
    await page.locator('#daybox').selectOption('11');
    await page.locator('#daybox').selectOption({label:'14' });
    await page.locator('#daybox').selectOption({ index: 22 });
});

test.only("dropdown years", async ({ page }) => {
  await page.goto("https://demo.automationtesting.in/Register.html");
  await page.locator("#yearbox").selectOption('2002');
  await page.locator("#yearbox").selectOption({label:'2005'});
  await page.locator("#yearbox").selectOption({index: 3 });
});


test('multiselect dropdown operation',async({page})=>{
    await page.goto('https://www.lambdatest.com/selenium-playground/select-dropdown-demo');
    await page.selectOption('#multi-select',[
        {value:'Ohio'},
        {label:'New Jersey'},
        {index: 1}]
    );
})

test('multiselect dropdown',async({page})=>{
      await page.goto('https://demo.automationtesting.in/Register.html');
      await page.selectOption('#Skills',[
        {value:'Android'},
        {label:'APIs'},
        {index:6}
      ]);

})

//******** */
test('dynamic dropdown operation',async({page})=>{
    await page.goto('https://demo.automationtesting.in/Register.html');
    await page.locator('[role="combobox"]').click();
    await page.locator('[type="search"]').fill('Japan');
    await page.locator('#select2-country-results>li').click();
    await expect(page.locator('#select2-country-container')).toHaveText('Japan');
    await page.pause();
})

test('dynamic dropdown without search operation',async({ page })=>{
    await page.goto('https://demo.automationtesting.in/Register.html');
    await page.locator('[role="combobox"]').click();
    //await page.locator('[type="search"]').fill('Japan');
    await page.locator('#select2-country-results').locator('li',{hasText:'india'}).click();
    await expect(page.locator('#select2-country-container')).toHaveText('India');
    await page.pause();
})