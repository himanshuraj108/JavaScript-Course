//Part of Scope

function one() {
  const username = "Rahul";

  function two() {
    const website = "Youtube";
    console.log(username);
  }
  //console.log(website); // not in scope
  two();
}

one();

if (true) {
  const username = "hitesh ";
  if (username == "hitesh ") {
    const website = "Youtube";
    // console.log(username + website);
  }
  // console.log(website);
}

// console.log(username);
console.log(addone(5));
function addone(value) {
  return value + 1;
}

// hoisting
// addTwo(5); we cant access of fun with variable
let addTwo = function (num) {
  return num + 2;
};

addTwo(5);
