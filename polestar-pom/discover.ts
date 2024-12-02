import { Locator, Page } from "@playwright/test"
import { Polestar_Models } from "../tests/configLocators"

export class discover{

    readonly page: Page
    
    readonly booktestdrive1 : Locator
    readonly Prenumerera1 : Locator
    readonly offer1 : Locator
    readonly carReadyforDelivery1 : Locator

    constructor(page: Page){
       this.page = page
       
       this.booktestdrive1 = page.locator(Polestar_Models.booktestdrive)
       this.Prenumerera1 = page.locator(Polestar_Models.Prenumerera)
       this.offer1 = page.locator(Polestar_Models.offer)
       this.carReadyforDelivery1 = page.locator(Polestar_Models.Interiör)
    }

    async BookTestDrive(){

        await this.page.waitForSelector(Polestar_Models.booktestdrive)
        await this.booktestdrive1.click();

        await this.page.waitForSelector(Polestar_Models.Prenumerera)
        await this.Prenumerera1.click();

    }
}