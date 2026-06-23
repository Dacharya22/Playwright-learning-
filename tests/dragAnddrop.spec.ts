import { expect, test } from "@playwright/test"

// test('drag and drop',async({page})=>{
//     await page.goto('https://www.globalsqa.com/demo-site/draganddrop/');
//     const dragMe = page.locator('#draggable');
//     const dropHere = page.locator('#droppable');
    
//     await dragMe.hover();
//     await page.mouse.down();
    
//     await dropHere.hover();
//     await page.mouse.up();
    
//     await expect(page.locator('//img[@alt="The peaks of High Tatras"]')).toHaveAccessibleDescription('//div[@id="trash"]');
//     await page.pause();
// }) 



// test('drag and drop', async ({ page }) => {

//     await page.goto('https://www.globalsqa.com/demo-site/draganddrop/');

//     // Switch to the iframe where draggable and droppable elements exist
//     const frame = page.frameLocator('iframe.demo-frame');

//     const dragMe = frame.locator('img[alt="The peaks of High Tatras"]');
//     const dropHere = frame.locator('#trash');

//     // Drag and drop using Playwright built-in method
//     await dragMe.dragTo(dropHere);

//     // Assertion: image should be inside trash
//     await expect(frame.locator('#trash img[alt="The peaks of High Tatras"]')).toBeVisible();

//     await page.pause();
// });




test('drag and drop',async({page})=>{
  
    await page.goto('https://www.globalsqa.com/demo-site/draganddrop/');
    const Frame = page.frameLocator('[src="../../demoSite/practice/droppable/photo-manager.html"]');    
    const Drag = Frame.locator(' //h5[text()="High Tatras"]');
    const Drop = Frame.locator('//div[@id="trash"]');
    
    await Drag.hover();
    await page.mouse.down();
    
    await Drop.hover();
    await page.mouse.up();
    
    await page.pause();
}) 


test('drag and drop - Approach 2',async({page})=>{
    await page.goto('https://testautomationcentral.com/demo/drag_and_drop.html');
    const dragMe1 = page.locator('#draggable');
    const dropHere1 = page.locator('#droppable');
    
    await dragMe1.dragTo(dropHere1);
    await expect(page.locator('#drop-message')).toHaveText('Dropped successfully!');
    await page.pause();
})

// test('drag and drop',async({page})=>{
  
//     await page.goto('https://www.globalsqa.com/demo-site/draganddrop/');
//     const Frame = page.frameLocator('[src="../../demoSite/practice/droppable/photo-manager.html"]');    
//     const Drag = Frame.locator(' //h5[text()="High Tatras"]');
//     const Drop = Frame.locator('//div[@id="trash"]');
    
//     await Drag.hover();
//     await page.mouse.down();
    
//     await Drop.hover();
//     await page.mouse.up();
    
//     await page.pause();
// }) 

// test.only("drag and drop cancel delete", async ({ page }) => {
//   await page.goto("https://www.globalsqa.com/demo-site/draganddrop/");

//   const Frame = page.frameLocator('[src="../../demoSite/practice/droppable/photo-manager.html"]');
//   const Drag = Frame.locator(' //h5[text()="High Tatras"]');
//   const Drop = Frame.locator('//div[@id="trash"]');
//   await page.locator('//a[@title="Recycle this image"]').click();

//   await Drag.hover();
//   await page.mouse.down();

//   await Drop.hover();
//   await page.mouse.up();

//   await page.pause();

//   await page.pause();
// });


// test.only("drag and drop cancel delete", async ({ page }) => {
//   await page.goto("https://www.globalsqa.com/demo-site/draganddrop/");

//   const Frame = page.frameLocator('[src="../../demoSite/practice/droppable/photo-manager.html"]');

//   const Drag = Frame.locator('//h5[text()="High Tatras"]');
//   const Trash = Frame.locator('#trash');


//   // First drop item into trash
//   await Drag.dragTo(Trash);

//   // Drag back to original place (gallery)
//   await page.locator(' //a[@title="Recycle this image"]').click();
//   const Drag1 = Frame.locator('//li[@class="ui-widget-content ui-corner-tr ui-draggable ui-draggable-handle"]');

//   await page.pause();
// });


test.only('drag and drop approach',async({page})=>{
  
    await page.goto('https://www.globalsqa.com/demo-site/draganddrop/');
    const Frame = page.frameLocator('[src="../../demoSite/practice/droppable/photo-manager.html"]');    
    const Drag = Frame.locator(' //h5[text()="High Tatras"]');
    const Drop = Frame.locator('//div[@id="trash"]');
    
    await Drag.hover();
    await page.mouse.down();
    
    await Drop.hover();
    await page.mouse.up();
     
    const restoreButton = Frame.locator('//a[@title="Recycle this image"]');
    await restoreButton.click();

    await page.pause();
}) 

