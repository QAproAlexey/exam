import { Locator, Page, expect } from '@playwright/test';

import { credentials } from '../testData/dataForTests';

export class Saucedemo {
  readonly page: Page;
  readonly userNameField: Locator;
  readonly passwordField: Locator;
  readonly loginBtn: Locator;
  readonly cartBtn: Locator;
  readonly sideMenu: Locator;
  readonly logoutBtn: Locator;
  readonly addToCartProduct: Locator;
  readonly checkAddedProductInCart: Locator;


  constructor(page: Page) {
    this.page = page;
    this.userNameField = page.locator('[data-test="username"]');
    this.passwordField = page.locator('[data-test="password"]');
    this.loginBtn = page.locator('[data-test="login-button"]');
    this.cartBtn = page.locator('[class="shopping_cart_link"]')
    this.sideMenu = page.locator('[id="react-burger-menu-btn"]')
    this.logoutBtn = page.locator('[id="logout_sidebar_link"]')
    this.addToCartProduct = page.locator('[data-test="add-to-cart-sauce-labs-onesie"]')
    this.checkAddedProductInCart = page.locator('//div[text()="Sauce Labs Onesie"]');
  }
  async loginWithValidData () {
  await this.userNameField.fill(credentials.userName);
  await this.passwordField.fill(credentials.password);
  await this.loginBtn.click();
  }
}
