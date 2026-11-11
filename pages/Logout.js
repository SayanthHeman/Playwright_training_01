const { expect } = require("@playwright/test");

export class Logout{
    constructor(page){
        this.page = page;
        this.menuBtn = page.getByRole('button', { name: 'Open Menu' });
        this.logoutOptn = page.locator('[data-test="logout-sidebar-link"]');
        this.logoutChk = page.locator('[data-test="login-button"]');
    };

    async LogoutPage(){
        await this.menuBtn.click();
        await this.logoutOptn.click();
        await expect(this.logoutChk).toBeVisible();
    };
};