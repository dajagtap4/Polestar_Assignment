import { Locator, Page } from "@playwright/test"
const configLocators = JSON.parse(JSON.stringify(require("../tests/configLocators.json")))

export class homePage{

    readonly page: Page
    readonly polestar2 : Locator
    readonly discover1 : Locator

    constructor(page: Page){
       this.page = page
       this.polestar2 = page.getByRole('button', { name: 'Polestar 2' })
       this.discover1 = page.locator(configLocators.discover)
    }   

    async selectpolestar(){
        await this.polestar2.click()
    }

    async discoverOffers(){
        await this.discover1.click();
    }
}