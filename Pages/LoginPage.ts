import { Page,expect } from "@playwright/test";
import pageObjects from "./PageObjects";

export default class Loginpage extends pageObjects{

  constructor(page:Page){
    super(page);
  }
  
async goto(url:string){
await this.page.goto(url);
await this.page.waitForLoadState('domcontentloaded');
}

async login(email:string, password:string){
  await this.EmailField.fill(email);
  await this.passwordField.fill(password);
  await this.loginField.click();
}

}

