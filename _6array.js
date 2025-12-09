//var can be used to store only one data at a time
//when we want to store more than one value in a datatype
//then we will use array
//in js we have array class and array are the prototype of this class
var myFriends = ["sahil", 22, true, "mohit", 23, false];
console.log(myFriends);
var array1 = new Array(); //optional
var array1 = ["sahil", "mohit", "rahul"];
console.log(array1[2]);
console.log(array1.length);
console.log(array1[array1.length - 1]); //last element

for (var i = 0; i < array1.length; i++) {
  console.log(array1[i]);
}

//for in loop and for of loop

for (let elements in array1) {
  //all indexes
  console.log(elements);
}

for (let elements of array1) {
  //all elements in the array
  console.log(elements);
}

//array.prototype.forEach()
//calls a function for each element of the array
array1.forEach(function (element, index, array) {
  console.log(element + " index " + index + array);
});

array1.forEach((element, index, array) => {
  console.log(element + "index" + index + array);
});

array1.forEach(function (element, index, array) {
  console.log("name " + element + " index " + index + " arrayValue " + array);
});
array1.forEach((index, element, array) => {
  console.log(
    `index is ${index} of the name ${element} in the array ${array} `
  );
});

console.log(array1.sort()); // it will sort and assign the sorted value to the array
console.log(array1);

// The map() method creates a new array with the results of calling a function for every array element.

// The map() method calls the provided function once for each element in an array, in order.
//does not change orignal array and returns a new array
//map funtion is chainable i.e. it can b used to do multiple operations reduce sort filter etc
//forEach loop is not chainable
const numbers12 = [4, 9, 16, 25];
const newArr = numbers12.map(Math.sqrt);
console.log(newArr);
var newArr1 = numbers12.map((element, index, arr) => {
  return `index is ${index} and the element is ${element} is from an array of ${arr}`;
});
console.log(newArr1);
// array
//searching and filter in an array
//returns the first index of element in array which is equal to element
//-1 if not found
// console.log(array1.indexOf('sahil'));
console.log(array1.indexOf("sahil"));
array1.push("sahil");
console.log(array1.lastIndexOf("sahil"));
//lastIndexOf() returns the last index of the element that is equal to element
// concat()	Joins two or more arrays, and returns a copy of the joined arrays

const hege = ["Cecilie", "Lone"];
const stale = ["Emil", "Tobias", "Linus"];
const age = [21, "sahil", "rahul", 12];
const children = hege.concat(stale, age);

console.log(children);
console.log(hege);
console.log(children.constructor);

// copyWithin()	Copies array elements within the array, to and from specified positions

//array.copyWithin(target, start, end)
// target	Required. The index position to copy the elements to
// start	Optional. The index position to start copying elements from  (default is 0)
// end	Optional. The index position to stop copying elements from (default is array.length)

//copyWithin() method copies array elements to another position in an array, overwriting the existing values.
const fruits = ["Banana", "Orange", "Apple", "Mango", "DragonFruit", "papaya"];
console.log(fruits.indexOf("DragonFruit"));
console.log(fruits.copyWithin(1, 3, 5)); //bannana orange banana orange
console.log(fruits);

// entries()	Returns a key/value pair Array Iteration Object
const fruits1 = ["Banana", "Orange", "Apple", "Mango"];
for (let x of fruits1) {
  //displays only entries
  console.log(x);
}
for (let x of fruits1.entries()) {
  //displays index and entries
  console.log(x);
}

// every()	Checks if every element in an array pass a test
const ages = [32, 33, 16, 40];
console.log(ages.every(checkAge));
function checkAge(age) {
  return age > 18;
}

console.log(ages.every(drinks));
function drinks(age) {
  return age <= 40;
}

// fill()	Fill the elements in an array with a static value
// array.fill(value, start, end)
// value	Required. The value to fill the array with
// start	Optional. The index to start filling the array (default is 0)
// end	Optional. The index to stop filling the array (default is array.length)
console.log(fruits.fill("Kiwi", 2, 5));

console.log(fruits);

// filter()	Creates a new array with every element in an array that pass a test
const ages1 = [32, 33, 16, 40];
console.log(ages1);
console.log(ages1.filter(checkAdult)); // Returns [32, 33, 40]
console.log(ages1);
function checkAdult(age) {
  return age >= 18;
}

// find()	Returns the value of the first element in an array that pass a test
// The find() method returns the value of the array element that passes a test (provided by a function).

// The method executes the function once for each element present in the array:

// If it finds an array element where the function returns a true value, find() returns the value of that array element (and does not check the remaining values)
// Otherwise it returns undefined
console.log(ages1.find(checkAdult));

// findIndex()	Returns the index of the first element in an array that pass a test
// The findIndex() method returns the index of the first array element that passes a test (provided by a function).

// The method executes the function once for each element present in the array:

// If it finds an array element where the function returns a true value, findIndex() returns the index of that array element (and does not check the remaining values)
// Otherwise it returns -1
console.log(ages1.findIndex(checkAdult));

// // forEach()	Calls a function for each array element
// array.forEach(function(currentValue, index, arr), thisValue)
// currentValue	Required. The value of the current element
// index	Optional. The array index of the current element
// arr	Optional. The array object the current element belongs to
//Optional. A value to be passed to the function to be used as its "this" value.
//If this parameter is empty, the value "undefined" will be passed as its "this" value
const numbers = [65, 44, 12, 4];
const numbers1 = numbers.forEach(myFunction);

function myFunction(item, index, arr) {
  // console.log(item);
  arr[index] = item * 10;
  return arr[index];
  // console.log(item);
}
console.log(numbers1);

