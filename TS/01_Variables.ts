/* scope :globally available through out the page project
console.log(sname); //Hoisting
var sname; //declaration
var sname; //Re-declaration
sname='khaleel'; //Assignement for variable
sname='Patan';// Re-assignment
sname=10;// Type inference
console.log(sname);*/

/*Scope: function or block scoped
//console.log(sname1); //Hoisting not allowed
let sname1;
//let sname1;   //redeclaration is not working here 
sname1='khaleel';
sname1='patan'; //reassigned allowed
sname1=10; //Type reference allowed
console.log(sname1);
*/


/*Scope: function or block scoped
*const country='India'; 
console.log(country);*/