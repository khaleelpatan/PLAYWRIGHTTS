import {test} from '@playwright/test';
test.skip('Handling Mouse hover Action', async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');
    await page.pause();
   const Bloglink= page.getByText('Blog');
   Bloglink.nth(0).hover();
   const uploadsingleFile=page.getByText('Upload Single File');
   uploadsingleFile.hover();
})

test.skip('Handling right click', async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');
    await page.pause();
    const Bloglink= page.getByText('Blog');
    await Bloglink.first().click({button: 'right'});
    await Bloglink.first().click({button: 'left'});
    await Bloglink.first().click({button: 'middle'});
})

test.skip('Handling double click',async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');
    await page.pause();
    const dblclick=page.getByText('Scrolling DropDown');
    await dblclick.dblclick({position:{x:20,y:0}});

})

test('Handling drag and drop', async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');
    await page.pause();
    const source=page.locator('div#draggable');
    const target=page.locator('div#droppable');
    source.dragTo(target);
})