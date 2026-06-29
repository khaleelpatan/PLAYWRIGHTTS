import {expect, test} from '@playwright/test';

test('Getrequest',async({request})=>{

const getresponse=await request.get('https://api.restful-api.dev/objects/ff8081819d82fab6019f03dd52ff6507');//id here we can provide when single object 
expect.soft(getresponse.status()).toBe(200);
expect.soft(getresponse.statusText()).toBe('OK');

const responsjson:any=await getresponse.json();
console.log(responsjson.id);
console.log(responsjson.name);
console.log(responsjson.data.year);
console.log(responsjson.data.price);

 const cpumodel='CPU model';
   const harddisksize='Hard disk size';
   console.log(responsjson.data[cpumodel]);
   console.log(responsjson.data[harddisksize]);

/* when multiple objects we need to use array
console.log(responsjson[0].id);
console.log(responsjson[0].name);
console.log(responsjson[0].data.color);
console.log(responsjson[0].data.capacity);*/


});
    

   
  






