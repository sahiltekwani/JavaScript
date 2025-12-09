//what is event propogation
// determines in which order the elements recieve the event
// Event bubbling and capturing are two ways of event propogattion in html dom api
// when an event occurus within another element have registered a handle for that event.
// the event proppogation mode determines in which order the eleemtn recieve the eleement
//bottom to top bubbling phase 
//top to bottom capture phase

// //propogation is broadly catergorised in 3 phase
// 1.capture phase capturesthe outer most element then the inner
// going from window to the target phase
// 2.target phase it is the target phase
// 3. bubblephase inner most element and then propogated to the outer element
// from the event target to the top of the window
// by default id noneis mention then bubble phase is fired
//see 11index.html

//higher order fuction
//fuction whcih takes another function as an argument is called HOF

//callback function
// //function which get passes as an argument to another fucntion is called CBF
// a callback fucntion is a function that is passed as an argument to another fucntion
// to be called back at a later Time



//hoisting**
//hoisting in js is a mechanism where variables and functions 
//decalarartion are moved to the top of their scope before the code execute.
//we have a creating phase and execution phase

//scope chain and lecical scoping in js
//the scope chain is used to resolve the value of variable names in JS
//the scope chain in js is lexically defined which means that we can see what the 
//scope chain will be looking at the code
//at the top we have the global scope, which is the window Object in the browser
//lexical scoping means now, the inner fuction can get access to the parent 
//functions varables but the vice-versa is not true

//closure in JS
//a closure is the combination of function bundled together(ebclosed)with reference
// to its surroundingstate (the lexical enviroment)
//
//in iother words a closure fives you
//access to an outer function's scope from an innner function

//in JS closures are created every time a function is created ar fucntion creating time
//it is simmilar to lexical scoping

//synchronous and asynchronous JS
//in synchronous programing stack queu is maintained
//while in asynchronous programing execution occurs even with execution of multiple que

//what is Event loop
//event loop loops the events from message queue ti the global execution context


//what is event curring
//it is a technique of evaluating a function
// with multiple arguments into sequence of function with single argument
//sum(5)(3)(2)
//ither than taking all the arguments at once, it takes the first one and return a new function
//that takes the second argument and rteturns a  nre function that takes the
//the third argument and so on
const sum=(num1)=>{
    return function(num2){
        return function(num3){
            console.log(num1+num2+num3);
        }
    }
} 
sum(2)(3)(5);

const sum1= (num1)=>(num2)=>(num3)=>console.log(num1+num2+num3);
sum1(2)(4)(8);

//callBack Hell
setTimeout(()=>{
    console.log("1works");
    setTimeout(()=>{
        console.log('2works');
        setTimeout(()=>{
            console.log('3works');
            setTimeout(()=>{
                console.log('4works');
                setTimeout(()=>{
                    console.log('5works');
                },1000)
            },1000)
        },1000)
    },1000)
},1000)//this is called as callback hell

//calllback hell can be dealt with promises
//when we use fetch method in JS we get a promise in return
//it can have 3 values
//fullfilled
//reject
//ongoing
let myPromise =new Promise(function(myResolve,myReject){
    let x=0;
    if(x==0){
        myResolve("ok");
    }
    else{
        myReject("error")
    }

});

myPromise.then(
    function(value) {myDisplayer(value);},
    function(error) {myDisplayer(error);}
  );

    
// JSON
//JSON.stringify//converts the JS object into JSON text
//and stores the content as a string ed

const myObject={name:'sahil',age:23,young:true};
var objectAsString = JSON.stringify(myObject);
console.log(objectAsString);//{"name":"sahil","age":23,"young":true}
typeof(objectAsString);//string

//JSON.parse converts the JSON file or string back into an object