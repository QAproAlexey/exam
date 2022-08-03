import { credentials } from '../testData/dataForTests';
import { expect } from '@playwright/test';
import { test } from '../fixtures/baseFixture';

test('Login With Valid Data', async ({ loginPage, cartPage }) => {
    await loginPage.loginWithValidData(credentials.userName, credentials.password);
    await expect(cartPage.cartBtn).toBeVisible();
});

test.describe('2 tests: logout, add to card', async () => {
    test.beforeEach(async ({ loginPage }) => {
        await loginPage.loginWithValidData(credentials.userName, credentials.password);
    });

    test('Logout', async ({ loginPage, sideMenu }) => {
        await sideMenu.clickOnTheSideMenu();
        await sideMenu.clickBtnLogoutInSideMenu();
        await expect(loginPage.loginBtn).toBeVisible();
    });

    test('Adding Product In Cart', async ({ cartPage }) => {
        await cartPage.addProduct();
        await cartPage.clickOnTheBtnCart();
        await expect(cartPage.checkAddedProductInCart).toBeVisible();
    });
});
