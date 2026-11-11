import {test as base} from '@playwright/test';

export const custtest = base.extend({
    logInPage: async({page}, use) =>{
        await page.goto('https://www.saucedemo.com/');
        await page.locator('[data-test="username"]').fill('standard_user');
        await page.locator('[data-test="password"]').fill('secret_sauce');
        await use(page);
    }
});