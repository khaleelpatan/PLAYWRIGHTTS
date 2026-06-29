import {test,expect} from '@playwright/test';
test.skip('Register',async({page})=>{
  await page.goto('https://demowebshop.tricentis.com/');
  await page.waitForLoadState('domcontentloaded');
  await page.pause();
  //Register --class1
  //Login-----class2
  //Shopping cart--class3
  //Wishlist---class3
  //Orders----class4

  const Registerbtn=page.getByRole('link',{name:'Register'});
  const GenMale=page.locator('#gender-male');
  const GenFemale=page.locator('#gender-female');
  const firstname=page.locator('#FirstName');
  const lastname=page.locator('#LastName');
  const Email=page.locator('#Email');
  const password=page.locator('#Password');
  const Confirmpassword=page.locator('#ConfirmPassword');
  const clickregister=page.getByRole('button',{name:'Register'});
await Registerbtn.click();
await GenMale.check();
await firstname.fill('khaleel');
await lastname.fill('patan');
await Email.fill('khaleelpatan@gmail.com');
await password.fill('Khaleel@143');
await Confirmpassword.fill('Khaleel@143');
await clickregister.click();
//await page.close();

})

test('Login',async({page})=>{
  await page.goto('https://demowebshop.tricentis.com/');
  await page.waitForLoadState('domcontentloaded');
  await page.pause();

  const Login=page.getByRole('link',{name:'Log in'});
  const Email=page.locator('#Email');
  const password=page.locator('#Password')
  const loginbtn=page.getByRole('button',{name:'Log in'});
  const VerifyEmail=page.locator('div div div.header-links ul li a.account');

  await Login.click();
  await Email.fill('khaleelpatan@gmail.com');
  await password.fill('Khaleel@143');
  await loginbtn.click();
  await page.pause();
  //await expect.soft(VerifyEmail).toContainText('khaleelpatan@gmail.com');
    if(await VerifyEmail.innerText()=='Email'){
         console.log('success');
         
    }
    else{
      console.log('failed');
      
    }
  
 await page.close();



})