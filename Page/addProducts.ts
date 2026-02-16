import { expect, Locator, Page } from '@playwright/test';

export class AddProducts {
    // Define Selectors
    private readonly page: Page;  
    private readonly addSauceBackpack: Locator;
    private readonly addSauceBikeLight: Locator 
    private readonly addSauceBoltTShirt: Locator
    private readonly addSauceFleeceJacket: Locator
    private readonly addSauceOnesie: Locator
    private readonly addSauceRedTShirt: Locator 
    private readonly twitterLink: Locator;
    private readonly facebookLink: Locator;
    private readonly linkedInLink: Locator;   
    private readonly footerCopyright: Locator; 

    // Initialize selectors
    constructor(page:Page) {
        this.page = page;
        this.addSauceBackpack = page.locator('#add-to-cart-sauce-labs-backpack');
        this.addSauceBikeLight = page.locator('#add-to-cart-sauce-labs-bike-light');
        this.addSauceBoltTShirt = page.locator('#add-to-cart-sauce-labs-bolt-t-shirt');
        this.addSauceFleeceJacket = page.locator('#add-to-cart-sauce-labs-fleece-jacket');
        this.addSauceOnesie = page.locator('#add-to-cart-sauce-labs-onesie');
        this.addSauceRedTShirt = page.locator('[data-test="add-to-cart-test.allthethings()-t-shirt-(red)"]');        
        this.twitterLink = page.locator(`//a[normalize-space()='Twitter']`);
        this.facebookLink = page.locator(`//a[normalize-space()='Facebook']`);
        this.linkedInLink = page.locator(`//a[normalize-space()='LinkedIn']`);  
        this.footerCopyright = page.locator('.footer_copy');
    }   

     // Assert that all added products are present
    async  checkProducts() {
            const expectedItems = [
                'Sauce Labs Backpack',
                'Sauce Labs Bike Light',
                'Sauce Labs Bolt T-Shirt',
                'Sauce Labs Fleece Jacket',
                'Sauce Labs Onesie',
                'Test.allTheThings() T-Shirt (Red)'
            ];

            for (const item of expectedItems) {
                await expect(this.page.locator(`//div[normalize-space()='${item}']`)).toBeVisible();
            }
    }
    
    // Add all products to the cart
    async addAllProductsToCart() {
        await this.addSauceBackpack.click();
        await this.addSauceBikeLight.click();
        await this.addSauceBoltTShirt.click();
        await this.addSauceFleeceJacket.click();
        await this.addSauceOnesie.click();
        await this.addSauceRedTShirt.click();        
    }
    // Verify social media links are visible
    async verifySocialMediaLinks() {
        await expect(this.twitterLink).toBeVisible();
        await expect(this.facebookLink).toBeVisible();
        await expect(this.linkedInLink).toBeVisible();
    }

    // Verify footer copyright text
    async verifyFooterCopyright() {
        await expect(this.footerCopyright).toBeVisible();
    }
}