import { test, expect } from '@playwright/test';
import { LoginPage } from '../Page/loginPage';
import { AboutPage } from '../Page/aboutUsPage';
import { HomePage } from '../Page/homePage';
import { AddProducts } from '../Page/addProducts';



test.describe('test shopify site', () => {

    let loginPage: LoginPage
    let aboutPage: AboutPage
    let homePage: HomePage
    let addProducts: AddProducts


    /*
        https://www.saucedemo.com/

        https://parabank.parasoft.com/parabank/login.htm

        https://rahulshettyacademy.com/

        https://sauce-demo.myshopify.com/

        https://ultimateqa.com/automation
        
        https://qasummit.org/previous-events
    
    
    */

    test.beforeEach(async ({ page }) => {
    loginPage=new LoginPage(page)
    loginPage.visit()  

  })

    test('Negative Scenario for login', async ({ page }) => {
        //check all menu tabs  dtennison79@gmail.com  ChangeMe2SDET
        await loginPage.login()
        await page.waitForTimeout(6000)
        aboutPage=new AboutPage(page)
        await aboutPage.navigateToAboutUs()
        await aboutPage.assertAboutUsPage()
        
        await page.pause()
        // await loginPage.assertErrorMessageVisible()
    })
    
})