// from()	Creates an array from an object
// Array.from(object, mapFunction, thisValue)
// object	Required. The object to convert to an array
// mapFunction	Optional. A map function to call on each item of the array
// thisValue	Optional. A value to use as this when executing the mapFunction
console.log(Array.from("ABCDEFG")); // Returns [A,B,C,D,E,F,G]
console.log(fruits);
const obj = ["fruits", "vergitables", "grocery"];
const arr = Array.from(obj, myClass);
function myClass(entries) {
  if (entries === "fruits") {
    return entries;
  }
}
console.log(arr); //fruits,undefined,undefined

// includes()	Check if an array contains the specified element
//The includes() method returns true if an array contains a specified element, otherwise false.
const fruits2 = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits2.includes("Mango")); // Returns true

// indexOf()	Search the array for an element and returns its position
console.log(fruits2.indexOf("Mango")); // Returns 3

// isArray()	Checks whether an object is an array
console.log(Array.isArray(fruits2));

// join()	Joins all elements of an array into a string
//The join() method returns an array as a string with commans between elements of arrays.
console.log(fruits.join()); //
console.log(fruits.join("sahiljoin")); //it will add sahiljoin between each element

// keys()	Returns a Array Iteration Object, containing the keys of the original array
const fruits3 = ["Banana", "Orange", "Apple", "Mango"];
const keys = fruits3.keys();
console.log(keys); //array iterator
for (let x of keys) {
  var text = x + "<br>";
  console.log(text);
}
console.log(keys);
//length
const fruits5 = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits5.length); // Returns 4

// lastIndexOf()	Search the array for an element, starting at the end, and returns its position
const fruits6 = ["Apple", "Orange", "Apple", "Mango"];
console.log(fruits6.lastIndexOf("Apple"));



//multiply by 2 asnd return only those greater than 10
var multipier2 = numbers12.map((element, index, arr) => {
  let x = element * 2;
  if (x > 10) return x;
});
console.log(multipier2);
var multiplier = numbers12
  .map((element, index, arr) => {
    return element * 2;
  })
  .filter((element) => {
    return element > 10;
  });
console.log(multiplier);

console.log(multipier2);
var multiplier3 = numbers12
  .map((element, index, arr) => element * 2)
  .filter((element) => element > 10);
console.log(multiplier3);

// pop()	Removes the last element of an array, and returns that element
fruits.pop();
console.log(fruits);
// push()	Adds new elements to the end of an array, and returns the new length
fruits.push("Kiwi");
console.log(fruits);
//prototype
Array.prototype.myUcase = function () {
  for (let i = 0; i < this.length; i++) {
    this[i] = this[i].toUpperCase();
  }
};
var fruits0 = ["Banana", "Orange", "Apple", "Mango"];
fruits0.myUcase();
console.log(fruits0);
// reduce()	Reduce the values of an array to a single value (going left-to-right)
// to reduce 3d or 2d to 1d array
console.log("reduce");
const numbers2 = [175, 50, 25];
console.log(numbers2.reduce(myFunc)); //100(175-50-25)
function myFunc(total, num) {
  return total - num;
}
console.log(numbers2);
let sum1 = numbers.reduce((acumulator, element, index, arr) => {
  return (acumulator += element);
}, 7); //initial value)previous value 1250 current `1257
console.log(sum1);

// reduceRight()	Reduce the values of an array to a single value (going right-to-left)
console.log(numbers2.reduceRight(myFunc));

// reverse()	Reverses the order of the elements in an array
fruits.reverse();
console.log(fruits);

// shift()	Removes the first element of an array, and returns that element
console.log(fruits.shift());
// slice()	Selects a part of an array, and returns the new array
//slice() selects the elements starting at the given start argument, and ends at, but does not include, the given end argument.
console.log(fruits);
const citrus = fruits.slice(1, 3);
console.log(citrus);
// some()	Checks if any of the elements in an array pass a test
const ages2 = [3, 10, 18, 20];

ages2.some(checkAdult); // Returns true

function checkAdult(age) {
  return age >= 18;
}
// sort()	Sorts the elements of an array
// The sort() method sorts the elements of an array.

// The sort order can be either alphabetic or numeric, and either ascending (up) or descending (down).

// By default, the sort() method sorts the values as strings in alphabetical and ascending order.

// This works well for strings ("Apple" comes before "Banana"). However, if numbers are sorted as strings, "25" is bigger than "100", because "2" is bigger than "1".

// Because of this, the sort() method will produce an incorrect result when sorting numbers.

// You can fix this by providing a "compare function" (See "Parameter Values" below).
fruits.sort();

//Sort numbers in an array in ascending order:
const points = [40, 100, 1, 5, 25, 10];
points.sort(function (a, b) {
  return a - b;
});

//Sort numbers in an array in descending order:

points.sort(function (a, b) {
  return b - a;
});

// // splice()	Adds/Removes elements from an array
// // array.splice(index, howmany, item1, ....., itemX)
// index	Required. The position to add/remove items. Negative values a the position from the end of the array.
// howmany	Optional. Number of items to be removed.
// item1, ..., itemX	Optional. New elements(s) to be added

console.log(fruits);
fruits.splice(1, 1, "Lemon", "Kiwi"); //(startindex, how many to delete, what to add)
console.log(fruits);
fruits.splice(4, 1, "Lemon1", "Kiwi1");
fruits.splice(fruits.length, 0, "Lemon", "Kiwi"); //to add in the last
console.log(fruits);
// toString()	Converts an array to a string, and returns the result
let text3 = fruits.toString();
// unshift()	Adds new elements to the beginning of an array, and returns the new length
fruits.unshift("Lemon", "Pineapple");
console.log(fruits);
// valueOf()	Returns the primitive value of an array
//The valueOf() method returns the array itself.
console.log(fruits.valueOf());
