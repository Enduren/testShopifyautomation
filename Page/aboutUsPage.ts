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

    // Assert that the About Us page is displayed
    async assertAboutUsPage() {
        await expect(this.page).toHaveURL(/.*saucelabs.com/);
    }
}