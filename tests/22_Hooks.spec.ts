import {test,chromium,Browser,BrowserContext,Page} from '@playwright/test';
let browser: Browser;
let context: BrowserContext;
let page: Page;

test('test01',async({page})=>{
console.log('Test01');
});

test('test02',async({page})=>{
console.log('Test02');
});

test.beforeAll('beforeAll',async()=>{
    console.log('beforeAll');
     browser= await chromium.launch();
});

test.afterAll('afterAll',async ()=>{
console.log('afterAll');
await browser.close();
});

test.beforeEach('beforeEach',async({page})=>{
console.log('beforeEach');
context=await browser.newContext();
page=await context.newPage();
await page.goto('https://playwright.dev/');
});

test.afterEach('afterEach',async ({page})=>{
    console.log('afterEach');
    await page.close();
    await context.close();
    });
