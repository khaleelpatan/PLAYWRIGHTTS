import {test,Page,expect} from '@playwright/test';
import LoginPage from './LoginPage';
import CartPage from './CartPage';
import placeorder from './PlaceOrder';
import TestConfig from '../testdata/TestConfig';
import pageObjects from './PageObjects';


export default class PageObjectManager{

    readonly loginpage:LoginPage;
    readonly CartPage:CartPage;
    readonly placeorder:placeorder;
    readonly testconfig:TestConfig;

    constructor(page:Page){

        this.loginpage=new LoginPage(page);
        this.CartPage=new CartPage(page);
        this.placeorder=new placeorder(page);
        this.testconfig=new TestConfig();
    }
}