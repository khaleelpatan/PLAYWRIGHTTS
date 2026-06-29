import {Page,test,expect} from '@playwright/test';
import fs from 'fs';
import ReadFiles from '../utils/ReadFiles';

//const jsonFilePath=fs.readFileSync('./testdata/PlaceOrder.json','utf-8')
const readFiles=new ReadFiles();
const logindata:any= readFiles.readJsonFile('./testdata/PlaceOrder.json');

for (const {prodName,country,email,password,url} of logindata) {
    
test.describe(`JSON Multiple test data ${prodName}`,()=>{
test(`Json data handling ${prodName}`,async({page})=>{
await page.goto(url);
await page.waitForLoadState('domcontentloaded');
await page.pause();

const EmailFiled=page.locator('input#userEmail');
const passwordField=page.locator('input#userPassword');
const loginField=page.locator('#login');
const signout=page.getByText(' Sign Out ');
const products=page.locator('div.card-body');
const dashboardAddtocart=page.locator('button[routerlink*="dashboard/cart"]');
const checkout=page.getByText('Checkout');
const selectcountry=page.getByPlaceholder('Select Country');
const coutrydropdown=page.locator('//button[@class="ta-item list-group-item ng-star-inserted"]')
const placeorder=page.getByText('Place Order ');

await EmailFiled.fill(email);
await passwordField.fill(password);
await loginField.click();

for (const prod of await products.all()) {
   
const productName = await prod.locator('b').innerText();
    
if( productName == prodName ){
  await prod.getByText('Add To Cart').click();
    }
}
await dashboardAddtocart.click();
await checkout.click();
await selectcountry.pressSequentially('india');
await coutrydropdown.last().click();
await placeorder.click();

await expect.soft(signout).toBeVisible();
await signout.click();
await page.close();
})

})


}