import { expect, test } from "@playwright/test"

test('file upload test',async({page})=>{
     
    await page.goto('https://blueimp.github.io/jQuery-File-Upload/');
    const uploadFile = await Promise.all([
        page.waitForEvent('filechooser'),
        page.locator('[type="file"]').click()
    ])
    
    await uploadFile[0].setFiles(['downloadedFiles/Playwright_downloaded_file_by_me.txt']);
    await page.waitForTimeout(10000);
})
"C:\Users\darsh\Downloads\CoreMinds weekly update 14-10-2025 (1).docx"
test('multiple file upload test',async({page})=>{
    
    await page.goto('https://blueimp.github.io/jQuery-File-Upload/');
    const uploadFile = await Promise.all([
        page.waitForEvent('filechooser'),
        page.locator('[type="file"]').click()
    ])
    await uploadFile[0].setFiles(['downloadedFiles/Playwright_downloaded_file_by_me.txt','downloadedFiles/info.txt']);
    await page.waitForTimeout(10000);
})

test('multiple file upload test - approach 2',async({page})=>{
    await page.goto('https://blueimp.github.io/jQuery-File-Upload/');
    await page.setInputFiles('[type="file"]',['downloadedFiles/Playwright_downloaded_file_by_me.txt','downloadedFiles/info.txt'])
    await page.waitForTimeout(10000);
})


// test(' upload test - example 1',async({page})=>{
//         await page.goto('https://commitquality.com/practice-file-upload');
        
//        const handle = page.locator('input[type="file"]');
//        await handle.setInputFiles('PS C:\Users\darsh\OneDrive\Desktop\Automation>');
//        await page.pause();
// })

test('upload test - example 1', async ({ page }) => {

    await page.goto('https://commitquality.com/practice-file-upload');

    // Wait for file chooser
    const uploadFile = await Promise.all([
        page.waitForEvent('filechooser'),
        page.locator('input[type="file"]').click()
    ]);

    // Upload your file
    // await uploadFile[0].setFiles([
    //     'C:/Users/darsh/OneDrive/Desktop/Automation/yourFileName.txt'
    // ]);

    await page.waitForTimeout(5000);
});

test('single file upload - simple', async ({ page }) => {

    await page.goto('https://commitquality.com/practice-file-upload');

    await page.setInputFiles('input[type="file"]', 'files/sample.txt');

    await page.waitForTimeout(3000);
});
