import {test,expect} from '@playwright/test';
test('Multiple months data',async({page})=>{
    const D:string='16';
    const M:string='August';
    const Y:string='2026';
    await page.goto('https://jqueryui.com/datepicker/');
    await page.pause();
    const frame= page.frameLocator('.demo-frame');
    const datetext=frame.locator('input#datepicker')
    const prev=frame.getByTitle('Prev');
    const next=frame.getByTitle('Next');
    const month=frame.locator('span.ui-datepicker-month');
    const year=frame.locator('span.ui-datepicker-year');
    const datevalue=frame.locator(`//a[text()=${D}]`);
    //await datetext.fill('11/03/2026');
    await datetext.click();
    let flag=true;
    while(flag){
            const monthtext=await month.innerText();
            const yeartext=await year.innerText();
            if(M == monthtext && Y == yeartext ){
                 await datevalue.click();
                 flag=false;
            }
            else{
                await next.click();
            }
    }
    await page.close();
});


test.skip('practice', async({page})=>{
    let D:String='23'
    let M:String='August'
    let Y:String='2026'
await page.goto('https://jqueryui.com/datepicker/');
await page.pause();

const frame=page.frameLocator('iframe.demo-frame');
const datatext=frame.locator('input#datepicker')
const month=frame.locator('span.ui-datepicker-month');
const year=frame.locator('span.ui-datepicker-year');
const day=frame.locator(`//a[text()=${D}]`);
const Prev=frame.locator('a.ui-datepicker-prev');
const next=frame.locator('a.ui-datepicker-next');
await datatext.click();
let flag=true;
while(flag){
const monthText=await month.innerText();
const yearText=await year.innerText();

if(monthText==M && yearText==Y){
await day.click();
flag=false;
    }
    else{
await next.click();
    }

    
}
await page.close();
});

test('practice01', async({page})=>{
    let D:String='23'
    let M:String='August'
    let Y:String='2025'
await page.goto('https://jqueryui.com/datepicker/');
await page.pause();

const frame=page.frameLocator('iframe.demo-frame');
const datatext=frame.locator('input#datepicker')
const month=frame.locator('span.ui-datepicker-month');
const year=frame.locator('span.ui-datepicker-year');
const day=frame.locator(`//a[text()=${D}]`);
const Prev=frame.locator('a.ui-datepicker-prev');
const next=frame.locator('a.ui-datepicker-next');
await datatext.click();
let flag=true;
while(flag){
const monthText=await month.innerText();
const yearText=await year.innerText();
if(await year.innerText()===Y && await month.innerText()===M ){
    //if(await month.innerText()===M && await month.innerText()===M){
    await day.click();
    flag=false;
    }

else{
await Prev.click();
}}

/*if(monthText==M && yearText==Y){
await day.click();
flag=false;
    }
    else{
await next.click();
    }
*/
 

await page.close();
});