import { expect, Locator, Page } from '@playwright/test';
const { chromium } = require('playwright');
const fs = require('fs');

export class LoginPage {

      // Define Selectors
    readonly page: Page;
    readonly usernameInput: Locator;
    readonly passwordInput: Locator;
    readonly submitButton: Locator;
    readonly errorMessage: Locator;
    readonly logoutButton: Locator;

    // Initialize selectors
    constructor(page:Page) {
        this.page = page;
        // Using specific selectors for better reliability
        this.usernameInput = page.locator('#user-name');
        this.passwordInput = page.locator('#password');
        this.submitButton = page.locator(`#login-button`);
        this.errorMessage = page.locator("h3[data-test='error']");
        this.logoutButton = page.locator('#logout_sidebar_link');
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

    //asert error message for invalid login
    async assertErrorMessage() {
        // Assertions should target the locator directly
        await expect(this.errorMessage).toBeVisible();
    }

    // Perform login with invalid credentials
    async loginWithInvalidCredentials() {
        const userData = JSON.parse(fs.readFileSync('userLogin.json', 'utf8'));;
        
        await this.usernameInput.fill(userData.username);
        await this.passwordInput.fill(userData.passworderror);
        await this.submitButton.click();
    }


    // Assert that the error message is visible
    async assertErrorMessageVisible() {
        // Assertions should target the locator directly
        await expect(this.errorMessage).toBeVisible();

        

    }
    
    // Perform logout action
    async logout() {
        await this.logoutButton.click();
    }
}