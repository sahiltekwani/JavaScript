// function defination 
//block of code design for a particular task is called a function
//you can reuse code:define code once and can be used multiple times
//can be used with different arguments to produce different results 
//DRY:do  not repeat yourself
//before using a function we need to define it functional declaration or function statement
//list of parameters to the functions are enclosed into parantheses and seperated by commas
//using function keyword and later name of the function
//function functionName(){statements}

// calling a function
//defining a function does not execute it a js function executes when something invokes it


// function paramreter
//function paramenters are names listed in function defination

// funcion argument
//function arguments are the real values passed to the function

// function expressions
// create a function and put it into variable

// return keyword
//when jS reches return statement function stop executing
//the return value is returned back to the caller

function sum(a,b){
    return total=a+b;
}
var t =sum(5,15);
console.log("the sum of the numbers is "+t);


// anonymous function
//it is simillar to and has same syntax as a function declaration one can define "named" function expressions
// or anonymous function expressions
var t1 =function(a,b){
    return total=a+b;
}
console.log(t1(5,15));
console.log(t1);

//We often use anonymous functions as arguments of other functions. 
setTimeout(function () {
    console.log('Execute later after 1 second')
}, 1000);

//If you want to create a function and execute it immediately after declaration, you can use the anonymous function like this:
(function() {
    console.log('IIFE');
})();

// First, the following defines a function expression:
// Second, the trailing parentheses () allow you to call the function:
//and sometimes, you may want to pass arguments into it, like this:

let person = {
    firstName: 'John',
    lastName: 'Doe'
};
(function () {
    console.log(`${person.firstName} ${person.lastName}`);
})(person);

//arrow functions
// let add = function (a, b) {
//     return a + b;
// };

let add = (a, b)  => a + b; 
console.log(add(2,3));  
