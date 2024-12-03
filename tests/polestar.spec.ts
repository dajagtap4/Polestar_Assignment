import { test, expect } from '@playwright/test';
import { homePage } from '../polestar-pom/homePage';
import {polestar2} from '../polestar-pom/polestar2';
import { Polestar } from './configData';
import { discover } from '../polestar-pom/discover';
import { yourData } from '../polestar-pom/yourData';

test.describe('Polestar Test Cases', () => {

    test.beforeEach(async ({ page }) => {
        await page.goto(Polestar.loginURL);
        await page.getByRole('button', { name: 'Accept all' }).click();
    });

    test('TC:001 - Verify user can modify design and order for Polish2/polestar2', async({page})=>{
       const home = new homePage(page)
       const modify = new polestar2(page)

       await home.selectpolestar()
       await modify.modifyPolestar2()
       await modify.submit()
    })

    test('TC002 - Verify user can Book a test drive', async({page})=>{
      const home = new homePage(page)
      const dis = new discover(page)
      const data = new yourData(page)

      await home.discoverOffers()
      await dis.BookTestDrive()
      await data.FillYourDataForm()
      await data.submitForm()
   })
});
