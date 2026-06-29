//using one test case with single test data to handle
import {Page,expect, test} from '@playwright/test';
const logindata=['splaywright@gmail.com','Gomasa@1988'];
test('single data',async({page})=>{
await page.goto('https://rahulshettyacademy.com/client/#/auth/login');
await page.waitForLoadState('domcontentloaded');
await page.pause();

const Email=page.locator('input#userEmail');
const password=page.locator('input#userPassword');
const login=page.locator('input#login');
const signout=page.getByText(' Sign Out ');

await Email.fill(logindata[0]);
await password.fill(logindata[1]);
await login.click();
await page.waitForTimeout(3000);
await expect.soft(signout).toBeVisible();
await signout.click();
await page.close();
});


