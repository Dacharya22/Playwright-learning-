import {test,expect} from '@playwright/test';
import {LoginPage} from './pages/loginPage';

test('verify sauce demo login functionality',async({ page })=>{
    await page.goto('https://www.saucedemo.com');
    await page.pause();
    const obj_loginpage = new LoginPage(page);

  await obj_loginpage.enterusername('standard_user');
  await obj_loginpage.enterpassword('secret_sauce');
  await obj_loginpage.clicklogin();
  await expect(page.locator("//span[text()='products']")).toBeVisible();


})

test('verify sauce demo login functionality with invalid user',async({ page })=>{
    await page.goto('https://www.saucedemo.com');
    await page.pause();
    const obj_loginpage = new LoginPage(page);

  await obj_loginpage.enterusername('locked_out_user');
  await obj_loginpage.enterpassword('secret_sauce');
  await obj_loginpage.clicklogin();
  await expect(page.locator("//span[text()='products']")).toBeVisible();


})