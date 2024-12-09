import { Locator, Page } from "@playwright/test"
const configLocators = JSON.parse(JSON.stringify(require("../utils/configLocators.json")))

export class instagram{

    readonly page: Page
    readonly instagram : Locator

    constructor(page: Page){
       this.page = page
       this.instagram = page.locator(configLocators.instagramLocator)
    }   

    async getTitle(page){
        const pageTitle = await page.title();
        console.log(`Page title: ${pageTitle}`);
    }
}