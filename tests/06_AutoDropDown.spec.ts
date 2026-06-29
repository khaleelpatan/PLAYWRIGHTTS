import {test,expect} from '@playwright/test';
test('test05.5',async({page})=>{
   await page.goto('https://www.google.com/');
   await page.pause();
  //let A=page.getByRole('combobox',{name:'Search',exact:true});
   const A=await page.locator('textarea#APjFqb.gLFyf').fill('playwright');
   const B=await page.locator('li.sbct').all();
   const c=await page.locator('div.wM6W7d').nth(3).click();
   await page.close();
    
   });

   // when auto suggested dropdown available above one is random below one is from all how to get it
    //const elements=await headermenu.all();
   
    // for (const element of elements) {
        
    //     if(await element.innerText()=='BOOKS'){
    //          await headermenu.click();
    //         // break;
    //     }
    //     else{
    //         console.log('No Books details');
            
    //     }
    // }

