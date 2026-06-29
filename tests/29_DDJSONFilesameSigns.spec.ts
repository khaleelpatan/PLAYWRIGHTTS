import {Page,test,expect} from '@playwright/test';
import fs from 'fs';
import ReadFiles from '../utils/ReadFiles';
//import PageObjectManager from '../Pages/PageObjectsManager';
import TestConfig from '../testdata/TestConfig';


//const jsonFilePath:any=fs.readFileSync("./testdata/PlaceOrder1.json","utf-8");
const readFiles=new ReadFiles();
const logindata:any= readFiles.readJsonFile('./testdata/PlaceOrder1.json');

const testconfig =new TestConfig();

//let  poManager : PageObjectManager;

for (const {prodName,country} of logindata) {
    
test.describe(`JSON with Single test data ${prodName}`,()=>{

/*test.beforeEach(async function({page}){
          poManager=new PageObjectManager(page);
         await poManager.loginpage.goto('poManager.loginpage.url');

  });*/


test(`Json data handling ${prodName}`,async({page})=>{
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

//await expect.soft(signout).toBeVisible();
//await signout.click();
//await page.close();

/*test.afterEach(async function(){
  await poManager.loginpage.Signout()
});*/



});

});
}