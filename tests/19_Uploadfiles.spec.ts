import {expect, test} from '@playwright/test';
test('Handling Keyboards', async({page,context})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');
    await page.pause();
    
    const singleFile=page.locator('#singleFileInput');
    const Uploadsinglefilebtn=page.getByText('Upload Single File');
    const status=page.locator('p#singleFileStatus')

   await singleFile.scrollIntoViewIfNeeded();
    await singleFile.setInputFiles('./screenshot/abc.jpg');
     await Uploadsinglefilebtn.click();
     page.waitForTimeout(3000);
     console.log(await status.innerText());
     await expect.soft(status).toContainText("abc.jpg");
    

});