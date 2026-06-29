import {expect, test} from '@playwright/test';

test('Post request',async({request})=>{
const postresponse=await request.post('https://api.restful-api.dev/objects',
{
   headers:{
    'Content-Type':'application/json'
}, 
    data:
    {
    "name": "Apple MacBook Pro 16",
    "data": {
    "year": 2012,
    "price": 1849.99,
    "CPU model": "Intel Core i9",
    "Hard disk size": "1 TB"
  }
    }
    
   });
   
   expect.soft(postresponse.status()).toBe(200);
   expect.soft(postresponse.statusText()).toBe('OK');
   const Jsonresponse:any=await  postresponse.json();
  console.log(Jsonresponse.id);
   console.log(Jsonresponse.name);
   console.log(Jsonresponse.data.year);
   console.log(Jsonresponse.createdAt);
   console.log(Jsonresponse.data.price);

   const cpumodel='CPU model';
   const harddisksize='Hard disk size';
   console.log(Jsonresponse.data[cpumodel]);
   console.log(Jsonresponse.data[harddisksize]);

});





