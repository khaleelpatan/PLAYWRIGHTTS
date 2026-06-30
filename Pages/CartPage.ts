import { Page } from "@playwright/test";
import pageObjects from "./PageObjects";

export default class CartPage extends pageObjects{

    constructor(Page:Page){
        super(Page);
    }

    async addProductTocart(productName:string){
        const products = await this.products.all();
   for (const prod  of products) {
    if(await prod.locator('b').innerText()==productName){
          await this.page.getByText('Add To Cart').click();
          break;
    }
   }

    }

  
}