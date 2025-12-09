// // 1. Object Literals
// //object literals are simply key:value pair data structure
// // //storing  variables and functions together in one container,
// // we can refer this as an objects
// //objects like a schools bag containg all different things in one thing


// //2. create an object
// //1

// // let bioData={//curley braces is used to declare objects
// //     myName:"sahil tekwani",//(key:value pair)
// //     myAge: 26,
// //     getData : function(){
// //         console.log(`my name is ${bioData.myName} and my age is ${bioData.myAge}`);
// //     }
// // }
// // console.log(bioData.myName);
// // bioData.getData();

// //2ns way
// // let bioData={//curley braces is used to declare objects
// //     myName:"sahil tekwani",//(key:value pair)
// //     myAge: 26,//all kwy value pairs are seperated by commas
// //     getData(){
// //         console.log(`my name is ${bioData.myName} and my age is ${bioData.myAge}`);
// //     }
// // }
// // console.log(bioData.myName);
// // bioData.getData();

// //object within object

// let bioData={//curley braces is used to declare objects
//     myName:{
//         myName2:"sahil tekwani",
//         myAim:"win"
//     },  //(key:value pair)
//     myAge: 26,//all key value pairs are seperated by commas
//     getData(){
//         console.log(`my name is ${bioData.myName.myName2} and my age is ${bioData.myAge}`);
//     }
// }
// console.log(bioData.myName);
// bioData.getData();

// //what is this object

// //the defination of this object is that it contains the current context
// //the this object can have different values depending on where it is placed.
// // console.log(this);//it refers to the curent context and that is window global object
// // console.log(this.alert("sahil")); 

// function myName(){
//     console.log(this);//still returns the global window object
// }
// myName();

// var myNamess = 'sahil';
// function myNames(){
//     console.log(this.myNamess);//now returns the value of the variable
// }
// myNames();

// const obj ={
//     myName:'sahil',
//     age(){
//         console.log(this);//now reutns thwe current context
//     }
// }
// obj.age();
//this object cannot e used by using fat arrow funtion




//Destructuring in ES6
///the destructuring assignment syntax is a js expression 
//that makes it possible to unpack value from arrrays,
//or properties from object into distinct variables 
//array destructuring
const myBioData=['sahil','tekwani',26];
// let [myFname,myName,myAge]=myBioData;
// console.log(myFname);
let [myFname,myName,myAge, myDegree="MCs"]=myBioData;
console.log(myDegree);

let bioData={//curley braces is used to declare objects 
            myName2:"sahil tekwani",
            myAim:"win"
        }

let {myName2,myAim}=bioData;
console.log(myName2);


//object properties
//it has dynamic properties
let myNamee='sahil'
const bioDataa={
    [myNamee]:"it will fetch thedata from myName variable",
    [20+6]: "[]can be used for mathematical operations as well"
}
console.log(bioDataa);

//if key and values are same no need to write both
let sports = "basketall";
let sports2="bb";
// let sportssData={
//     sports:sports,
//     sports2:sports2
// }
// console.log(sportssData);

//above can also be written as
let sportssData={//can also be written aslet sportssData={sports,sports2}
        sports,
        sports2
    }
    console.log(sportssData);//returns the same value

//spread operator(...)//added spread operator in objects in 2018
const colors = ['red','green','blue'];
const myFavColors=[...colors,'voilet','white'];//it will add the the previos array 
console.log(myFavColors);

//ES7 features
//1. array include
console.log(colors.includes('red'));
//2.exponetial
console.log(2**3);

//es8
//1.string.padStart(add spaces in the start counting the array elements as spaces) padEnd(add spaces in the end including array elements as spaces)
//2. object.values
console.log(Object.values(sportssData));//returns object values
console.log(Object.entries(sportssData));//returns key value pair in an 1 array and multiple arays for all key value pairs

//2019
//flat method in arrays
//modern reduce function reduces the array flats upto one level
//array.flat(2)reduces to 2 levels
//array.flat(Infinity)
//array.fromEntries converts the coverteed array into object    


//es2020
//1.bigInt

//es2014
'use strict'
//stricts the javasxript writing code