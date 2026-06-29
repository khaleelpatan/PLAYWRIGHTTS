import {test} from '@playwright/test';
test('test02', async ({page})=>{
await page.goto('https://testautomationpractice.blogspot.com/');
await page.pause();
const clickfun=page.locator('button.submit-btn');
await clickfun.scrollIntoViewIfNeeded();
await clickfun.click();
const data2= page.locator('div#result');
console.log(await data2.innerText());
await page.close();

});