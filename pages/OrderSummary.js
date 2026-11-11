import { expect } from "@playwright/test";
class OrderSummary{
    constructor(page){
        this.page = page;
        this.finishBtn = page.locator('[data-test="finish"]');
        this.checkSum = page.locator('[data-test="complete-header"]');
        this.backHome = page.locator('[data-test="back-to-products"]');
    };

    async finishOrder(){
        await this.finishBtn.click();
        await expect(this.checkSum).toBeVisible();
        await this.backHome.click();
    };
};

module.exports = OrderSummary;