import {expect, test} from '@playwright/test'

test('Frame Handling using page.frameLocator()',async({page})=>{
    await page.goto("https://ui.vision/demo/webtest/frames/");
    const frame1 = page.frameLocator('frame[src="frame_1.html"]');//accessing frame within page
    await frame1?.locator('[name="mytext1"]').fill('Darshna');//accessing field within frame

})

test('Frame Handling using page.frame()',async({page})=>{
    await page.goto("https://ui.vision/demo/webtest/frames/");
    const frame1 = page.frame({url:'https://ui.vision/demo/webtest/frames/frame_1.html'});//accessing frame within page
    await frame1?.locator('[name="mytext1"]').fill('Avishkar');//accessing field within frame
    //?mark means it will also accept null.since typescript complier raise error stating "'frame1'is possibly 'null'.ts(18047)"
    //to handle it,we add?
})

test('Frame Handling using page.frameLocator2()',async({page})=>{
    await page.goto("https://ui.vision/demo/webtest/frames/");
    const frame2 = page.frameLocator('frame[src="frame_2.html"]');
    await frame2?.locator('[name="mytext2"]').fill('Acharya');
})

test('Frame Handling using page.frameLocator3()',async({page})=>{
    await page.goto("https://ui.vision/demo/webtest/frames/");
    const frame3 = page.frameLocator('frame[src="frame_3.html"]');
    await frame3?.locator('[name="mytext3"]').fill('Himanshu');
})

test('Frame Handling using page.frameLocator4()',async({page})=>{
    await page.goto('https://ui.vision/demo/webtest/frames/');
    const frame4 = page.frameLocator('frame[src="frame_4.html"]');
    await frame4?.locator('[name="mytext4"]').fill('Aniket');
})