function sayMyName() {
  console.log("R");
  console.log("A");
  console.log("H");
  console.log("U");
  console.log("L");
}

// sayMyName(); // function call

// Parametric function

function addTwoNumbers(num1, num2) {
  let result = num1 + num2; // we can alse direct return num1 + num2
  return result;
}

const result = addTwoNumbers(3, 5);
//console.log("Result: ", result);

function loginUserMessage(username) {
  if (!username) {
    console.log("Please enter username");
    return;
  }

  return `${username} just logged in`;
}

console.log(loginUserMessage("Rahul"));
console.log(loginUserMessage());

function calcuateCartPrice(...num1) {
  return num1;
}

console.log(calcuateCartPrice(200, 400, 500, 2000));

function calcuateCartPriceOne(val1, val2, ...num1) {
  return num1;
}

console.log(calcuateCartPriceOne(200, 400, 500, 2000));

const user = {
  username: "Rahul",
  price: 199,
};

function handleObject(anyobject) {
  console.log(
    `username is ${anyobject.username} and price is ${anyobject.price}`
  );
}

handleObject({
  username: "sam",
  price: 199,
});

const myNewArray = [100, 200, 300, 500];

function returnSecondValue(getArray) {
  return getArray[1];
}

// console.log(returnSecondValue(myNewArray)); // pass array by variable
console.log(returnSecondValue([100, 200, 300, 500])); //pass direct array
