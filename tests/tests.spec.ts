import { expect, test } from '@playwright/test';

import { CartPage } from '../pageObjects/cartPage';
import { LoginPage } from '../pageObjects/loginPage';
import { SideMenu } from '../pageObjects/sideMenu';
import { credentials } from '../testData/dataForTests';

let loginPage: LoginPage;
let cartPage: CartPage;
let sideMenu: SideMenu;

test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    cartPage = new CartPage(page);
    sideMenu = new SideMenu(page);
    await page.goto('/')
});
test('Login With Valid Data', async () => {
    await loginPage.loginWithValidData(credentials.userName, credentials.password);
    await expect(cartPage.cartBtn).toBeVisible();
});

test.describe('2 tests: logout, add to card', async () => {
    test.beforeEach(async () => {
        await loginPage.loginWithValidData(credentials.userName, credentials.password);
    });

    test('Logout', async () => {
        await sideMenu.clickOnTheSideMenu();
        await sideMenu.clickBtnLogoutInSideMenu();
        await expect(loginPage.loginBtn).toBeVisible();
    });

    test('Adding Product In Cart', async () => {
        await cartPage.addProduct();
        await cartPage.clickOnTheBtnCart();
        await expect(cartPage.checkAddedProductInCart).toBeVisible();
    });
});
