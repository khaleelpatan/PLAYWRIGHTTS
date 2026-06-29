import {Page,test,expect} from '@playwright/test';
//import fs from 'fs';
import ReadFiles from '../utils/ReadFiles';
import TestConfig from '../testdata/TestConfig';

//const CSVFilePath:any=fs.readFileSync("./testdata/PlaceOrder.csv","utf-8");
const readFiles=new ReadFiles();
const logindata:any= readFiles.readCSVFile('./testdata/PlaceOrder.csv');
const testconfig =new TestConfig();
for (const {prodName,country} of logindata) {
    
test.describe(`CSV test data ${prodName}`,()=>{
test(`CSV data handling ${prodName}`,async({page})=>{
await page.goto(testconfig.url);
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

await EmailFiled.fill(testconfig.email);
await passwordField.fill(testconfig.password);
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