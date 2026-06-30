let sname1:string='shekharh kumar gomaseti kumar rao';
let sname2:string=' chandra ';
let sname3:string='patan'


let Sname1upper=sname1.toUpperCase();
console.log(Sname1upper);
//converts string from lower to upper

let Sname1Lower=sname1.toLowerCase();
console.log(Sname1Lower);
//converts the string from upper to lower

console.log(sname1.charAt(0));
    /*Here specific character of the index 
    to identify in which position and return type is number */

console.log(sname1.indexOf('r')); //6
console.log(sname1.indexOf('Z')); 
//Here position of the index from the string to identify
//-1 here no character and its undefined from the string


console.log(sname2.trim());
//Remove spaces from the string from left and right side

console.log(sname2.trimStart());
//remove spaces string starting point

console.log(sname2.trimEnd());
//remove spaces from the tring from end point 

console.log(sname1.concat("",sname2," ",sname3));
//concate the 2 strings 
//is it possible to concatinate multiple strings ?

console.log(sname1.startsWith('s'));
//starting character is "s" means true or else false 

console.log(sname1.endsWith('h'));
//ending character should be "h" or else false  from the string

console.log(sname1.includes('chandra'));
console.log(sname2.includes('chandra'));
/* here sname1 is reteurns false becasue sname1 is not
 includes string "chandra" but  sname2 includes chandra and its true*/


 console.log(sname1.substring(0,4));
 /* here from the string or index how many values we need to capture
  the data from index starts=0  and index end point=4  so here length 
  formula 4-1=3  output should be "shek"
  here 2 arguments is mandatory */


 let dd=sname1.replace('h','o');
 console.log(dd);
 
 //replace the charcter 

 let ss=sname1.replaceAll('h','o');
 console.log(ss);
 
 //replace the all characters

 let sg=sname1.lastIndexOf('h');
 console.log(sg);

 //To find out the lastindexof the charcter position 
 

let arr=sname1.split(' ');
console.log(arr);
//split the specified string of words from rows to columns








