import { test, expect } from '@playwright/test';
import { LoginPage } from '../Page/loginPage';



test.describe('test shopify site', () => {

    let loginPage: LoginPage


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
        await page.pause()
        // await loginPage.assertErrorMessageVisible()
    })
    
})
