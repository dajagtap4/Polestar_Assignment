import { Locator, Page } from "@playwright/test"

import { Polestar_Models } from "../tests/configLocators"

export class polestar2{

    readonly page: Page
    readonly Designa_och_beställ1 : Locator
    readonly Long_range_Dual1 : Locator
    readonly Exteriör1 : Locator
    readonly Uppgraderingar1 : Locator
    readonly Interiör1 : Locator
    readonly Fälgar1 : Locator
    readonly submitButton : Locator

    constructor(page: Page){
       this.page = page
       this.Designa_och_beställ1 = page.locator(Polestar_Models.Designa_och_beställ).first()
       this.Long_range_Dual1 = page.locator(Polestar_Models.Long_range_Dual)
       this.Exteriör1 = page.locator(Polestar_Models.Exteriör)
       this.Uppgraderingar1 = page.locator(Polestar_Models.Uppgraderingar)
       this.Interiör1 = page.locator(Polestar_Models.Interiör)
       this.Fälgar1 = page.locator(Polestar_Models.Fälgar)
       this.submitButton = page.getByRole('button', { name: 'Fortsätt' })
    }

    async modifyPolestar2(){

        //Designa_och_beställ
        await this.page.waitForSelector(Polestar_Models.Designa_och_beställ)
        await this.Designa_och_beställ1.click();

        //Long_range_Dual
        await this.page.waitForSelector(Polestar_Models.Long_range_Dual)
        await this.Long_range_Dual1.click();

        //Exteriör
        await this.page.waitForSelector(Polestar_Models.Exteriör)
        await this.Exteriör1.click();

        //Uppgraderingar
        await this.page.waitForSelector(Polestar_Models.Uppgraderingar)
        await this.Uppgraderingar1.check();

        //Interiör
        await this.page.waitForSelector(Polestar_Models.Interiör)
        await this.Interiör1.click();

        //Fälgar
        await this.page.waitForSelector(Polestar_Models.Fälgar)
        await this.Fälgar1.click();
    }

    async submit(){
        await this.submitButton.click();
    }
}