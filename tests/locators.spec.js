//  Locators
import  {expect, test} from '@playwright/test';

let locatorPage1 = 'file:///E:/Work/Sayanth_TM/Classes/TM_Playwright/Manual/M_Playwright_Notes/Locators/locators-practice.html'
let locatorPage2 = 'https://www.saucedemo.com/'

test("1. Textbox & Textarea", async({page})=>{
    await page.goto(locatorPage1);
    await page.getByRole('textbox', {name: 'First Name'}).fill("Sayanth");
    await page.getByLabel('First Name').fill("getby label")
    await page.getByPlaceholder('Enter first name').fill("with placeholder")
    await page.getByText('First Name').fill("filled with getby text")
    await page.getByTestId('fname-input').fill("testid")
    await page.locator('#first-name').fill("Id CSS")
    await page.locator('.input-field.name-input').fill("Class CSS") // space not allowed between classes
    await page.locator('[name="firstName"]').fill("attribute")
    await page.locator('input[name="firstName"]').fill("Name attribute")
    await page.locator('input[class="input-field name-input"]').fill(" Class attribute")
    await page.locator('//input[@id="first-name"]').fill("Xpath fill");

    await page.locator('label[for="first-name"]').fill("label attribute") 
    await expect(page.locator('label[for="first-name"]')).toHaveValue("label attribute") 
    //await page.pause()
});

test("Locator & Expect", async({page})=>{
    await page.goto(locatorPage2);
    await page.getByPlaceholder('Username').fill('standard_user');
    await page.getByLabel('Password').fill('secret_sauce');
    await page.getByRole('button',{name: 'Login'}).click();
    const prod = page.getByLabel('Products');
    await expect(prod).toBeVisible(); // checked if we landed on the page or not | toHaveText, toContainText
    await page.pause();
});

test("2. Radio & Checkbox", async({page})=>{
    await page.goto(locatorPage1);
    await page.getByRole('radio', { name: 'Windows' }).check();
    await page.getByRole('radio', { name: 'macOS' }).check();
    await page.getByRole('checkbox', { name: 'Automation' }).check();
    await page.getByRole('checkbox', { name: 'API Testing' }).check();
    await page.getByRole('checkbox', { name: 'Automation' }).uncheck();
    await page.getByRole('checkbox', { name: 'API Testing' }).uncheck();
})

test('3. Dropdown', async ({ page }) => {
  await page.goto(locatorPage1);
  await page.getByLabel('Choose a Browser:').selectOption('webkit');
  await page.getByLabel('Choose a Browser:').selectOption('chromium');
});

test('4. Click on Button: DOM Traversal', async({page})=>{
    await page.goto(locatorPage1);
    await page.locator('#user-1').getByRole('button', { name: 'Delete User' }).click();
    await page.locator('#user-2').getByRole('button', { name: 'Delete User' }).click();
 // Chaining
    await page.locator('.user-profile')
        .filter({hasText: 'Bob'})
        .getByRole('button', {name: 'Delete User'})
        .click();

 // Onother Method
    const bobDiv = page.locator('.user-profile', {hasText: 'User: Bob'});
    await expect(bobDiv).toContainText('Editor');
});

test('5. Mouse Actions', async ({ page }) => {
    await page.goto(locatorPage1);
 // Double Click
    await page.getByText('Double Click').dblclick();
    const textDbl = page.locator('div[id="mouse-out"]');
    await expect(textDbl).toContainText('Double Clicked!');

 // Right Click
    await page.getByRole('button', {name: 'Right Click'}).click({button: 'right'});
    const rightClk = page.locator('div[id="mouse-out"]');
    await expect(rightClk).toContainText('Right Clicked!');

 // Hover
    await page.locator('#hover-area').hover()
    const hoverAction = page.locator('#hover-area')
    await expect(hoverAction).toBeVisible() // to check if the element is visible or not
    await expect(hoverAction).toContainText('Hovered!')
});

test('6. Delayed/Dynamic Elements', async ({ page }) => {
    await page.goto(locatorPage1);
    await page.getByRole('button', { name: 'Start 3s Delay' }).click();
    await expect(page.getByText('Data Loaded Successfully!')).toBeVisible()
});

test("7. Alerts & Dialogs", async({page})=>{
    await page.goto(locatorPage1);
    page.once('dialog', async box => {
        expect(box.message()).toBe('System Warning!');
        await box.accept();
       //await box.dismiss() // to dismiss the alert dialog
    });
    await page.click('#btn-alert');

    page.once('dialog', async box => {
        expect(box.message()).toBe('Are you sure?')
        await box.accept()
    })
    await page.click('#btn-confirm');

    page.once('dialog', async box => {
        expect(box.message()).toBe('Enter secure code:')
        await box.accept('695572')
    })
    await page.click('#btn-prompt');

});
// “Page dot on handles every pop-up that appears,
// page dot once handles only the first one, so always set it up before clicking the button.”

test.only("page on", async({page}) => {

    await page.goto(locatorPage1);
    
    page.on('dialog', async box => {
        box.accept();
    });

    await page.click('#btn-alert');
    await page.click('#btn-confirm');
});

test.only('8. Iframes & New Tabs', async ({ page }) => {
    await page.goto(locatorPage1);
 // Access the iframe using frameLocator
    const videoFrame = page.frameLocator('#video-iframe');
 // Click the play button inside the iframe
    await videoFrame.locator('#play-btn').click();
 // Verify the video is playing (optional - check if video has currentTime > 0)
    const videoPlaying = await videoFrame.locator('#my-video').evaluate(video => video.paused === false)
    console.log(videoPlaying);
});

test('9. Drag and Drop', async({page})=>{
    await page.goto(locatorPage1);
    
    // Using dragAndDrop method
    await page.dragAndDrop('#draggable-item', '#drop-target'); //(dragSelector, dropSelector)
    
    // Verify the drop target has changed text
    const dropTarget = page.locator('#drop-target');
    await expect(dropTarget).toContainText('Success!');
});

