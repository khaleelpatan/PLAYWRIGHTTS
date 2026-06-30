/* object is a Real time entity
   class is contains functions, properties and variables 
   object contains key and value pair
   Below one is without data type pbject*/

let person={

    Name:'khaleel',
    Age:24,
    country:'India'
    //key: value
    }
console.log(person.Name); //dot notation
console.log(person.Age);
console.log(person['country']);//bracket notation

/*for of---
In the place of keyof, value we can replace any name */

for (const[key,value] of Object.entries(person)) {
    console.log(`$(key):$(value)`);//for backlit
    
console.log(`key is ::${key} and value is::${value}`);//for backlit
    
}  

//for in

for (let ele in person) {
    console.log(ele, person[ele]);

     console.log(ele, person.ele);//dot notation won't work for forin
    console.table(person);// in the table format output if we want
    
}


//Exmaple2

let Animal={
    Name:'khaleel',
    Age:26,
    city:'India'
}

for (const [key, value] of Object.entries(Animal)) 
    {
    console.log(`key is::${key} and value is ::${value}`);
    
     }


for (const element in Animal) {
    
    console.log(element,Animal[element]);
    console.table(Animal);
    
    
    }     


    //object with data type

let student: {
    name:string; age:number; rno:number; address:string;
}=
{
    name:'khaleel',
    age:25,
    rno:2445,
    address:'Nellore'

}
console.table(student);
console.log(student.name,student.age,student.rno,student.address);//dot notation
console.log(student['name'],student['address'],student['rno'],student['address']);//bracket notation
//here for of loop and for inloop also works like above only no change.
//only change here will provide data type for objects




// object how to call using CLASS
//getter methods for reusable methods wherever we need across project we can use them
//public and Private is access modifiers mandatory to provide
//below under constructor all arguments are local arguments
class student1{

constructor(public name:string, public age:number, public rno:number, public address:string){
        this.name=name;
        this.age=age;
        this.rno=rno;
        this.address=address;

    }

    getName():string{
       return this.name;
    }
    getAge():number{
        return this.age;
    }
    getrno():number{
        return this.rno;
    }
    getaddress(){
        return this.address;
    }

    getStudentDetails(){
        console.log('student name is::${this.getName()} and age is::${this.getAge()} and rno is ${this.rno} and address is ${this.address}');
        
    }
}

//till here class method 
//this keyword is to acess the current class object, functions,methods,variables

//Now let us call object of the class

let s1=new student1('khaleel',24,46777,'Chejerala');
let s2=new student1('Patan',25,47777,'Nellore')
s1.getStudentDetails();
s2.getStudentDetails();
