import { expect, Locator, Page } from '@playwright/test';

export class AddProducts {
    // Define Selectors
    readonly page: Page;  
    readonly addSauceBackpack: Locator;
    readonly addSauceBikeLight: Locator 
    readonly addSauceBoltTShirt: Locator
    readonly addSauceFleeceJacket: Locator
    readonly addSauceOnesie: Locator
    readonly addSauceRedTShirt: Locator 
    readonly twitterLink: Locator;
    readonly facebookLink: Locator;
    readonly linkedInLink: Locator;    

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
}