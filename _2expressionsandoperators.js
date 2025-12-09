//different types of operators in JS(total6)
//assignment operators
//arithematic operators
//comparision operators
//logical operators
//string operators
// ternary operators

//assignments operators
var myName= "sahil"// =is an assignment operator which assigns value from left to right operand
var x=5;
var y=5;
console.log("equal?"+x==y);//o/p false +operator will add string to x and result wrong ans 
console.log("equal?"+(x==y));// using brackets is highly recommended inJS



//arithematic operators takes numeric values as operands and returns a single numeric value
console.log(2+3);
console.log(2-3);
console.log(2*3);
console.log(2/3);
console.log(2%3);// modulo operator
//Increment and decrement operators
//x++(postfix the operator increments and returns value before incrementing)
//++x(prefix the operator incremets and returns value after incrementing)
// x--(postfix)   --x(prefix) 
var num =15;
console.log(num);//15
var newNum = num++; 
console.log(num);//16
console.log(newNum);//15

var num1 =15;
var newNum1 = ++num1; 
console.log(num1);//16
console.log(newNum1);//16



//comparision operators compares its operands and 
// returns a logical valuebased on whether the comparision is true
console.log("\nComparision operators\n");
var a=5;
var b=10;
console.log(a==b);
console.log(a!=b);
console.log(a>b);
console.log(a>=b);
console.log(a<b);
console.log(a<=b);

console.log(a=b)//gives out the bigger no


//Logical Operators are used with boolean values
console.log("\nlogical operators\n");
var a=30;
var b=-20;
//logical AND(&&) is true only if all the operands are true
console.log(a>b && b>0);//false
//logical OR(||) is true if any one of the value is true
console.log(a>b || b>0);//true
//logical NOT(!) takes truth to falcity and vice versa
console.log(!(a>b || b>0));//false
console.log(!true);



//String Operators/ concatinating operators are used to concatinate the string which is called union of the 2 string operands
console.log("\nString operators\n");
var fName = "Sahil"
var lName = "Tekwani"
console.log(fName+" "+lName);

//challenge
//3**3
console.log(3**3);//3to the power 3
console.log(9**2);//exponent operator
console.log(10**-1);//0.1
//swap 2 nos with extra vairable
var q =2;
var w = 23;
var c=q;
q=w;
w=c;
//swap 2 nos without extra vairable

var p =2;
var c = 23;
p= p+c;
c=p-c;
p=p-c;


// difference b/w == ===
var num1=5;
var num2='5';
console.log(num1==num2);
console.log(num1===num2);//checks the value and the data type both

//Ternary Operator 
console.log("\nTernary operators\n");
//only only javasccript operator that take 3 operands
//variablename=condition?(iftrue)value1:(iffalse)value2
var age =18;
console.log((age>=18)? "you are a voter" : "not a voter");