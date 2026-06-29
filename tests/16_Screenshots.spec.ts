import {expect, test} from '@playwright/test';
test.skip('Handling specific element screenshot',async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');
    await page.pause();
    const uploadsingleFiles=page.getByText('Upload Single File');
    await uploadsingleFiles.screenshot({path:'./screenshot/abc.jpg'});

})

test.skip('Handling visble area of the page',async({page})=>{

await page.goto('https://testautomationpractice.blogspot.com/');
await page.pause();
await page.screenshot({path:'./screenshot/bcd.jpg'});

})

test.skip('Handling full page',async({page})=>{

await page.goto('https://testautomationpractice.blogspot.com/');
await page.pause();
await page.screenshot({path:'./screenshot/abcde.jpg',fullPage:true});

})

test('Handling screenshot comparison of page',async({page})=>{

await page.goto('https://testautomationpractice.blogspot.com/');
await page.pause();
expect(await page.screenshot({path:'./screenshot/abcde.jpg',fullPage:true}))
.toMatchSnapshot({path:'./screenshot/abcde.jpg'});


})