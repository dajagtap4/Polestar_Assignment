import { Locator, Page } from "@playwright/test"

const configLocators = JSON.parse(JSON.stringify(require("../utils/configLocators.json")))

export class polestar2{

    readonly page: Page
    readonly Designa_och_beställ1 : Locator
    readonly Long_range_Dual1 : Locator
    readonly Exteriör1 : Locator
    //readonly Uppgraderingar1 : Locator
    readonly Interiör1 : Locator
    readonly Fälgar1 : Locator
    readonly submitButton : Locator

    constructor(page: Page){
       this.page = page
       this.Designa_och_beställ1 = page.locator(configLocators.Designa_och_beställ).first()
       this.Long_range_Dual1 = page.locator(configLocators.Long_range_Dual)
       this.Exteriör1 = page.locator(configLocators.Exteriör)
       //this.Uppgraderingar1 = page.locator(Polestar_Models.Uppgraderingar)
       this.Interiör1 = page.locator(configLocators.Interiör)
       this.Fälgar1 = page.locator(configLocators.Fälgar)
       this.submitButton = page.getByRole('button', { name: 'Fortsätt' })
    }

    async modifyPolestar2(){

        //Designa_och_beställ
        await this.page.waitForSelector(configLocators.Designa_och_beställ)
        await this.Designa_och_beställ1.click();

        //Long_range_Dual
        await this.page.waitForSelector(configLocators.Long_range_Dual)
        await this.Long_range_Dual1.click();

        //Exteriör
        await this.page.waitForSelector(configLocators.Exteriör)
        await this.Exteriör1.click();

        //Uppgraderingar
        // await this.page.waitForSelector(Polestar_Models.Uppgraderingar)
        // await this.page.waitForTimeout(3000)
        // await this.Uppgraderingar1.check();

        //Interiör
        await this.page.waitForSelector(configLocators.Interiör)
        await this.Interiör1.click();

        //Fälgar
        await this.page.waitForSelector(configLocators.Fälgar)
        await this.Fälgar1.click();
    }

    async submit(){
        await this.page.waitForTimeout(2000)
        await this.submitButton.click();
    }
}