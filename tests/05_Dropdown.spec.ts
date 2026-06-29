import {test,expect} from '@playwright/test';

test('test05',async({page})=>{
 await page.goto('https://testautomationpractice.blogspot.com/');
 await page.pause();
 const dropdown=page.locator('select#country');
 await dropdown.selectOption('usa');
 console.log(await dropdown.inputValue());
 await dropdown.selectOption({value:'canada'});
 console.log(await dropdown.inputValue());
 await dropdown.selectOption({index:2});
 console.log(await dropdown.inputValue());
 console.log(await dropdown.innerText());
 console.log(await dropdown.allInnerTexts());
 console.log(await dropdown.textContent());
 console.log(await dropdown.allTextContents());
 const options =page.locator('select#country Option');
 console.log(await options.count());
for (const option of await options.all()) {
    console.log(await option.innerText());

}
await page.close();

});

