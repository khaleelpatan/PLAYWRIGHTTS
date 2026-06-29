import {test,expect} from "@playwright/test";

test('Test01', async({page})=> {
await page.goto('https://testautomationpractice.blogspot.com/');
await page.pause();
const text=page.getByRole('textbox',{name:'Enter Name'});
const data =  await text.fill('Chandra');
console.log(data);
await text.clear();
console.log(data);
});

test('Test02', async({page})=> {
await page.goto('https://testautomationpractice.blogspot.com/');
await page.pause();
const text=page.getByRole('textbox',{name:'Enter Name'});
const data =  await text.fill('Chandra');
console.log(data);
await text.clear();
console.log(data);
});