import { Locator, Page } from '@playwright/test';

export class CartPage {
    readonly page: Page;
    readonly cartBtn: Locator;
    readonly addSauceLabsOnesieToCart: Locator;
    readonly checkAddedProductInCart: Locator;


    constructor(page: Page) {

        this.page = page;
        this.cartBtn = page.locator('[class="shopping_cart_link"]')
        this.addSauceLabsOnesieToCart = page.locator('[data-test="add-to-cart-sauce-labs-onesie"]')
        this.checkAddedProductInCart = page.locator('//div[text()="Sauce Labs Onesie"]');
    };
    async addProduct() {
        await this.addSauceLabsOnesieToCart.click();
    };
    async clickOnTheBtnCart() {
        await this.cartBtn.click();
    };
};
