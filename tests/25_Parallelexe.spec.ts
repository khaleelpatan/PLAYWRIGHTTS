import {test} from '@playwright/test';
test('Skip',async ({})=>{
console.log('Skip');
});

test('only',async({})=>{
console.log('only');
});

test('fixme',async({})=>{
console.log('fixme');
});

test('fail',async({})=>{
console.log('fail');
});

/* its a based on workers will work by default=4 workers,
 when worker=1 its disabled no parallel execution
 worker will execute on test level also using
 test.describe.configure("{mode:parallel}") and different modes 
 default, serial and undefined 
worker will work on browser specific as well
*/