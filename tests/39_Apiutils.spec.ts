import {test,expect,APIResponse} from '@playwright/test';
import Apiutils from '../utils/Apiutils';

const url:string='https://api.restful-api.dev/objects';
let apiutils:Apiutils;
let JsonResponse:any;
let id:string;
const PostpayLoad={
     "name": "Apple MacBook Pro 16",
    "data": {
    "year": 2012,
    "price": 1849.99,
    "CPU model": "Intel Core i9",
    "Hard disk size": "1 TB"
  }
};
const putpayLoad={
     "name": "Apple MacBook Pro 16",
    "data": {
    "year": 2018,
    "price": 1899.99,
    "CPU model": "Intel Core i9+",
    "Hard disk size": "5 TB"
  }
};

const patchpayLoad={
     "name": "Apple MacBook Pro 16++",
    "data": {
    "year": 2028,
     }
};


const harddisksize='Hard disk size';
const cpumodel='CPU model';

test.beforeEach('API Utils',async({playwright})=>{
    const request= await playwright.request.newContext();
apiutils=new Apiutils(request);
});

test('Post Request',async()=>{
    
/*const request=await playwright.request.newContext();
apiutils=new Apiutils(request);*/
const response= await apiutils.postrequest(url,PostpayLoad);

expect.soft(response.status()).toBe(200);
expect.soft(response.statusText()).toBe('OK');

JsonResponse=await response.json();
id=JsonResponse.id;
console.log(id);

expect.soft(JsonResponse.name).toBe(PostpayLoad.name);
console.log(JsonResponse.name);

expect.soft(JsonResponse.data.year).toBe(PostpayLoad.data.year);
console.log(JsonResponse.data.year);


expect.soft(JsonResponse.data.price).toBe(PostpayLoad.data.price);
console.log(JsonResponse.data.price);


expect.soft(JsonResponse.data[cpumodel]).toBe(PostpayLoad.data[cpumodel]);
console.log(JsonResponse.data[cpumodel]);


expect.soft(JsonResponse.data[harddisksize]).toBe(PostpayLoad.data[harddisksize]);
console.log(JsonResponse.data[harddisksize]);

})

test('Get All Objects',async()=>{

    /*const getallRequest=await playwright.request.newContext();
    apiutils=new Apiutils(getallRequest);*/
    const Response=await apiutils.getallresources(url)

    expect.soft(Response.status()).toBe(200);
    expect.soft(Response.statusText()).toBe('OK');

    JsonResponse=await Response.json();

    for (const obj of JsonResponse) {
          console.log(obj.id);
          console.log(obj.name);
          console.log(obj.data);
          
          
    }
})


test('Get one Objects',async()=>{

    /*const getoneRequest=await playwright.request.newContext();
    apiutils=new Apiutils(getoneRequest);*/
    const Response=await apiutils.getoneresource(url,id);

    expect.soft(Response.status()).toBe(200);
    expect.soft(Response.statusText()).toBe('OK');

    JsonResponse=await Response.json();


    expect.soft(JsonResponse.name).toBe(PostpayLoad.name);
    console.log( JsonResponse.name);

     expect.soft(JsonResponse.data.year).toBe(PostpayLoad.data.year);
    console.log((JsonResponse.year));

     expect.soft(JsonResponse.data.price).toBe(PostpayLoad.data.price);
    console.log((JsonResponse.price));


    expect.soft(JsonResponse.data[cpumodel]).toBe(PostpayLoad.data['CPU model']);
    console.log(JsonResponse.data[cpumodel]);

    expect.soft(JsonResponse.data[harddisksize]).toBe(PostpayLoad.data['Hard disk size']);
    console.log(JsonResponse.data[harddisksize]);
    })


test('update Objects',async()=>{

    /*const getoneRequest=await playwright.request.newContext();
    apiutils=new Apiutils(getoneRequest);*/
    const Response=await apiutils.updateresource(url,id,putpayLoad);

    expect.soft(Response.status()).toBe(200);
    expect.soft(Response.statusText()).toBe('OK');

    JsonResponse=await Response.json();

       console.log(JsonResponse.id);
       
    expect.soft(JsonResponse.name).toBe(putpayLoad.name);
    console.log( JsonResponse.name);

     expect.soft(JsonResponse.data.year).toBe(putpayLoad.data.year);
    console.log((JsonResponse.year));

     expect.soft(JsonResponse.data.price).toBe(putpayLoad.data.price);
    console.log((JsonResponse.price));


    expect.soft(JsonResponse.data[cpumodel]).toBe(putpayLoad.data['CPU model']);
    console.log(JsonResponse.data[cpumodel]);

    expect.soft(JsonResponse.data[harddisksize]).toBe(putpayLoad.data['Hard disk size']);
    console.log(JsonResponse.data[harddisksize]);
    })


 test('Patch Objects',async()=>{

   /* const getoneRequest=await playwright.request.newContext();
    apiutils=new Apiutils(getoneRequest);*/
    const Response=await apiutils.Patchresource(url,id,patchpayLoad);

    expect.soft(Response.status()).toBe(200);
    expect.soft(Response.statusText()).toBe('OK');

    JsonResponse=await Response.json();

       console.log(JsonResponse.id);
       
    expect.soft(JsonResponse.name).toBe(patchpayLoad.name);
    console.log( JsonResponse.name);

    expect.soft(JsonResponse.data.year).toBe(patchpayLoad.data.year);
    console.log( JsonResponse.data.year);


    
    })
   
test('Delete One Resource',async()=>{

   /* const getallRequest=await playwright.request.newContext();
    apiutils=new Apiutils(getallRequest);*/
    const Response=await apiutils.deleteresource(url,id);

    expect.soft(Response.status()).toBe(200);
    expect.soft(Response.statusText()).toBe('OK');

    JsonResponse=await Response.json();

    expect.soft(JsonResponse.message).toBe(`Object with id = ${id} has been deleted.`)
    console.log(JsonResponse.message);
    
});