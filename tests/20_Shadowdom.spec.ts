import {expect, test} from '@playwright/test';
test('Handling Keyboards', async({page,context})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');
    await page.pause();
    //shadowdom will not support xpath locator
    //shadowdom root always open , not in closed status

    const shadowdom=page.locator('div#shadow_host');
    await shadowdom.hover();
    /*const Blog=page.locator('//a[text()="Blog"]');
    const text=page.locator('//input[@type="text"]');
    const checkbox=page.locator('//input[@type="checkbox"]');
    const file=page.locator('//input[@type="file"]');*/
    //nothing much about it above all code is relative Xpath 

});