const arr = [1, 2, 3, 5];

// ++++++++++ FILTER +++++++++

// const newArr = arr.filter((num) => {
//   return num > 4;
// });

// console.log(newArr);

// const newNums = [];

// arr.forEach((num) => {
//   if (num < 4) {
//     newNums.push(num);
//   }
// });

// console.log(newNums);

// +++++++ MAP +++++++

// const newArr = arr.map((num) => {
//   return num + 10;
// });

// console.log(newArr);

// ++++++++ REDUCE ++++++++

const total = arr.reduce(function (acc, currval) {
  console.log(`acc${acc} and currval ${currval}`);
  return acc + currval;
}, 0);

console.log(total);

const My_Total = arr.reduce((acc, curr) => acc + curr, 0);
console.log(My_Total);

const shoppingCart = [
  {
    itemname: "JS",
    price: 5000,
  },
  {
    itemname: "Web Dev",
    price: 5000,
  },
  {
    itemname: "Data Science",
    price: 100000,
  },
  {
    itemname: "Mob Dev",
    price: 12000,
  },
  {
    itemname: "C++",
    price: 4000,
  },
];

const priceTotal = shoppingCart.reduce((acc, item) => acc + item.price, 0);

console.log(priceTotal);
