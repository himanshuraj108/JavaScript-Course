const user = {
  username: "Rahul",
  price: 199,

  welcomeMessage: function () {
    console.log(`${this.username}, welcome to website`);
    console.log(this);
  },
};

user.welcomeMessage();
user.username = "Hitesh";
user.welcomeMessage();

console.log(this);

function chai() {
  console.log(this.username); // undefined
}

chai();

/// ARROW FUNCTION

const Chai = () => {
  let username = "Rahul";
  console.log();
};

Chai();

// const addTwo = (num1, num2) => {
//   return num1 + num2; // explit return
// };

//const addTwo = (num1, num2) => num1 + num2; // implicit return

const addTwo = (num1, num2) => ({ username: "Hitesh" });

console.log(addTwo(3, 4));
