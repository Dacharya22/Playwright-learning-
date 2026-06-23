import { expect, test } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.facebook.com/');
 //Locator types
 //await page.getByTestId('open-registration-form-button').click();
  await page.locator('[data-testid="open-registration-form-button"]').click();
// await page.locator('//div[text()="Create new account"]/following-sibling::div').click();
 
 
 
  //await page.getByRole('textbox', { name: 'First name' }).click();
  //await page.locator('[name ="firstname"]').click();
// await page.locator('.//[text()=First name]')/folloqwwing-sibling::input.click();
await page.locator('//div[text()="First name"]/following-sibling::input').click();
 
 
  //await page.getByRole('textbox', { name: 'First name' }).fill('darshna');
//await page.locator('[name ="firstname"]').fill('darshna');
await page.locator('//div[text()="First name"]/following-sibling::input').fill('darshna');

  //await page.getByRole('textbox', { name: 'Surname' }).click();
//await page.locator('[name="lastname"]').click();
await page.locator('//div[text()="Surname"]/following-sibling::input').click();

 // await page.getByRole('textbox', { name: 'Surname' }).fill('acharya');
  // await page.locator('[name="lastname"]').fill('acharya');
  await page.locator('//div[text()="Surname"]/following-sibling::input').fill('acharya');

 // await page.getByLabel('Day').selectOption('22');
  //  await page.locator('[name = "birthday_day"]').selectOption('22');
   await page.locator('//select [@id="day"]').selectOption('22');

  //await page.getByLabel('Month').selectOption('8');
  // await page.locator('[name="birthday_month"]').selectOption('8');
  await page.locator('//select[@id="month"]').selectOption('8');
  
  //await page.getByLabel('Year').selectOption('2005');
  // await page.locator('[name="birthday_year"]').selectOption('2005');
    await page.locator('//select[@id="year"]').selectOption('2005');

//Female

// await page.getByRole('radio', { name: 'Female' }).check();
//await page.locator('input[value="1"]').check();                                                  //By name success
//await page.locator('//input[@value="1"]/following-sibling::label').click();                      //following-sibling failed
//await page.locator('//input[@type="radio" and @value="1"]').check();                             //and operator success
//await page.locator('//input[@value="1"]').check();                                               //or operator success
//await page.locator('//input[@value="1"]/descendant::a').click();                                 //descendant failed 
//await page.locator('//input[@value="1"]/preceding::label[1]').check();                           //precending(Any) success
//await page.locator('//input[@value="1"]/preceding-sibling::label[1]').check();                   //precending-sibling failed
//await page.locator('//input[@value="1"]/parent::label').check();                                 //parent success
//await page.locator('//input[@value="1"]').check();                                               //By id success
//await page.locator('//input[@value="1"]').check();                                               //By class success  
//await page.locator('//input[@value="1"]').check();                                               //By Index success                                         //By index
//await page.locator('//input[@value="1"]').check();                                               //By Any attribute success
//await page.locator('//input[contains(@value,"1")]').check();                                     //By contains() failed
//await page.locator('//input[starts-with(@value,"1")]').check();                                  //starts-with() success
// await page.locator('//input[substring(@value,string-length(@value)-1)="reset"]')                //ends-with(non-standard) success
// await page.locator('//input[value()="1"]')                                                      //Exact text() failed
//await page.locator('//input[contains(@value(),"1")]').click();                                   //partial text() failed 
//11 success and 6 failed

//Male

//await page.locator('input[value="2"]').check();                                                  //By name success
//await page.locator('//input[@value="2"]/following-sibling::label').check();                      //following-sibling failed
//await page.locator('//input[@type="radio" and @value="2"]').check();                             //and operator success
//await page.locator('//input[@value="2"]').check();                                               //or operator success
//await page.locator('//input[@value="2"]/descendant::label').check();                             //descendant failed 
//await page.locator('//input[@value="2"]/preceding::label[1]').check();                           //precending(Any) success
//await page.locator('//input[@value="2"]/preceding-sibling::label[1]').check();                   //precending-sibling failed
//await page.locator('//input[@value="1"]/parent::label').check();                                 //parent success
//await page.locator('//input[@value="2"]').check();                                               //By id success
//await page.locator('//input[@value="2"]').check();                                               //By class success  
//await page.locator('//input[@value="2"]').check();                                               //By Index success                                         //By index
//await page.locator('//input[@value="2"]').check();                                               //By Any attribute success
//await page.locator('//input[contains(@value,"2")]').check();                                     //By contains() failed
//await page.locator('//input[starts-with(@value,"2")]').check();                                  //starts-with() success
//await page.locator('//input[substring(@value,string-length(@value)-1)="reset"]')                 //ends-with(non-standard) success
//await page.locator('//input[@value()="2"]').check();                                             //Exact text() failed
//await page.locator('//input[contains(@value(),"2)]').click();                                    //partial text() failed 
//11 success and 6 failed

