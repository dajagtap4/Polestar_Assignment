import { Locator, Page } from "@playwright/test"
const configLocators = JSON.parse(JSON.stringify(require("../utils/configLocators.json")))

export class discovery{

    readonly page: Page
    
    readonly booktestdrive1 : Locator
    readonly Prenumerera1 : Locator
    readonly offer1 : Locator
    readonly carReadyforDelivery1 : Locator

    constructor(page: Page){
       this.page = page
       
       this.booktestdrive1 = page.locator(configLocators.booktestdrive)
       this.Prenumerera1 = page.locator(configLocators.Prenumerera)
       this.offer1 = page.locator(configLocators.offer)
       this.carReadyforDelivery1 = page.locator(configLocators.Interiör)
    }

    async BookTestDrive(){

        await this.page.waitForSelector(configLocators.booktestdrive)
        await this.booktestdrive1.click();

        await this.page.waitForSelector(configLocators.Prenumerera)
        await this.Prenumerera1.click();

    }
}