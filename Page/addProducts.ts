import { expect, Locator, Page } from '@playwright/test';

export class AddProducts {
    readonly page: Page;        

    constructor(page:Page) {
        this.page = page;
    }   
}