// {} // scope
let a = 10; //use let always not var
const b = 20;
var c = 30;

if (true) {
  let a = 10;
  const b = 20;
  var c = 30;

  console.log(a);
  console.log(b);
  console.log(c);
}

console.log(a);
console.log(b);
console.log(c);
