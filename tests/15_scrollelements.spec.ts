import {test} from '@playwright/test';
test.skip('Handling playwright scroll elements',async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');
    await page.pause();
    const uploadsingleFiles=page.getByText('Upload Single File');
    uploadsingleFiles.scrollIntoViewIfNeeded();
    console.log(uploadsingleFiles);
    
})

test('Handling manual scroll elements',async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');
    await page.pause();
    await page.mouse.wheel(0,400);
    await page.mouse.wheel(0,-400);

})