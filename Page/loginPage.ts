import { expect, Locator, Page } from '@playwright/test';
const { chromium } = require('playwright');
const fs = require('fs');

export class LoginPage {

      // Define Selectors
    readonly page: Page;
    readonly usernameInput: Locator;
    readonly passwordInput: Locator;
    readonly submitButton: Locator;
    readonly forgotPassword: Locator;
    readonly errorMessage: Locator;

    // Initialize selectors
    constructor(page:Page) {
        this.page = page;
        // Using specific selectors for better reliability
        this.usernameInput = page.locator('#user-name');
        this.passwordInput = page.locator('#password');
        this.submitButton = page.locator(`#login-button`);
        this.forgotPassword= page.locator(`//a[normalize-space()='Forgot your password?']`);
        this.errorMessage = page.locator("(//li[normalize-space()='Incorrect email or password.'])[1]");
    }


    // Navigate to the login page
    async visit() {
        await this.page.goto("https://www.saucedemo.com/")
    }

    // Perform login action
     async login() {
        // Use the locator objects directly to perform actions
        const userData = JSON.parse(fs.readFileSync('userLogin.json', 'utf8'));
        
        await this.usernameInput.fill(userData.username);
        await this.passwordInput.fill(userData.password);
        await this.submitButton.click();
    }

    // Assert that the error message is visible
    async assertErrorMessageVisible() {
        // Assertions should target the locator directly
        await expect(this.errorMessage).toBeVisible();
    }
}