//Custom

//await page.locator('input[value="-1"]').check();                                                  //By name success
//await page.locator('//input[@value="-1"]/following-sibling::label').check();                      //following-sibling failed
//await page.locator('//input[@type="radio" and @value="-1"]').check();                             //and operator success
//await page.locator('//input[@value="-1"]').check();                                               //or operator success
//await page.locator('//input[@value="-1"]/descendant::label').check();                             //descendant failed 
//await page.locator('//input[@value="-1"]/preceding::label[1]').check();                           //precending(Any) success
//await page.locator('//input[@value="-1"]/preceding-sibling::label[1]').check();                   //precending-sibling failed
//await page.locator('//input[@value="-1"]/parent::label').check();                                 //parent success
//await page.locator('//input[@value="-1"]').check();                                               //By id success
//await page.locator('//input[@value="-1"]').check();                                               //By class success  
//await page.locator('//input[@value="-1"]').check();                                               //By Index success                                         //By index
//await page.locator('//input[@value="-1"]').check();                                              //By Any attribute success
//await page.locator('//input[contains(@value,"-1")]').check();                                     //By contains() failed
//await page.locator('//input[starts-with(@value,"-1")]').check();                                  //starts-with() success
await page.locator('//input[substring(@value,string-length(@value)-1)="reset"]')                  //ends-with(non-standard) success
//await page.locator('//input[@value()="-1"]').check();                                             //Exact text() failed
//await page.locator('//input[contains(@value="-1")]').check();                                    //partial text() failed 
//11 success and 6 failed

//New password

//await page.locator('//input[@name="reg_passwd__"]').click();                                         //By name success
//await page.locator('//input[@data-type="password"]/following-sibling::div').click();                 //following-sibling failed
//await page.locator('//input[@name="reg_passwd__" and @data-type="password"]').click();               //and operator success
//await page.locator('//input[@data-type="password"]').click();                                       //or operator success
//await page.locator('//input[@data-type="password"]/descendant::div')                            //descendant failed 
//await page.locator('//input[@data-type="password"]/preceding::div[1]')                                   //precending(Any) success
// await page.locator('//input[@data-type="password"]/preceding-sibling::div[1]')                   //precending-sibling failed
//await page.locator('//input[@data-type="password"]/parent::div').click();                                 //parent success
//await page.locator('//input[@data-type="password"]').click();                                               //By id success
//await page.locator('//input[@data-type="password"]').click();                                               //By class success  
//await page.locator('//input[@data-type="password"]').click();                                               //By Index success                                         //By index
//await page.locator('//input[@data-type="password"]').click();                                              //By Any attribute success
//await page.locator('//input[contains(@data-type,"password")]').click();                                     //By contains() success
//await page.locator('//input[starts-with(@data-type,"password")]').click();                                //starts-with() success
// await page.locator('//input[substring(@data-type,string-length(@data-type))="reset"]')                  //ends-with(non-standard) success
// await page.locator('//input[@data-type="password"]').click();                                             //Exact text() success
// await page.locator('//input[contains(@data-type,"password")]').click();                                    //partial text() success 

//14 success and 3 failed


 // await page.getByRole('textbox', { name: 'Mobile number or email address' }).click();
 await page.locator('[name="reg_email__"]').click();

//   await page.getByRole('textbox', { name: 'Mobile number or email address' }).fill('7972391058');
  await page.locator('[name="reg_email__"]').fill('7972391058');

  //await page.getByRole('textbox', { name: 'New password' }).click();
  await page.locator('[name="reg_passwd__"]').click();
  

  //await page.getByRole('textbox', { name: 'New password' }).fill('12345');
  await page.locator('[name="reg_passwd__"]').fill('12345');
});