function function1()  //without parameter function
{

}function1();



function function2(name:string, age:number){ //With parameter function
       console.log("Welcome");
       
}function2("Khaleel",24);


function function3(name:string, age:number=24){ //default function
       console.log("Welcome");
       
}function3("Khaleel");


function function4(name:string, age?:number){ //Optional function
       console.log("Welcome");
       
}function4("Khaleel");


let msg2 = function (){          //Annoumous function
         console.log("Welcome");  
} 


let ms=()=>{   //Arrow function

} ;


function getName():String  //Return type function
{
    return "Khaleel";
}


function getAge():number
{
    return 24;
}

function4("getName()",getAge()); /* this is from function4
 we can return the value from another function by using return type of function*/
