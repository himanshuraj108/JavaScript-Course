// we can store diffierent different data types in array

const myArr = [1, 2, 3, 4, 5];
const myHeros = ["Saktiman", "Nagraj"];
const myArr2 = new Array(1, 2, 3, 4);

console.log(myArr);
console.log(myArr[4]); // always start from 0 index

// Array Methods

myArr.push(6); // add ele at last
console.log(myArr);

myArr.pop(); //remove last ele
console.log(myArr);

myArr.unshift(9);
console.log(myArr); // shift at 0th idx  by same size of array but removed last ele

myArr.shift(); // for remove 1st ele
console.log(myArr);

console.log(myArr.includes(9)); //for find ele exist or not in true / false
console.log(myArr.includes(3));
console.log(myArr);

const newArr = myArr.join();
console.log(myArr);
console.log(newArr);

//slice, splice

console.log("A", myArr);

const myn1 = myArr.slice(1, 3); // give ele from 1 to 2
console.log(myn1);
console.log("B", myArr);

const myn2 = myArr.splice(1, 3); // give all ele from 1 to 3
console.log("C", myArr);
console.log(myn2);
