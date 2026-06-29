import {expect, test} from '@playwright/test';

test('Delete request',async({request})=>{

const deleteresponse=await request.delete('https://api.restful-api.dev/objects/ff8081819d82fab6019f03f6e19e6541'); //here id we need to provide
expect.soft(deleteresponse.status()).toBe(200);
expect.soft(deleteresponse.statusText()).toBe('OK');

const responsjson:any=await deleteresponse.json();
//console.log(responsjson.id);
expect.soft(responsjson.message).toBe(`Object with id = ff8081819d82fab6019f03f6e19e6541 has been deleted.`);
console.log(responsjson.message);

});
    

   
  






