// HTML is the markup language that we use to structure and give meaning to our web content, 
// for example defining paragraphs, headings, and data tables, or embedding images and videos in the page.


// CSS is a language of style rules that we use to apply styling to our HTML content, 
// for example setting background colors and fonts, and laying out our content in multiple columns.


// JavaScript is a scripting language that enables you to create dynamically updating content, 
// control multimedia, animate images, and pretty much everything else. (Okay, not everything, but it is amazing what you can achieve with a few lines of JavaScript code.)






//data types in JS
//there are 6 primitive data types in jS
// undefined
// boolean
// numbers
// String
// BigInt
// Symbol


//undefined
var undefined = undefined; 
console.log(typeof(undefined)); // undefined
//var var =10; // 'var' is not allowed as a variable declaration name.

//string
var myName = "Sahil Tekwani"
console.log(typeof(myName));//string

//number
var myAge = 22;
console.log(myAge);
console.log(typeof(myAge));//number

console.log(10+"20"+22+25)//10202225

console.log(9-"4"); //bug=o/p=5

console.log(" "+0); //0 


//boolean
var iAmSahil = true;
console.log(iAmSahil);//true
console.log(typeof(iAmSahil));//boolean


console.log("sahil"-"rahul");//NaN not a number
console.log(true+true);//2
console.log(true+false);//1
console.log(false+true);//1
console.log(false-true);//-1

// difference between null and undefined
//null
var iAmUseless  = null;
console.log(iAmUseless);//null
console.log(typeof(iAmUseless));//object  //2nd bug

//undefined
var iAmOnStandBy;
console.log(iAmOnStandBy);//undefined
console.log(typeof(iAmOnStandBy));//undefined


//NaN
// NAN is a property of global oject
//variable in global scope
//the inital value of NAN is Not-A-Number
console.log(typeof(NAN));//undefined
var myPhoneNumber ="sahil";
console.log(isNaN(myPhoneNumber));//true because it is Not a Number

if(isNaN(myPhoneNumber)){               //if not a number is true then 
    console.log("please enter a valid phone number");
}

//NaN
console.log(NaN===NaN);//false NAN is undefined so something that is undefined cannot be equal to anyhting
console.log(NaN==NaN);//false
console.log(Number.NaN===NaN);//false
console.log(isNaN(NaN));///true
console.log(isNaN(Number.NaN));//number.NaN is not a number
console.log(Number.isNaN(NaN));//true