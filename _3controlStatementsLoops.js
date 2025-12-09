//if else
//switch
//while
//do while

//for loop
//for in loop
//for of loop

//conditional(ternary operator)



//1. if else
//syntax
// if(){

// }
// else{

// }
//if else example leap year or not
var year =2024;

if(year%4==0){
    if(year%100==0){
        if(year%400==0){
            console.log("it is a leap year");
        }
        else{
            console.log("not a leap year");
        }
    }
    else{
        console.log("it is a leap year");
    }
}
else{
    console.log("not a leap year");
}


// truthy and falsy values in JS
// we have total 5 falsy values in JS
// 0,"",undefined,null, NaN,false
// other than this all statements are truly statements
if(false){//if if condition consistes of falsy values it will always go to else statement
    console.log("falsy statement1");
}
else{
    console.log("falsy statement");
}

//is elseif else
// if(){}
// elseif(){}
// elseif(){}
// else{}


//Switch statement The switch statement is used to perform different actions based on different conditions.
//switch(condition){
//     case 'circle':
//         execution statement;
//          break;
//     case 'triangle' :
//         execution statement
//          break;
//     case 'square' :
//         execution statement
//          break;
//     default :
//     please enter valid data
// }


//while loop creates a loop that executes a specified statement as long as test condition evaluates to true
//while loop is entry controled loop
//checks condition then executes
var x=0;
while(x<10){
    console.log(x);
    x++;
}


do{
    console.log(x)
    x++;
}while (x<10);//even if value is not <10 it executes atleast onc and gives us value 10
//do while loop is exit contrled loop it is used when we have to use the loop atleast once