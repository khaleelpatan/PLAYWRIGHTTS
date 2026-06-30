
import {test,Page} from '@playwright/test';
import pageObjects from './PageObjects';

export default class placeorder extends pageObjects{

constructor(page:Page){
    super(page);
}

async dashboardTocart(){
 await this.dashboardAddtocart.click();
}

async CheckoutToPage(){
 await this.checkout.click();
}

async selectTocountry(){
 await this.selectcountry.click();
}

async coutryTodropdown(country:string){
 await this.coutrydropdown.click();
}

async placeToorder(){
 await this.placeorder.click();

 }
/* here no proper locators so commeneting , when one table data 
then which order id to verify and view  on it then we will go with this type code"
 async verifyorder(){
    for (const row of this.rows.all()) {
        if(await row.locator('//th').innerText()==Orderid)
            await row.getbyrole('button',{name:'view'}).click();
            break;
    }
 }*/

}