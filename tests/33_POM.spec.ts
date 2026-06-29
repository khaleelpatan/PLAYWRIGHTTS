import {Page,test,expect} from '@playwright/test';
import ReadFiles from '../utils/ReadFiles';
import PageObjectManager from '../Pages/PageObjectManager';

//const jsonFilePath=fs.readFileSync('./testdata/PlaceOrder.json','utf-8')
const readFiles=new ReadFiles();
const logindata:any= readFiles.readJsonFile('./testdata/PlaceOrder.json');
let poManager: PageObjectManager;
for (const {prodName,country,email,password,url} of logindata) {
    
test.describe(`JSON Multiple test data ${prodName}`,()=>{
    test.beforeEach(async ({page})=>{
        poManager=new PageObjectManager(page);
        await poManager.loginpage.goto(poManager.testconfig.url)
    })
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


await poManager.loginpage.EmailField.fill(email);
await poManager.loginpage.passwordField.fill(password);
await poManager.loginpage.loginField.click();

for (const prod of await poManager.CartPage.products.all()) {
   
const productName = await prod.locator('b').innerText();
    
if( productName == prodName ){
  await prod.getByText('Add To Cart').click();
    }
}


 
await poManager.CartPage.dashboardAddtocart.click();
await poManager.CartPage.checkout.click();
await poManager.CartPage.selectcountry.pressSequentially('india');
await poManager.CartPage.coutrydropdown.last().click();
await poManager.placeorder.placeorder.click();

await expect.soft(signout).toBeVisible();
await poManager.loginpage.signout.click();
await page.close();
})

})


}