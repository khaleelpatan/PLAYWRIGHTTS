import {test,expect} from '@playwright/test';
test('Handling01',async({page})=>
{
    await page.goto('https://testautomationpractice.blogspot.com/');
    await page.pause();
    const table= await page.locator('table#productTable').click();
    const rows=await page.locator('table#productTable tbody tr').all();
   const pages= await page.locator('ul#pagination li a').all();
     for (const page of pages) {
        await page.click();
     
    for (const row of rows) {
       const colums= row.locator('td')
      const text= await colums.nth(1).innerText();
      if(text=='Smartphone' || text=='Smartwatch' || text=='Television' || text=='Router' ||text=='VR Headset')
      {
         await colums.nth(3).locator('input').check();
      }
    }}
});

