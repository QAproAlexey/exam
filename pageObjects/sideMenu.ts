import { Locator, Page } from '@playwright/test';

export class SideMenu {
    readonly page: Page;
    readonly sideMenuBtn: Locator;
    readonly logoutBtn: Locator;

    constructor(page: Page) {

        this.page = page;
        this.sideMenuBtn = page.locator('[id="react-burger-menu-btn"]')
        this.logoutBtn = page.locator('[id="logout_sidebar_link"]')
    };
    async clickOnTheSideMenu() {
        await this.sideMenuBtn.click();
    };
    async clickBtnLogoutInSideMenu() {
        await this.logoutBtn.click();
    };
};
