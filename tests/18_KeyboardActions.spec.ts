import {test} from '@playwright/test';
test('Handling Keyboards', async({page,context})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');
    await page.pause();

   const Name= page.locator('#name');
   const Email =page.locator('#email');
   const PPL=page.getByRole('link',{name:'PlaywrightPractice'})
   await Name.pressSequentially('Khaleel');
   await Name.press('Control+a');
   await Name.press('Control+c')
   await Email.press('Control+v');
   await Email.hover();
const [newpage]=await Promise.all(
    [
        context.waitForEvent('page'),
        PPL.press('Control+Enter')

    ]);
  
   await page.waitForTimeout(3000);
   const pages= context.pages();
   await page.close();
});