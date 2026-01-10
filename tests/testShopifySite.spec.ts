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

    test('E2E of all menu tabs', async ({ page }) => {
        //Login to site
        await loginPage.login()

        //Add products to cart
        addProducts=new AddProducts(page)
        await addProducts.addAllProductsToCart()

        //Go to cart and verify products are added
        cartPage=new CartPage(page)
        await cartPage.navigateToCart()
        await cartPage.assertProductsInCart()

        await page.waitForTimeout(6000)

        //Navigate to about us page
        aboutPage=new AboutPage(page)
        await aboutPage.navigateToAboutUs()
        await aboutPage.assertAboutUsPage()
        
        await page.pause()
        // await loginPage.assertErrorMessageVisible()
    })
    
})
