import {expect, test} from '@playwright/test';

test('Put request',async({request})=>{
const patchresponse=await request.patch('https://api.restful-api.dev/objects/ff8081819d82fab6019f03dd52ff6507', //here id we need to provide
{
   headers:{
    'Content-Type':'application/json'
}, 
    data:
    {
    "name": "Apple MacBook Pro 16 updated version",
    
  }
    }
    
   );
   
   expect.soft(patchresponse.status()).toBe(200);
   expect.soft(patchresponse.statusText()).toBe('OK');

   const Jsonresponse:any=await  patchresponse.json();
   
   console.log(Jsonresponse.id);
   console.log(Jsonresponse.name);
   //console.log(Jsonresponse.updateAt);
  
});





