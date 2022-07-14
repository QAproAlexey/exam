import { expect, test } from '@playwright/test';

import { Saucedemo } from '../pageObjects/saucedemo';

test.describe('3 tests: login, logout, add to card', async () => {
  let saucedemo: Saucedemo;
  test.beforeEach(async ({ page }) => {
    saucedemo = new Saucedemo(page);
    await page.goto ('https://www.saucedemo.com/')
  });
  test.describe('Saucedemo', async () => {
    test('Login With Valid Data', async () => {
await saucedemo.loginWithValidData ();
await expect(saucedemo.cartBtn).toBeVisible ();
    });
    test('Logout', async () => {
    await saucedemo.loginWithValidData ();
    await saucedemo.sideMenu.click ();
    await saucedemo.logoutBtn.click ();
    await expect(saucedemo.loginBtn).toBeVisible ();
    });
    test('Adding Product In Cart', async () => {
    await saucedemo.loginWithValidData ();
    await saucedemo.addToCartProduct.click ();
    await saucedemo.cartBtn.click ();
    await expect(saucedemo.checkAddedProductInCart).toBeVisible ();
    });
})
});
