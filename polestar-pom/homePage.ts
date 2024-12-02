import { Locator, Page } from "@playwright/test"
import { Polestar_Models } from "../tests/configLocators"

export class homePage{

    readonly page: Page
    readonly polestar2 : Locator
    readonly discover1 : Locator

    constructor(page: Page){
       this.page = page
       this.polestar2 = page.getByRole('button', { name: 'Polestar 2' })
       this.discover1 = page.locator(Polestar_Models.discover)
    }   

    async selectpolestar(){
        await this.polestar2.click()
    }

    async discoverOffers(){
        await this.discover1.click();
    }
}