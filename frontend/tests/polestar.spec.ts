import { test, expect } from '@playwright/test';

import { homePage } from '../polestar-pom/homePage';
import { polestar2 } from '../polestar-pom/polestar2';
import { discovery } from '../polestar-pom/discovery';
import { yourData } from '../polestar-pom/yourData';
import {instagram } from '../polestar-pom/instagram'

const jsonData = JSON.parse(JSON.stringify(require("../utils/configData.json")))

test.describe('Polestar Test Cases', () => {

    test.beforeEach(async ({ page }) => {
        await page.goto(jsonData.loginURL);
        await page.getByRole('button', { name: 'Accept all' }).click();
    });

    test('TC:001 - Verify user can modify design and order for Polish2/polestar2', async({page})=>{
       const home = new homePage(page)
       const modify = new polestar2(page)

       await home.selectpolestar()
       await modify.modifyPolestar2()
       await modify.submit()
    })

    test('TC:002 - Verify user can Book a test drive', async({page})=>{
      const home = new homePage(page)
      const dis = new discovery(page)
      const data = new yourData(page)

      await home.discoverOffers()
      await dis.BookTestDrive()
      await data.FillYourDataForm()
      await data.submitForm()
   })

   test('TC:003 - navigate to instagram page and verify title', async({page})=>{
      const home = new homePage(page)
      const ig = new instagram(page)

      await home.navigateToInstagram()
      await ig.getTitle(page)
   })

   test('TC:004 - verify title of homepage', async({page})=>{
      const home = new homePage(page)

      await home.verifyHomepageTitle(page)
      await home.printTitle(page)
   })
});
