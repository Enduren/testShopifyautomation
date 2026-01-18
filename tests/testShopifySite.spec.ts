import { test, expect } from '@playwright/test';
import { LoginPage } from '../Page/loginPage';
import { AboutPage } from '../Page/aboutUsPage';
import { AddProducts } from '../Page/addProducts';
import { CartPage } from '../Page/cartPage';



test.describe('test shopify site', () => {

    //Page Object Model instances
    let loginPage: LoginPage
    let aboutPage: AboutPage
    let addProducts: AddProducts
    let cartPage: CartPage


   
    test.beforeEach(async ({ page }) => {
        //Navigate to site
        loginPage=new LoginPage(page)
        loginPage.visit()  

    })

    test('E2E of the Checkout Process', async ({ page }) => {
        //Login to site
        await loginPage.login()

         //Verify social media links are visible
        addProducts=new AddProducts(page)
        await addProducts.verifySocialMediaLinks()

        //check products are visible
        await addProducts.checkProducts()
        
        //Add products to cart
        addProducts=new AddProducts(page)
        await addProducts.addAllProductsToCart()

        //Go to cart and verify products are added
        cartPage=new CartPage(page)
        await cartPage.navigateToCart()
        await cartPage.assertProductsInCart()

        //Checkout process
        await cartPage.proceedToCheckout()

        //Complete checkout and verify order confirmation
        await cartPage.completeCheckout()

        await page.waitForTimeout(6000)
        
    })

    test('Remove Products', async ({ page }) => {
        
        //Login to site
        await loginPage.login()

        //Add products to cart
        addProducts=new AddProducts(page)
        await addProducts.addAllProductsToCart()

        //Go to cart and verify products are added
        cartPage=new CartPage(page)
        await cartPage.navigateToCart()
        await cartPage.assertProductsInCart()

        //Remove products from cart and verify
        await cartPage.removeAllItemsFromCart()
        
    })

    test('Login with invalid credentials', async ({ page }) => {
        
        //Perform login with invalid credentials
        await loginPage.loginWithInvalidCredentials()   

        //Assert error message is visible
        await loginPage.assertErrorMessageVisible()
    })

    test('Go to About Us page', async ({ page }) => {
        
        //Login to site
        await loginPage.login()

        //Navigate to About Us page
        aboutPage=new AboutPage(page)
        await aboutPage.navigateToAboutUs()

        //Assert About Us page is displayed
        await aboutPage.assertAboutUsPage()

        //Verify About Us page content
        await aboutPage.verifyAboutUsContent()
    })

    test('LogOut', async ({ page }) => {
        
        //Login to site
        await loginPage.login()

        //Navigate to About Us page
        aboutPage=new AboutPage(page)
        await aboutPage.clickMenuButton()

        //Log out from site
        await loginPage.logout()
    })
    

    

    
    
})
