import { Locator, Page } from "@playwright/test"
const configLocators = JSON.parse(JSON.stringify(require('../utils/configLocators.json')))

export class homePage{

    readonly page: Page
    readonly polestar2 : Locator
    readonly discover1 : Locator
    readonly instagram : Locator

    constructor(page: Page){
       this.page = page
       this.polestar2 = page.getByRole('button', { name: 'Polestar 2' })
       this.discover1 = page.locator(configLocators.discover)
       this.instagram = page.locator(configLocators.instagramLocator)
    }   

    async selectpolestar(){
        await this.polestar2.click()
    }

    async discoverOffers(){
        await this.discover1.click();
    }

    async navigateToInstagram(){
        await this.instagram.click()
    }
}