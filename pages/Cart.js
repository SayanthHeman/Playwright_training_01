class Cart{
    constructor(page){
        this.page = page;
        this.cartBtn = page.locator('[data-test="shopping-cart-link"]');
        this.checkOutBtn = page.getByRole("button", {name: 'Checkout'});
        this.contShoppingBtn = page.getByRole("button",{name: 'Continue Shopping'});
        this.removeLight = page.locator('[data-test="remove-sauce-labs-bike-light"]');
        this.firstName = page.locator('[data-test="firstName"]');
        this.lastName = page.locator('[data-test="lastName"]');
        this.postalCode = page.locator('[data-test="postalCode"]');
        this.ctnButton = page.locator('[data-test="continue"]');
        this.canclButton = page.getByRole("button", {name: 'Cancel'});
    };

    async gotoCart(){
        await this.cartBtn.click();
    };
    
    async backToDashboard(){
        await this.contShoppingBtn.click();
    };

    async removeItem(){
        await this.removeLight.click();
    };

    async chceckOutItem(fName, lName, code){
        await this.checkOutBtn.click();
        await this.firstName.fill(fName);
        await this.lastName.fill(lName);
        await this.postalCode.fill(code);
        await this.ctnButton.click();
    };

    async cancelCheckout(){
        await this.canclButton.click();
    };
};
module.exports = Cart;