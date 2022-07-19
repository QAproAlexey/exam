import { expect, test } from '@playwright/test';

import { Saucedemo } from '../pageObjects/saucedemo';
import { credentials } from '../testData/dataForTests';

let saucedemo: Saucedemo;
test.beforeEach(async( {page} ) => {
saucedemo = new Saucedemo(page);
await page.goto('/')
});
test('Login With Valid Data', async() => {
await saucedemo.loginWithValidData(credentials.userName, credentials.password);
await expect(saucedemo.cartBtn).toBeVisible();
});

test.describe('2 tests: logout, add to card', async() => {
test.beforeEach(async() => {
await saucedemo.loginWithValidData(credentials.userName, credentials.password);
});

test('Logout', async() => {
await saucedemo.sideMenuBtn.click();
await saucedemo.logoutBtn.click();
await expect(saucedemo.loginBtn).toBeVisible();
});

test('Adding Product In Cart', async() => {
await saucedemo.addSauceLabsOnesieToCart.click();
await saucedemo.cartBtn.click();
await expect(saucedemo.checkAddedProductInCart).toBeVisible();
});
});
