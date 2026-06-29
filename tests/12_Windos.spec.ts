import {expect, type Locator, test} from '@playwright/test';
test.skip('Handling Open Single Window',async({page,context})=>{
 await page.goto('https://demo.automationtesting.in/Windows.html');
 await page.pause();
 await page.waitForLoadState('domcontentloaded');
const Mainpage= page.getByText('Open New Tabbed Windows ');
//const clickbutton=page.getByText('click');
const clickbutton=page.getByRole('button',{name:'click'});

await Mainpage.click();
const[newpage]=await Promise.all(
    [
         context.waitForEvent('page'),  clickbutton.click()
    ]
)
const childpage:string=await page.title();
console.log(childpage);

await page.bringToFront();
await expect.soft(clickbutton).toBeVisible();
await page.close();

await newpage.bringToFront();
if(childpage=='Selenium'){
  console.log('Open single window::',childpage);
  await newpage.close();
}
})


test.skip('Handling Open New Seperate Windows',async({page,context})=>{
 await page.goto('https://demo.automationtesting.in/Windows.html');
 await page.pause();
 await page.waitForLoadState('domcontentloaded');
const Mainpage= page.getByText('Open New Seperate Windows');
//const clickbutton=page.getByText('click');
const clickbutton=page.getByRole('button',{name:'click'});

await Mainpage.click();
const[newpage]=await Promise.all(
    [
         context.waitForEvent('page'),  clickbutton.click()
    ]
)
const childpage:string=await page.title();
console.log(childpage);

await page.bringToFront();
await expect.soft(clickbutton).toBeVisible();
await page.close();

await newpage.bringToFront();
if(childpage=='Selenium'){
  console.log('Open single window::',childpage);
  await newpage.close();
}
})




test('Handling Open Seperate Multiple Windows',async({page,context})=>{
 await page.goto('https://demo.automationtesting.in/Windows.html');
 await page.pause();
 await page.waitForLoadState('domcontentloaded');
const Mainpage:Locator= page.getByText('Open Seperate Multiple Windows');
//const clickbutton=page.getByText('click');
const clickbutton:Locator=page.getByRole('button',{name:'click'});

await Mainpage.click();
const[newpage]=await Promise.all(
    [
         context.waitForEvent('page'),  clickbutton.click()
    ]
)
await page.waitForTimeout(3000);
const pages= context.pages();

await page.bringToFront();
await expect.soft(clickbutton).toBeVisible();

await pages[1].bringToFront();
if(await pages[1].title()=='Index'){
    await expect.soft(pages[1].locator('img#logo')).toBeVisible();
    await pages[1].close();
}

await pages[2].bringToFront();
if(await pages[2].title()=='Selenium'){
    await expect.soft(pages[2].locator('svg#Layer_1')).toBeVisible();
    await pages[2].close();
}
await page.bringToFront();
await page.close();
})