// string in js is zero or more than zero characters written inside quotes
// //used for manipulating text
// strings can be created as pimitives
// from string literals or as an obesct using string() constructor
let myName ="sahil"
let myNameFull= new String("Sahil Tekwani");//optional
console.log(myName);
console.log(myNameFull);
console.log(myName.length);//returns the length of the string

// Escape character
var myInfo='my name is "sahil" and i am 22 year old';
console.log("my name is \"sahil\" and i am 22 year old");
console.log("my name is 'sahil' and i am 22 year old");
console.log('my name is "sahil" and i am 22 year old');

//find a srtrig within a string
console.log(myNameFull.indexOf("Sahil"));

console.log(myNameFull.indexOf("Tekwani"));
console.log(myInfo.indexOf("i",8));
console.log(myInfo.indexOf("i",15));//(searchfor, search from which index)
console.log(myInfo.lastIndexOf("i",15));

//the searh method searches a string for a specified value
//and returns the position of the match
//the search method does not take 2nd element as an argument
console.log(myInfo.search('sahil'));


//extracting string parts
// there are total 3 methods   for extracting a part of a string
// slice(start,end)
// substring(start,end)
// substr(start,length)

//slice(start,end(end is optional)) extracts a part of a string and returns a new string
var fruits = "apple,banana,grapes"
console.log(fruits.slice(0,5));//end in this case was an " " at 5th index which will not be printed
//the orignal array will not be changed
console.log(fruits.slice(6,-2));//-2 removes the last 2 elements
//how to limit the characters like in twitter
console.log(fruits.slice(0,10));

//substring()
//cannot accept negative index
console.log(fruits.substring(0,4));//also exludes last element
console.log(fruits.substring(8,-2));//if there is a negitive value in substring then the
// first elements acts as an end element and returns all values exect the end element


//substr(start,length)
console.log(fruits.substr(0,4));//same
console.log(fruits.substr(8,-2));//returns no value
console.log(fruits.substr(-6));

//the replace() method changes the specified value with another value in the string
//does not change the string returns new string
var apple="apple"
var fruits1=fruits.concat(apple);
console.log(fruits1);
console.log(fruits1.replace('apple','Apple'));//replace the first occurance

//there are three methods for extracting characters from a string
//charAt(position)   
//charCodeaAt(position)
//property access[]


//charAt()retuns the charachter ta specfied at an index
console.log(fruits.charAt(5));

//charCodeAt() returns the unicode of the character at a aspecified index
//returns the UTF16 code integer b/w 0-65535
console.log(fruits.charCodeAt(0));

//ECMA 5(2009) allows property access [] in strings
console.log(fruits[0]);  //just like an array




console.log(fruits.toUpperCase());
console.log(fruits.toLowerCase());
//trim() method reduces the white spaces from both sides of the strings
//string to array split() method
console.log(fruits.split(","));