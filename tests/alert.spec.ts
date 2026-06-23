import { expect, test } from '@playwright/test';

test('Simple alert',async({page})=>{
    await page.goto('https://the-internet.herokuapp.com/javascript_alerts');
    page.on('dialog',async(alert)=>{
        const alertMessage = alert.message();
        expect(alertMessage).toEqual('I am a JS Alert');
        await alert.accept();
    })
    await page.locator('//button[@onclick="jsAlert()"]').click();
    await expect(page.locator('#result')).toHaveText('You successfully clicked an alert')
    await page.pause();
})

test('confirmation alert test',async({page})=>{
    await page.goto('https://the-internet.herokuapp.com/javascript_alerts');
    page.on('dialog',async(alert)=>{
        const alertMessage = alert.message();
        expect(alertMessage).toEqual('I am a JS Confirm');
        await alert.accept();
    })
    await page.locator('//button[@onclick="jsConfirm()"]').click();
    // await expect(page.locator('#result')).toHaveText('you clicked:Ok');//for OK
    await expect(page.locator('#result')).toHaveText('You clicked:Cancel');//for cancel
    await page.pause();
})

test('Prompt alert test',async({page})=>{
    await page.goto('https://the-internet.herokuapp.com/javascript_alerts');
    page.on('dialog',async(alert)=>{
        const alertMessage = alert.message();
        expect(alertMessage).toEqual('I am a JS prompt');
        await alert.accept('Amit');//OK
        // await alert.dismiss();//cancel
    })
    await page.locator('//button[@onclick="jsPrompt()"]').click();
    await expect(page.locator('#result')).toHaveText('You entered:Amit');//for OK
    // await expect(page.locator('#result')).toHaveText('You clicked:Cancel');//for cancel
    await page.pause();
})

