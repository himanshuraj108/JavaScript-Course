// singleton

// object literals

//Object.create // constructor method

const mySym = Symbol("Mykey");

const JsUser = {
  name: "Rahul",
  "full name": "Rahul Raj",
  [mySym]: "mykey1",
  age: 18,
  location: "Jaipur",
  email: "rahul@gmail.com",
  isLoggedIn: false,
  lastLoginDay: ["Monday", "Saturday"],
};

console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(JsUser["full name"]);
console.log(JsUser[mySym]);

JsUser.email = "himan@gmail.com";
//Object.freeze(JsUser);
JsUser.email = "himanshu@gmail.com";

console.log(JsUser);

JsUser.greeting = function () {
  console.log("Hello JS user");
};

JsUser.greetingTwo = function () {
  console.log(`Hello JS User,${this.name}`);
};

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
