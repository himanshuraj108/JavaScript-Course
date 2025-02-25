// NUMBERS

const score = 400;
console.log(score);

const balance = new Number(100);
console.log(balance);

console.log(balance.toString());
console.log(balance.toString().length);
console.log(balance.toFixed(2));

const otherNumber = 23.8966;

console.log(otherNumber.toPrecision(3));

const hundereds = 1000000;
console.log(hundereds.toLocaleString()); // default US
console.log(hundereds.toLocaleString("en-IN")); // for Indian

// Math

console.log(Math);
console.log(Math.PI);
console.log(Math.abs(-4));
console.log(Math.round(4.6));
console.log(Math.ceil(4.2));
console.log(Math.floor(4.9));
console.log(Math.min(4, 2, 1, 9, 2));
console.log(Math.max(2, 5, 8, 9, 5));

console.log(Math.random()); // always generate value from 0 to 1 randomly
console.log(Math.random() * 10 + 1);
console.log(Math.floor(Math.random() * 10) + 1); // values gives 1 to 9

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1)) + min);
