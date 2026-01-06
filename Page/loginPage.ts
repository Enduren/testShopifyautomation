import { expect, Locator, Page } from '@playwright/test';


export class LoginPage {

      // Define Selectors
    readonly page: Page;
    readonly loginTab: Locator
    readonly usernameInput: Locator;
    readonly passwordInput: Locator;
    readonly submitButton: Locator;
    readonly forgotPassword: Locator;
    readonly errorMessage: Locator;

    constructor(page:Page) {
        this.page = page;
        // Using specific selectors for better reliability
        this.loginTab= page.locator(`//div[@class='seven columns offset-by-one desktop']//a[@id='customer_login_link']`);
        this.usernameInput = page.locator('#customer_email');
        this.passwordInput = page.locator('#customer_password');
        this.submitButton = page.locator(`//input[@value='Sign In']`);
        this.forgotPassword= page.locator(`//a[normalize-space()='Forgot your password?']`);
        this.errorMessage = page.locator("(//li[normalize-space()='Incorrect email or password.'])[1]");
    }


    async visit() {
        await this.page.goto("https://sauce-demo.myshopify.com/")
    }

     async login(username: string, password: string) {
        // Use the locator objects directly to perform actions
        await this.loginTab.click()
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.submitButton.click();
    }

    async assertErrorMessageVisible() {
        // Assertions should target the locator directly
        await expect(this.errorMessage).toBeVisible();
    }
}