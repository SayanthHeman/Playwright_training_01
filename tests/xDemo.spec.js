import {test, expect} from '@playwright/test';

let locatorPage1 = 'file:///E:/Work/Sayanth_TM/Classes/TM_Playwright/Manual/M_Playwright_Notes/Locators/locators-practice.html'
let locatorPage2 = 'https://www.saucedemo.com/'

// Promise all
/*
test("DOM Traversal", async({page})=>{
    await page.goto(locatorPage1);
    const hover = page.locator('#hover-area');
    await hover.hover();
    await expect(hover).toContainText('Hovered');
    await page.getByRole('button', {name: "Right Click"}).click({button: 'right'});
    await expect(page.locator('#mouse-out')).toContainText("Right Clicked!");
    await page.getByRole('button', {name: "Start 3s Delay"}).click();
    await expect(page.locator('#hidden-text')).toContainText("Data Loaded Successfully!");

});
*/

// test('Dialog Alert', async({page}) => {
//     await page.goto(locatorPage1);
//     page.once('dialog', async dialogue => {
//         console.log(dialogue.message());
//         await dialogue.accept();
//     });
//     await page.getByRole('button', {name: "Alert"}).click();
// });

// test('i frame', async({page}) => {
//     await page.goto(locatorPage1);
//     const iFrame = page.frameLocator('#video-iframe');
//     await iFrame.getByRole('button', {name: "Play Video"}).click();
//     const isVideoPlaying = await iFrame.locator('#my-video').evaluate(video => video.paused === false);
//     console.log(isVideoPlaying);

//     await page.dragAndDrop('#draggable-item', 'drop-target');
// });

test('iFrame', async({page}) => {

    await page.goto(locatorPage1);
    const iFrame = page.frameLocator('#video-iframe');
    await iFrame.getByRole('button', {name: "Play Video"}).click();
    const isVidPlaying = await iFrame.locator('#my-video').evaluate(video => video.paused === false);
    console.log(isVidPlaying);
});