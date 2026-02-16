import { expect, Locator, Page } from '@playwright/test';

export class CartPage {
    // Define Selectors
    private readonly page: Page;
    private readonly cartIcon: Locator;
    private readonly cartItem: Locator;
    private readonly removeItemButton: Locator;
    private readonly checkoutButton: Locator;
    private readonly firstNameInput: Locator;
    private readonly lastNameInput: Locator;
    private readonly postalCodeInput: Locator;
    private readonly continueButton: Locator;
    private readonly finishButton: Locator;
    private readonly orderConfirmationMessage: Locator;
    private readonly backHomeButton: Locator;
    private readonly cartBadge: Locator;
    private readonly emptyCartMessage: Locator;
    private readonly shoppingCartLink: Locator;
    private readonly cancelButton: Locator;
    private readonly inventoryContainer: Locator;
    private readonly backHomeBtn: Locator;

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