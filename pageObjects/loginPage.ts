import { Locator, Page } from '@playwright/test';

export class LoginPage {
    readonly page: Page;
    readonly userNameField: Locator;
    readonly passwordField: Locator;
    readonly loginBtn: Locator;

    constructor(page: Page) {
        this.page = page;
        this.userNameField = page.locator('[data-test="username"]');
        this.passwordField = page.locator('[data-test="password"]');
        this.loginBtn = page.locator('[data-test="login-button"]');
    };
    async loginWithValidData(userNameForLogin: string, passwordForLogin: string) {
        await this.userNameField.fill(userNameForLogin);
        await this.passwordField.fill(passwordForLogin);
        await this.loginBtn.click();
    };
};
