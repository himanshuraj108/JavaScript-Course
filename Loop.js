// for

for (let i = 0; i < 10; i++) {
  console.log(i);
}

// while
let i = 0;
while (i < 10) {
  console.log(i);
  i++;
}

// do while

i = 0;
do {
  console.log(i);
  i++;
} while (i < 10);

// for of

const arr = [1, 2, 3, 4, 5];

for (const num of arr) {
  console.log(num);
}

const greet = "Hello World";
for (const g of greet) {
  console.log(g);
}

// Map

const map = new Map();
map.set("IN", "India");

// console.log(map);

for (const [key, value] of map) {
  console.log(key, ": ", value);
}

const myObject = {
  game1: "NFS",
  game2: "Spidermap",
};

for (const key in myObject) {
  console.log(key);
}

// for each

const coding = ["java", "C++"];

coding.forEach(function (val) {
  console.log(val);
});

coding.forEach((item) => {
  console.log(item);
});

function printMe(item) {
  console.log(item);
}

coding.forEach(printMe);

coding.forEach((item, arr) => {
  console.log(item, arr);
});
