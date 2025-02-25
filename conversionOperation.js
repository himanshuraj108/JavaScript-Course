let score = "33";

console.log(typeof score);

let valueInNumbre = Number(score);
console.log(typeof valueInNumbre);
console.log(valueInNumbre);

//"33" = 33
//"33abc" = NaN
//true = 1 || false = 0
// NaN (Not a Number) =  but type is number

let isLoggedIn = 1;
let newisLoggedIn = Boolean(isLoggedIn);
console.log(newisLoggedIn);

let number = 33;
let strNum = String(number);
console.log(strNum);

const id = Symbol("123");
const newId = Symbol("123");
console.log(newId === id);

let value = 3;
let negValue = -value;
console.log(negValue);

console.log(2 + 2);
console.log(2 - 2);
console.log(2 * 2);
console.log(2 ** 3);
console.log(2 / 3);
console.log(2 % 3);

let str1 = "Hello";
let str2 = " Rahul";
let str3 = str1 + str2;
console.log(str3);

console.log("1" + 2);
console.log(1 + "2");
console.log("1" + "2");
console.log("1" + 2 + 2);
console.log(1 + 2 + "2");

console.log(3 + ((4 * 5) % 3));

console.log(+true);
console.log(+"");

let num1, num2, num3;

num1 = num2 = num3 = 2 + 2;

let gameCounter = 100;
++gameCounter; //prefix increment first
//gameCounter++; //postfix increment after
console.log(gameCounter);
