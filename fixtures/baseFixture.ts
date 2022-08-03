import { CartPage } from '../pageObjects/cartPage';
import { LoginPage } from '../pageObjects/loginPage';
import { SideMenu } from '../pageObjects/sideMenu';
import { test as base } from '@playwright/test';

export const test = base.extend<{
  loginPage: LoginPage;
  cartPage: CartPage;
  sideMenu: SideMenu;
}>({
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },
  cartPage: async ({ page }, use) => {
    await use(new CartPage(page));
  },
  sideMenu: async ({ page }, use) => {
    await use(new SideMenu(page));
  },
  page: async ({ baseURL, page }, use) => {
    await page.goto(baseURL);
    await use(page);
  },
});