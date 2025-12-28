import { test, expect } from '@playwright/test';
import { LoginPage } from '../Page/loginPage';



test.describe('test shopify site', () => {

    let loginPage: LoginPage


    /*
        https://www.saucedemo.com/
        https://parabank.parasoft.com/parabank/login.htm
    
    
    */

    test.beforeEach(async ({ page }) => {
    loginPage=new LoginPage(page)
    loginPage.visit()   
  })

    test('Negative Scenario for login', async ({ page }) => {
        //check all menu tabs
        await loginPage.login("username@example.com","invalid password")
        await page.waitForTimeout(6000)
        // await loginPage.assertErrorMessageVisible()
    })
    
})
