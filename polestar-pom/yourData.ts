import { Locator, Page } from "@playwright/test"
const configLocators = JSON.parse(JSON.stringify(require("../tests/configLocators.json")))
const jsonData = JSON.parse(JSON.stringify(require("../tests/configData.json")))

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
       this.firstname = page.locator(configLocators.firstname)
       this.lastname = page.locator(configLocators.lastname)
       this.email = page.locator(configLocators.email)
       this.pincode = page.locator(configLocators.pincode)
       this.dropDownCarsYouAreInterestedIn = page.getByTestId('models').locator('label').nth(1)
       this.selectOption = page.getByRole('option', { name: 'Polestar 2' })
       this.checkbox = page.locator(configLocators.checkbox)
       this.sent = page.locator(configLocators.sent)
    }   

    async FillYourDataForm(){

        await this.page.waitForTimeout(2000)

        // await this.firstname.waitFor({ state: 'visible' }); // Wait for visibility
        // await this.firstname.fill(Polestar.firstname);

        await this.page.waitForSelector(configLocators.firstname)
        await this.firstname.fill(jsonData.firstname);

        //await this.page.waitForTimeout(2000)

        await this.page.waitForSelector(configLocators.lastname)
        await this.lastname.fill(jsonData.lastname);

        //await this.page.waitForTimeout(2000)

        await this.page.waitForSelector(configLocators.email)
        await this.email.fill(jsonData.email);

        //await this.page.waitForTimeout(2000)

        await this.page.waitForSelector(configLocators.pincode)
        await this.pincode.fill(jsonData.pincode);

        //await this.page.waitForTimeout(2000)

        await this.page.waitForSelector(configLocators.dropDownCarsYouAreInterestedIn)
        await this.dropDownCarsYouAreInterestedIn.click();  

        //await this.page.waitForTimeout(2000)

        await this.page.waitForSelector(configLocators.dropDownCarsYouAreInterestedIn)
        await this.selectOption.click()

        //await this.page.waitForTimeout(2000)

        await this.page.waitForSelector(configLocators.dropDownCarsYouAreInterestedIn)
        await this.page.locator('.css-5y62p8').click();

        //await this.page.waitForTimeout(2000)

        await this.page.waitForSelector(configLocators.checkbox)
        await this.checkbox.check();      
    }

    async submitForm(){
        await this.page.waitForSelector(configLocators.sent)
        await this.sent.click();
    }
}
