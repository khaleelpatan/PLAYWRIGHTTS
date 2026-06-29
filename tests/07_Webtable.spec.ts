import {test,expect} from '@playwright/test';
test('test06',async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');
    await page.pause();
    var A=await page.locator('table#taskTable').click();
    var B= page.locator('tr#headers');
    var rows=  page.locator('tbody#rows tr td');
  //  await rows.scrollIntoViewIfNeeded();
    var rcount= await rows.count();
    for(var i:number=0; i<rcount; i++)
        {
            console.log(i);
            //var currentrow=rows.nth(i);
    
    //console.log(currentrow);
    
            
        }
    
}
)