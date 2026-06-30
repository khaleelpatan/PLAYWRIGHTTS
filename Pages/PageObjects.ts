import {type Page,type Locator} from '@playwright/test';

export default class pageObjects{

    readonly page:Page;
    readonly EmailField:Locator;
    readonly passwordField:Locator
    readonly loginField:Locator;
    readonly products:Locator;
    readonly dashboardAddtocart:Locator;
    readonly checkout:Locator;
    readonly selectcountry:Locator;
    readonly coutrydropdown:Locator;
    readonly placeorder:Locator;
    readonly signout:Locator;

    constructor(page:Page){
    this.page=page;
this.EmailField=this.page.locator('input#userEmail');
this.passwordField=this.page.locator('input#userPassword');
this.loginField=this.page.locator('#login');
this.products=this.page.locator('div.card-body');
this.dashboardAddtocart=this.page.locator('button[routerlink*="dashboard/cart"]');
this.checkout=this.page.getByText('Checkout');
this.selectcountry=this.page.getByPlaceholder('Select Country');
this.coutrydropdown=this.page.locator('//button[@class="ta-item list-group-item ng-star-inserted"]')
this.placeorder=this.page.getByText('Place Order ');
this.signout=this.page.getByText(' Sign Out ');
    }

}