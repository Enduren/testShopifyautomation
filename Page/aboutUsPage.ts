import { expect, Locator, Page } from '@playwright/test';

export class AboutPage {

    readonly page: Page;
    readonly menuButton: Locator;
    readonly aboutUsLink: Locator;
    
    
    constructor(page:Page) {
            this.page = page;
            this.aboutUsLink = page.locator('[data-test="about-sidebar-link"]');
            this.menuButton = page.locator('#react-burger-menu-btn');
    }

    async navigateToAboutUs() {
        await this.menuButton.click();
        await this.aboutUsLink.click();
        // await this.page.waitForNavigation()
    }

    async assertAboutUsPage() {
        await expect(this.page).toHaveURL(/.*saucelabs.com/);
    }
}