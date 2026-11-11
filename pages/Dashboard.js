class Dashboard{
    constructor(page){
        this.page = page;
        this.productBag = page.locator('[data-test="add-to-cart-sauce-labs-backpack"]');
        this.productLight = page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]');
        this.productShirt = page.locator('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]');
        this.removeBag = page.locator('[data-test="remove-sauce-labs-backpack"]');
    };

    async addProduct(){
        await this.productBag.click();
        await this.productLight.click();
        await this.productShirt.click();
    };

    async removeProduct(){
        await this.removeBag.click();
    }
};

module.exports = Dashboard;