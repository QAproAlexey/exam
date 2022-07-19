import { Locator, Page, expect } from '@playwright/test';

export class Saucedemo {
readonly page: Page;
readonly userNameField: Locator;
readonly passwordField: Locator;
readonly loginBtn: Locator;
readonly cartBtn: Locator;
readonly sideMenuBtn: Locator;
readonly logoutBtn: Locator;
readonly addSauceLabsOnesieToCart: Locator;
readonly checkAddedProductInCart: Locator;


constructor(page: Page) {

this.page = page;
this.userNameField = page.locator('[data-test="username"]');
this.passwordField = page.locator('[data-test="password"]');
this.loginBtn = page.locator('[data-test="login-button"]');
this.cartBtn = page.locator('[class="shopping_cart_link"]')
this.sideMenuBtn = page.locator('[id="react-burger-menu-btn"]')
this.logoutBtn = page.locator('[id="logout_sidebar_link"]')
this.addSauceLabsOnesieToCart = page.locator('[data-test="add-to-cart-sauce-labs-onesie"]')
this.checkAddedProductInCart = page.locator('//div[text()="Sauce Labs Onesie"]');
};
async loginWithValidData(userNameForLogin: string, passwordForLogin: string) {
await this.userNameField.fill(userNameForLogin);
await this.passwordField.fill(passwordForLogin);
await this.loginBtn.click();
};


}
