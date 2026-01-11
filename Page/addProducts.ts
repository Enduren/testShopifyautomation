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

    // Initialize selectors
    constructor(page:Page) {
        this.page = page;
        this.addSauceBackpack = page.locator('#add-to-cart-sauce-labs-backpack');
        this.addSauceBikeLight = page.locator('#add-to-cart-sauce-labs-bike-light');
        this.addSauceBoltTShirt = page.locator('#add-to-cart-sauce-labs-bolt-t-shirt');
        this.addSauceFleeceJacket = page.locator('#add-to-cart-sauce-labs-fleece-jacket');
        this.addSauceOnesie = page.locator('#add-to-cart-sauce-labs-onesie');
        this.addSauceRedTShirt = page.locator('[data-test="add-to-cart-test.allthethings()-t-shirt-(red)"]');        
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
}