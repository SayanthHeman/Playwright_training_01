// Using Codegen

import { test, expect } from '@playwright/test';

test('Codegen Test', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();
  await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
  await page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
  await page.locator('[data-test="shopping-cart-link"]').click();
  await expect(page.locator('[data-test="title"]')).toBeVisible();
  await page.locator('[data-test="checkout"]').click();
  await page.locator('[data-test="firstName"]').click();
  await page.locator('[data-test="firstName"]').fill('first');
  await page.locator('[data-test="lastName"]').click();
  await page.locator('[data-test="lastName"]').fill('last');
  await page.locator('[data-test="postalCode"]').click();
  await page.locator('[data-test="postalCode"]').fill('695572');
  await page.locator('[data-test="continue"]').click();
  await page.locator('[data-test="finish"]').click();
  await page.locator('[data-test="back-to-products"]').click();
  await page.getByRole('button', { name: 'Open Menu' }).click();
  await page.locator('[data-test="logout-sidebar-link"]').click();
  await expect(page.locator('[data-test="login-button"]')).toBeVisible();
});

test.only("Alerts & Dialogs", async({page})=>{
    await page.goto('file:///E:/Work/Sayanth_TM/Classes/TM_Playwright/Manual/M_Playwright_Notes/Locators/locators-practice.html');
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