import {test} from '@playwright/test';
test.skip('Skip',async ({})=>{
console.log('Skip');
});

test.only('only',async({})=>{
console.log('only');
});

test.fixme('fixme',async({})=>{
console.log('fixme');
});

test.fail('fail',async({})=>{
console.log('fail');
});

test('slow',async({})=>{
test.slow();
test.setTimeout(3000);
test.step('Innertext',async({})=>{
})
});

test('basic test', async ({ page }, testInfo) => {
  await page.goto('https://playwright.dev');
  const screenshot = await page.screenshot();
  await testInfo.attach('screenshot', 
{ body: screenshot, contentType: 'image/png' });
});