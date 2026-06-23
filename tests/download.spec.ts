import { expect, test } from "@playwright/test"

test('File download test',async({page})=>{
    
    await page.goto('https://demo.automationtesting.in/FileDownload.html');
    await page.locator('#textbox').click();
    await page.locator('#textbox').pressSequentially('today is a grate day to start something new and learn new concept');
    await page.locator('#createTxt').click();
    
    const download = await Promise.all([
        page.waitForEvent('download'),
        page.locator('#link-to-download').click()
    ])
    
    const path = await download[0].path();
    
    // const fileName = download[0].suggestedFilename();
    // await download[0].saveAs(`downloadedFiles/${fileName}`);
    
    const fileName = "Playwright_downloaded_file_by_me";
    await download[0].saveAs(`downloadedFiles/${fileName}.txt`);
})

// test('File download test Approach-1',async({page})=>{
//     await page.goto('https://commitquality.com/practice-file-download');
//     const waitForDownloadEvent = page.waitForEvent("download");
    
//     await page.getByRole("button",{name:"Download File"}).click();
//     const download = await waitForDownloadEvent;
    
//     await download.saveAs("./" + download.suggestedFilename());
// })


test('File download test Example-1 ', async ({ page }) => {
    await page.goto('https://commitquality.com/practice-file-download');
    const downloadPromise = page.waitForEvent("download");

    await page.getByRole("button", { name: "Download File" }).click();
    const download = await downloadPromise;

    const fileName = "CommitQuality_downloaded_file_by_me";
    await download.saveAs(`downloadedFiles/${fileName}.txt`);
})


test.only('File download test Example-2', async ({ page }) => {

    await page.goto('https://www.lambdatest.com/selenium-playground/generate-file-to-download-demo');

    await page.locator('#textbox').click();
    await page.locator('#textbox').pressSequentially('file download testing using playwright');
    await page.locator('#create').click();

    const download = await Promise.all([
        page.waitForEvent('download'),
        page.locator('#link-to-download').click()
    ])
  
        //  const path = await download[0].path();

     
    const fileName = "Playwright_Approach2_downloaded_file";
    await download[0].saveAs(`downloadedFiles/${fileName}.txt`);

})


test('File download test Example-3', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/download');
    const download = await Promise.all([
        page.waitForEvent('download'),
        page.locator('a[href="download/some-file.txt"]').click()
    ])
    const fileName = "Playwright_Approach3_downloaded_file";
    await download[0].saveAs(`downloadedFiles/${fileName}.txt`);
})
