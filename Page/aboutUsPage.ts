import { expect, Locator, Page } from '@playwright/test';

export class AboutPage {

    // Define Selectors
    readonly page: Page;
    readonly menuButton: Locator;
    readonly aboutUsLink: Locator;
    
   // Initialize selectors 
    constructor(page:Page) {
            this.page = page;
            this.aboutUsLink = page.locator('[data-test="about-sidebar-link"]');
            this.menuButton = page.locator('#react-burger-menu-btn');
    }

    // Navigate to About Us page
    async navigateToAboutUs() {
        await this.menuButton.click();
        await this.aboutUsLink.click();
        // await this.page.waitForNavigation()
    }

    //click on menu button
    async clickMenuButton() {
        await this.menuButton.click();
    }

    // Assert that the About Us page is displayed
    async assertAboutUsPage() {
        await expect(this.page).toHaveURL(/.*saucelabs.com/);
    }

    //verify About Us page content
    async verifyAboutUsContent() {
        const expectedMenuItems = [
            'Products',
            'Sauce AI',
            'Solutions',
            'Pricing',
            'Developers',
            'Resources',
        ];

        // Get the full text content from the container
        const pageContent = await this.page.locator('div.MuiStack-root.css-19diydd').textContent();

        // Loop through each item and ensure it exists within that text
        for (const item of expectedMenuItems) {
            await expect(pageContent).toContain(item);
        }
    }

    async checkBottomLinks () {

        const expectedBottomLinks = [
            'Products',
            'Platform for Test',
            'Global Tools',       
            'Set up and integrate',
            'Resources',
            'Company',

        ];

        const bottomLinks = await this.page.locator('div.MuiStack-root.css-19diydd').locator('a').all();
        for (const link of bottomLinks) {
            await expect(link).toBeVisible();
        }
    }
}