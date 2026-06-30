/* If condition
function ifelse(marks:number){
if(marks>=40)
console.log("passed");

else{
console.log("failed");

}}ifelse(40); */


/* Nested if (else if)

function nesif(marks:number){
    if(marks>=40 && marks<=60)
    {
        console.log("Average marks");
        
    }
    else if(marks>=61 && marks<=80)
    {
        console.log("Above Average marks");
        
    }
    else if(marks>=81 && marks<=100)
    {
        console.log("genious");
        
    }
    else{
        console.log("Failed");
        
    }
}
nesif(45); */


/*switch case expression 

function Switchexp(day:string){
    switch(day)
    {
        case "Monday":
        console.log("Monday");
        break;
        
        case "tuesday":
            console.log("Tuesday");
            break;

            case "wednesday":
                console.log("wednesday");
                break;

                case "Thursday":
                    console.log("thursday");
                    break;

                    case "friday":
                        console.log("friday");
                        break;

                        default:
                            console.log("not valid day");
                            
                        }
                        console.log("out of switch");
                        
}Switchexp("Sunday");  */