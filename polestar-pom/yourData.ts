import { Locator, Page } from "@playwright/test"
import { Polestar_Models } from "../tests/configLocators"
import { Polestar } from "../tests/configData"

export class yourData{

    readonly page: Page
    readonly firstname : Locator
    readonly lastname : Locator
    readonly email : Locator
    readonly pincode : Locator
    readonly dropDownCarsYouAreInterestedIn : Locator
    readonly selectOption : Locator
    readonly checkbox : Locator
    readonly sent : Locator

    constructor(page: Page){
       this.page = page
       this.firstname = page.locator(Polestar_Models.firstname)
       this.lastname = page.locator(Polestar_Models.lastname)
       this.email = page.locator(Polestar_Models.email)
       this.pincode = page.locator(Polestar_Models.pincode)
       this.dropDownCarsYouAreInterestedIn = page.getByTestId('models').locator('label').nth(1)
       this.selectOption = page.getByRole('option', { name: 'Polestar 2' })
       this.checkbox = page.locator(Polestar_Models.checkbox)
       this.sent = page.locator(Polestar_Models.sent)
    }   

    async FillYourDataForm(){

        await this.page.waitForTimeout(2000)

        await this.firstname.waitFor({ state: 'visible' }); // Wait for visibility
        await this.firstname.fill(Polestar.firstname);

        //await this.page.waitForSelector(Polestar_Models.firstname)
        //await this.firstname.fill(Polestar.firstname);

        await this.page.waitForTimeout(2000)

        await this.page.waitForSelector(Polestar_Models.lastname)
        await this.lastname.fill(Polestar.lastname);

        await this.page.waitForTimeout(2000)

        await this.page.waitForSelector(Polestar_Models.email)
        await this.email.fill(Polestar.email);

        await this.page.waitForTimeout(2000)

        await this.page.waitForSelector(Polestar_Models.pincode)
        await this.pincode.fill(Polestar.pincode);

        await this.page.waitForTimeout(2000)

        await this.page.waitForSelector(Polestar_Models.dropDownCarsYouAreInterestedIn)
        await this.dropDownCarsYouAreInterestedIn.click();  

        await this.page.waitForTimeout(2000)

        await this.page.waitForSelector(Polestar_Models.dropDownCarsYouAreInterestedIn)
        await this.selectOption.click()

        await this.page.waitForTimeout(2000)

        await this.page.waitForSelector(Polestar_Models.dropDownCarsYouAreInterestedIn)
        await this.page.locator('.css-5y62p8').click();

        await this.page.waitForTimeout(2000)

        await this.page.waitForSelector(Polestar_Models.checkbox)
        await this.checkbox.check();      
    }

    async submitForm(){
        await this.page.waitForSelector(Polestar_Models.sent)
        await this.sent.click();
    }
}
