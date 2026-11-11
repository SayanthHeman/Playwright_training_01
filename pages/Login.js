import { expect } from "@playwright/test";
class Login{
    constructor(page){
        this.page = page;
        this.userName = page.locator('[data-test="username"]');
        this.password = page.locator('[data-test="password"]');
        this.loginButton = page.locator('[data-test="login-button"]');
        this.checkLoggedin = page.locator('[data-test="title"]')
    };

    async gotoLoginPage(){
        await this.page.goto('https://www.saucedemo.com/');
    };

    async loginCredentials(userName,password){
        await this.userName.fill(userName);
        await this.password.fill(password);
        await this.loginButton.click();
        await expect(this.checkLoggedin).toBeVisible();
    };
}
module.exports = Login;