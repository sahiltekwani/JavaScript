const fruits = ["mango", "kiwi"];
// console.log(fruits);
// //Pop
// console.log(fruits.pop()); //returns popped product
// console.log(fruits);
// //push
// console.log(fruits.push("kiwi")); //returns length
// console.log(fruits);
// //shift pop from start
// console.log(fruits.shift()); //returns removed element
// console.log(fruits);
// //unshift
// console.log(fruits.unshift("mango")); //return length
// console.log(fruits);

// for (let x in fruits) {
//   //returns index
//   console.log(x);
// }

// for (let x of fruits) { //returns elemets
//   console.log(x);
// }

// for (let x of fruits.entries()) {//returns key value pair
//   console.log(x);
// }

const description = fruits.forEach((fr, index, arr) => {
  arr[index] = fr + " is a fruit";
});
console.log(fruits);
console.log(description);

const num = [1, 2, 3, 4, 5];
const mult = (currElm, index, arr) => {
  arr[index] = currElm * 2;
};
const num1 = num.forEach(mult);

console.log(num);
console.log(num1); //undefined forEach returns undefined

console.log(num.indexOf(2));
console.log(num.push(2));
console.log(num);
console.log(num.lastIndexOf(2));

console.log(num.includes(2));
console.log(typeof num);
console.log(typeof num[0]);

console.log(fruits.sort());
console.log(fruits);

console.log(fruits[0].concat(fruits[1]));
console.log(fruits);
console.log(num);
console.log(num.copyWithin(0, 2, 5));
console.log(num);

console.log(num.every((num) => num > 1));
console.log(num.every((num) => num > 3));

console.log(num.fill(2, 2, 5));
console.log(num);

console.log(num.filter((num) => num == 2));
console.log(num);

console.log(num.find((eleme) => eleme == 6));
