// if

const isUserLoggedIn = true;

if (!isUserLoggedIn) {
  console.log("Login Successful");
} else {
  console.log("Denied");
}

const score = 200;

if (score > 200) {
  console.log("score is more than 200");
} else if (score < 200) {
  console.log("Score is less than 200");
} else {
  console.log("Invalid");
}

const week = 3;
switch (week) {
  case 1:
    console.log("Sun");
    break;

  case 2:
    console.log("Mon");
    break;

  case 3:
    console.log("Tue");
    break;

  case 4:
    console.log("Wed");
    break;

  case 5:
    console.log("Thu");
    break;

  case 6:
    console.log("Fri");
    break;

  case 7:
    console.log("Sat");
    break;

  default:
    console.log("Invalid option");
    break;
}

const emptyObj = {};
if (Object.keys(emptyObj).length === 0) {
  console.log("Object is empty");
} else {
  console.log("Full");
}

// Nullish Coalescing Operator (??): null undefined

let val1;
//val1 = 5 ?? 10;
//val1 = null ?? 10;
//val1 = undefined ?? 10;
val1 = undefined ?? 10 ?? 15;
console.log(val1);

// Terniary Operator

// condition ? true : false

const iceTeaPrice = 100;
iceTeaPrice >= 80 ? console.log("Less than 80") : console.log("Invalid");
