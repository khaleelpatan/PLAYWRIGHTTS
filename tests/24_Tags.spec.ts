import {test} from  '@playwright/test';
test('test01',{tag:['@smoke','@sanity']} ,async({})=>{
console.log('test01');
});

test('test02',{tag:['@intergration','@sanity']} ,async({})=>{
console.log('test02');
});

test('test03',{tag:['@regression','@sanity']} ,async({})=>{
console.log('test03');
});

test('test04',{tag:['@regression','@sanity','@regression']} ,async({})=>{
console.log('test04');
});


/* npx playwright test --grep '@sanity' (here all spec files it will check)
npx playwright test 24_Tags.spec.ts --grep '@sanity' directly specific file
npx playwright test 24_Tags.spec.ts --grep-invert '@sanity'  to ignore and avoid 
npx playwright test '@sanity'|'@regression' which tag is more that is the output here
npx playwright test "(?=.*'@sanity')(?=.*'@regression') both the tags should match then returns the output*/