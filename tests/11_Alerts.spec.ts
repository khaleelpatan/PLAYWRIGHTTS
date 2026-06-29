import {test,expect} from '@playwright/test';

test('Simple Alert',async({page})=>{
    await page.goto('https://the-internet.herokuapp.com/javascript_alerts');
    await page.pause();
    const simplealert= page.getByText('Click for JS Alert');
    const result=page.locator('p#result');
    page.on('dialog',async(dialog)=>{
   const messg=dialog.message();
    console.log(messg);
    expect.soft(messg).toBe('I am a Simple Alert');
    const type=dialog.type();
   console.log(type);
    expect.soft(type).toBe('alert');
    await dialog.accept();
    
    });
    await simplealert.click();
  console.log(await result.innerText());
    await page.close();
});


test.skip('prompt Alerts',async({page})=>{
    await page.goto('https://the-internet.herokuapp.com/javascript_alerts');
    await page.pause();
    const promptAlert= page.getByText('Click for JS Alert');
    const result=page.locator('p#result');
    page.on('dialog',async(dialog)=>{
   const messg=dialog.message();
    console.log(messg);
    expect.soft(messg).toBe('I am a Prompt Alert');
    const type=dialog.type();
   console.log(type);
    expect.soft(type).toBe('Prompt');
   //await dilog.accept();
     await dialog.accept('Playwright');
    //await dialog.dismiss();
    
    });
    await promptAlert.click();
  console.log(await result.innerText());
    await page.close();
});

test.skip('Confirm Alert',async({page})=>{
    await page.goto('https://the-internet.herokuapp.com/javascript_alerts');
    await page.pause();
    const confirmAlert=page.getByText('click for Confirm Alert');
    const result=page.locator('p#result');
    page.on('dialog',async(dialog)=>{
   const messg=dialog.message();
    console.log(messg);
    expect.soft(messg).toBe('I am a Confirm Alert');
    const type=dialog.type();
   console.log(type);
    expect.soft(type).toBe('Confirm');
    await dialog.accept();
    await dialog.dismiss();
    
    });
    await confirmAlert.click();
  console.log(await result.innerText());
    await page.close();
});