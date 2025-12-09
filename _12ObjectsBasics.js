//1.let vs var vs const
//var=>function scope
//let/const=>block scope
//var and let values can be changed but const variable values cannot be changed

//2.template literals(template strings)
//o/p:
//8*1=8
//8*2 =16 till 10
for (let num = 1; num <= 10; num++) {
  //normal
  let tableOf = 8;
  console.log(tableOf + "*" + num + "=" + tableOf * num);
}
console.log("\n");

//template literals
for (let num = 1; num <= 10; num++) {
  let tableOf = 8;
  console.log(`${tableOf}*${num}=${tableOf * num}`);
}

//3. default parameters
//default function parameters allow named parameter to be initialised with default
// values if no value or undefined is passed.

function mult(a, b) {
  return a * b;
}
console.log(mult(15, 2)); //30
console.log(mult(2)); //NaN

console.log(mult1(2));//wirks even before initialization
function mult1(a, b = 5) {
  //Default parameters
  return a * b;
}
console.log(mult1(2));

//3. fat arrow function
console.log(mult(15, 2)); //30
function mult(a, b) {
  return a * b;
}
//converting to fat arrow function
// console.log(mult2(15, 2)); //30// Cannot access 'mult2' before initialization
const mult2 = (a, b) => {
  return a * b;
};
console.log(mult2(15, 2)); //30

const mult3 = (a, b) => a * b;
console.log(mult3(15, 2)); //30
