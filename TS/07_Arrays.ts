//Array Literal

let Arra1:String[]=['Playwright','Javascript','Python']
let Arra2:number[]=[4,5,7,8,9,11]
let Arra3:boolean[]=[true,false]
let Arra4:(String|number|boolean)[]=['Playwright',24,true]

//console.log((Arra4[0]));
//console.log((Arra4[2]));
//console.log((Arra3[1]));

//Replace the value for index
//Arra4[0]=200;
//console.log(Arra4[0]);
//Arra3[3]=true;
//console.log(Arra3[3]);

/* for loop using Array
let ind;
for(ind=0;ind<Arra4.length;ind++){
console.log(Arra4[ind]);

}*/

/* for off using Array
for (const element of Arra4) {
    console.log(element);
    
}*/

//Forin using Array
/* for (const key in Arra3) {

    
    console.log(Arra3[key]);
    
}*/


//Generic Array
let data1:Array<String>=['Playwright','Javascript','Python']
let data2:Array<number>=[4,5,7,8,9,11]
let data3:Array<boolean>=[true,false]
let data4:Array<(String|number|boolean)>=['Playwright',24,true]

//Same way generic array also would work but only sytax is different


// for loop using Array
let ind;
for(ind=0;ind<data2.length;ind++){
console.log(data2[ind]);

}

//for off using Array
for (const element of data2) {
    console.log(element);
    
}

// Forin using Array
for (const key in data2) {

    
    console.log(data2[key]);
    
}