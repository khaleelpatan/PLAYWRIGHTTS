import {test,expect} from '@playwright/test';
test('Mulitple Selection',async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');
    await page.pause();
    const A =page.getByRole('listbox',{name:'colors'})
    await A.selectOption(['Red','Blue']);
   /// console.log(A);
    
})