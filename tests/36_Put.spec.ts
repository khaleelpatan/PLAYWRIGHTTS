import {expect, test} from '@playwright/test';

test('Put request',async({request})=>{
const putresponse=await request.put('https://api.restful-api.dev/objects/ff8081819d82fab6019f03dd52ff6507',  //here id we need to provide
{
   headers:{
    'Content-Type':'application/json'
}, 
    data:
    {
    "name": "Apple MacBook Pro 16 update",
    "data": {
    "year": 2011,
    "price": 1849.99,
    "CPU model": "Intel Core i8",
    "Hard disk size": "2 TB"
  }
    }
    
   });
   
   expect.soft(putresponse.status()).toBe(200);
   expect.soft(putresponse.statusText()).toBe('OK');
   const Jsonresponse:any=await  putresponse.json();
  console.log(Jsonresponse.id);
   console.log(Jsonresponse.name);
   console.log(Jsonresponse.data.year);
   //console.log(Jsonresponse.createdAt);
   console.log(Jsonresponse.data.price);
   console.log(Jsonresponse.updateAt);
   

   const cpumodel='CPU model';
   const harddisksize='Hard disk size';
   console.log(Jsonresponse.data[cpumodel]);
   console.log(Jsonresponse.data[harddisksize]);

});





