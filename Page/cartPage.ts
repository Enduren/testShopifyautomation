import { expect, Locator, Page } from '@playwright/test';

export class CartPage {
    // Define Selectors
    readonly page: Page;
    readonly cartIcon: Locator;
    readonly cartItem: Locator;
    readonly removeItemButton: Locator;
    readonly checkoutButton: Locator;
    readonly firstNameInput: Locator;
    readonly lastNameInput: Locator;
    readonly postalCodeInput: Locator;
    readonly continueButton: Locator;
    readonly finishButton: Locator;
    readonly orderConfirmationMessage: Locator;
    readonly backHomeButton: Locator;
    readonly cartBadge: Locator;
    readonly emptyCartMessage: Locator;
    readonly shoppingCartLink: Locator;
    readonly cancelButton: Locator;
    readonly inventoryContainer: Locator;
    readonly backHomeBtn: Locator;

    // Initialize selectors
    constructor(page: Page) {
        this.page = page;
        this.cartIcon = page.locator('.shopping_cart_link');
        this.cartItem = page.locator('.cart_item');
        this.removeItemButton = page.locator('.cart_button');
        this.checkoutButton = page.locator('#checkout');
        this.firstNameInput = page.locator('#first-name');
        this.lastNameInput = page.locator('#last-name');
        this.postalCodeInput = page.locator('#postal-code');
        this.continueButton = page.locator('#continue');
        this.finishButton = page.locator('#finish');
        this.orderConfirmationMessage = page.locator('.complete-header');
        this.backHomeButton = page.locator('#back-to-products');
        this.cartBadge = page.locator('.shopping_cart_badge');
        this.emptyCartMessage = page.locator('.cart_empty');
        this.shoppingCartLink = page.locator('.shopping_cart_link');
        this.cancelButton = page.locator('#cancel');
        this.inventoryContainer = page.locator('.inventory_list');
        this.backHomeBtn = page.locator('#back-to-products');


    }

    // Navigate to the cart page
    async navigateToCart() {
        await this.cartIcon.click();
    }

    // Assert that all added products are present in the cart
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

    // Remove all items from the cart
    async removeAllItemsFromCart() {
        const itemCount = await this.cartItem.count();  
        for (let i = 0; i < itemCount; i++) {
            await this.removeItemButton.nth(0).click();

        }


        }

    // Proceed to checkout by filling in user information    
    async proceedToCheckout() {
        await this.checkoutButton.click();
        await this.firstNameInput.fill('John');
        await this.lastNameInput.fill('Doe');
        await this.postalCodeInput.fill('12345');
    }

    // Complete the checkout process and verify order confirmation
    async completeCheckout() {
        await this.continueButton.click();

         //Assert that all items are in the checkout overview
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

        await this.finishButton.click();
        await expect(this.orderConfirmationMessage).toHaveText('Thank you for your order!');
    }

    //check for back to home button
    async backToHome() {
        await expect(this.backHomeButton).toBeVisible();
    }

}