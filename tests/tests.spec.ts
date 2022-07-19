import { expect, test } from '@playwright/test';

import { Saucedemo } from '../pageObjects/saucedemo';
import { credentials } from '../testData/dataForTests';

test.describe('3 tests: login, logout, add to card', async() => {
  let saucedemo: Saucedemo;
  test.beforeEach(async({ page, baseURL }) => {
    saucedemo = new Saucedemo(page);
    await page.goto('/')
  });

    test('Login With Valid Data', async() => {
await saucedemo.loginWithValidData(credentials.userName, credentials.password);
await expect(saucedemo.cartBtn).toBeVisible();
    });

    test('Logout', async() => {
    await saucedemo.loginWithValidData(credentials.userName, credentials.password);
    await saucedemo.sideMenuBtn.click();
    await saucedemo.logoutBtn.click();
    await expect(saucedemo.loginBtn).toBeVisible();
    });

    test('Adding Product In Cart', async() => {
    await saucedemo.loginWithValidData(credentials.userName, credentials.password);
    await saucedemo.addSauceLabsOnesieToCart.click();
    await saucedemo.cartBtn.click();
    await expect(saucedemo.checkAddedProductInCart).toBeVisible();
    });
})

