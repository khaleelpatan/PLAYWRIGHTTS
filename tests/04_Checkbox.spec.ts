import {test,expect} from '@playwright/test';
test('test04',async({page})=>{
   await page.goto('https://testautomationpractice.blogspot.com/');
   await page.pause();
   const sunday=page.getByRole('checkbox',{name:'Sunday'});
   await sunday.scrollIntoViewIfNeeded();
   await sunday.check();
   await expect.soft(sunday).toBeChecked();
   const saturday=page.getByRole('checkbox',{name:'Saturday'});
   await saturday.check();
   await expect.soft(saturday).toBeChecked();
   await page.close();
});