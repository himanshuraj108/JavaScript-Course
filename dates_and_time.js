let myDate = new Date();
console.log(myDate.toString()); // with time
console.log(myDate.toDateString()); // without time
console.log(myDate.toLocaleString()); //with time and with AM / PM
console.log(myDate.toLocaleDateString()); // without time
console.log(typeof myDate);

// Months starts from 00 to 11

// let myCreateDate = new Date(2023, 0, 23);
// let myCreateDate = new Date(2023, 0, 23,5,3);
let myCreateDate = new Date("09-11-2024");
console.log(myCreateDate.toLocaleString());

let myTimeStamp = Date.now();
console.log(myTimeStamp);
console.log(myCreateDate.getTime());
console.log(Math.floor(Date.now() / 1000));

let newDate = new Date();
console.log(newDate.getFullYear());
console.log(newDate.getMonth());
console.log(newDate.getDay());
console.log(newDate.getDate());

// `${newDate.getFullYear} is year`

newDate.toLocaleString("default", {
  weekday: "long",
});
