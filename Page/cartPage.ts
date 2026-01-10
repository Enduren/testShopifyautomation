import { expect, Locator, Page } from '@playwright/test';

export class CartPage {
    readonly page: Page;
    readonly cartIcon: Locator;
    readonly cartItem: Locator;
    readonly removeItemButton: Locator;
    /*
        Sauce Labs Backpack
        Sauce Labs Bike Light
        Sauce Labs Bolt T-Shirt
        Sauce Labs Fleece Jacket
        Sauce Labs Onesie
        Test.allTheThings() T-Shirt (Red)
    */

    constructor(page: Page) {
          this.page = page;
        this.cartIcon = page.locator('.shopping_cart_link');
        this.cartItem = page.locator('.cart_item');
        this.removeItemButton = page.locator('.cart_button');
    }

    async navigateToCart() {
        await this.cartIcon.click();
    }

    async  assertProductsInCart() {
            const expectedItems = [
                'Sauce Labs Backpack',
                'Sauce Labs Bike Light',
                'Sauce Labs Bolt T-Shirt',
                'Sauce Labs Fleece Jacket',
                'Sauce Labs Onesie',
                'Test.allTheThings() T-Shirt (Red)'
            ];

            for (const item of expectedItems) {
                await expect(this.page.locator(`.cart_item:has-text("${item}")`)).toBeVisible();
            }
    }
}