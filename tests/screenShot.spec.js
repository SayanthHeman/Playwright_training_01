import {test,expect} from '@playwright/test';

test('Take screenshot', async({page}) =>{
    await page.goto('https://www.saucedemo.com/');
    await page.screenshot({ path: 'screenshot.png' });
});

test('Take Screenshot & Save in Folder', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    await page.screenshot({ path: 'screenshots/login/screenshot.png' });
});

test('Take Screenshot of Full page', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="password"]').fill('secret_sauce');
    await page.locator('[data-test="login-button"]').click();
    await page.screenshot({ path: 'screenshots/login/halfpage/homepage-half.png'});
    await page.screenshot({ path: 'screenshots/login/fullpage/homepage-full.png', fullPage: true });
});

test('Take Screenshot of an Element', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    const loginBox = page.locator('#login_button_container');
    await loginBox.screenshot({ path: 'screenshots/login/elements/loginbox.png' });
});

test('Take Screenshot of Message', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    const message = page.locator('.error-message-container.error');
    await page.locator('[data-test="login-button"]').click();
    await message.screenshot({ path: 'screenshots/login/elements/message.png' });
});

test('Difference in screenshots', async ({ page }) => {
    await page.goto('https://en.true-time.com/in/');
    const screenshot = await page.screenshot();
    expect(screenshot).toMatchSnapshot('timeindia.png'); // failed test as the screenshot is not matching with the existing screenshot
})

test('Difference in screenshots Sauce Demo', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    const scnShot1 = await page.screenshot();
    expect(scnShot1).toMatchSnapshot('saucedemo.png'); // passed test as the screenshot is matching with the existing screenshot
});