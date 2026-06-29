import {test,expect} from '@playwright/test';
test('test03', async({page})=>{
  await page.goto('https://testautomationpractice.blogspot.com/');
    await page.pause();
    const radiobtn=page.getByRole('radio',{name:'Male',exact:true});
    await radiobtn.check();
    await expect.soft(radiobtn).toBeChecked();
    const radiobtnf=page.getByRole('radio',{name:'Female',exact:true});
    await expect.soft(radiobtnf).not.toBeChecked();
     await page.close();
}
);