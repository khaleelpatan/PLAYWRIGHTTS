import {test} from '@playwright/test';
test.skip('Handling Frames',async({page})=>{
    await page.goto('https://demo.automationtesting.in/Frames.html');
    await page.pause();
    const Iframe=page.frameLocator('iframe#singleframe');
    const text=Iframe.locator('//input[@type="text"]').fill('playwright');
    await page.close();
})


test('Handling Nested Frames',async({page})=>{
   await page.goto('https://the-internet.herokuapp.com/frame_top');
   await page.pause();
   //const frame=page.frame('frame-top');
   //const frame=page.frame('{name:frame-top}');
   const frame=page.frame({url:'https://the-internet.herokuapp.com/frame_top'});
   const childframes=frame?.childFrames();
   //const middletext=await frames?.at(1)?.getByText('MIDDLE').innerText();
   const middletext=await childframes?.at(1)?.locator('div#content').innerText();
   console.log(middletext);
   await page.close();
})

