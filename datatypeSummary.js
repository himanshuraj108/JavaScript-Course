//Primitive

// 7 types : String,Number,Boolean,null,undefinied,Symbol,BigInt

const score = 100;
const scoreValue = 100.3;
const isLoggedIn = false;
const outsideTemp = null;
let userEmail; //we can write let userEmail = undefined but that already undefined

const id = Symbol("123");
const anotherId = Symbol("123");
console.log(id == anotherId);

//const bigNumber = 4465478794421544545n;

// Reference (Non-Primitive)

//Array, Objects,Functions

const heros = ["saktiman", "nagraj", "doga"]; //Array

//Object
let myObj = {
  name: "Rahul",
  age: 20,
};

const myFunction = function () {
  console.log("Hello World");
};

console.log(typeof heros);
console.log(typeof myObj);
console.log(typeof myFunction);

// Stack (Primitive), Heap (Non-Primitive)

let myYoutubeName = "rahulgaming.com";
let anotherName = myYoutubeName;
anotherName = "ChaiAurCode";
console.log(myYoutubeName);
console.log(anotherName);

let userOne = {
  email: "user@google.com",
  upi: "user@ybl",
};

let userTwo = userOne;
userTwo.email = "rahul@gmail.com";

console.log(userTwo);
console.log(userOne);
