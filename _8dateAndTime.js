//js date objects represent a single movement in time in a 
//platform independent format. date object contains a number
//that represent the miliseconds since jan 1 1970 UTC

//creating date objects
// //there are 4 ways to create a date object
// new Date()
// new Date(year,month,day, hours,minutes,seconds,miliseconds)//takes 7arguments
// new Date(miliseconds)
// new Date(date string)

var date=new Date();
console.log(date);
console.log(new Date());//2025-06-12T03:28:58.502Z
console.log(new Date().toLocaleString());//12/6/2025, 8:58:58 am
console.log(new Date().toString());//Thu Jun 12 2025 08:58:58 GMT+0530 (India Standard Time)
console.log(Date.now());//miliseconds since jan 1st 1970
//js counts months from 0-11(0-jan dec-11)
//initializing either without anything will work if initializing the month is a must to assign

//new Date(datestring)
var d= new Date("october 13, 2021 11:01:02")
console.log(d);
console.log(d.toLocaleString());
// milisecond
console.log(new Date(0));//1st jan 1970

var date1= new Date();
console.log(date1.toLocaleString());
console.log(date1.getFullYear());
console.log(date1.getMonth());//rerturns 0-11
console.log(date1.getDate());
console.log(date1.getDay());

//how to set the indivisual date
console.log(date1.setFullYear(2022));
console.log(date1.setFullYear(2022,10,5));//setFullYear can optionally set month and date
console.log(date1.setMonth(10));
console.log(date1.setDate(5));
console.log(date1.toLocaleString());

//time
const currTime = new Date();
console.log(currTime.getTime());
//the  getTime() returns the number of miliseconds
//since jan1 1970
console.log(currTime.getHours());
// //the getHours returns the hours of a date as a number(0-23)
console.log(currTime.getMinutes());
console.log(currTime.getSeconds());
console.log(currTime.getMilliseconds());

console.log("Time");
const currTimeSet = new Date();
// console.log(currTimeSet);
// console.log(currTimeSet.setTime());

console.log(currTimeSet.setHours(5));
console.log(currTimeSet.setMinutes(2));
console.log(currTimeSet.setSeconds(35));
console.log(currTimeSet.setMilliseconds(10));

console.log(new Date().toLocaleTimeString());//only time
console.log(new Date().toLocaleDateString());//date only
console.log(new Date().toLocaleString());//time +date

