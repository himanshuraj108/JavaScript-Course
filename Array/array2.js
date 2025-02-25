const marvel_heros = ["thor", "Ironman", "spiderman"];
const dc_heros = ["superman", "flash", "batman"];

// marvel_heros.push(dc_heros);

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

const all_heros = marvel_heros.concat(dc_heros);
console.log(all_heros);

const all_new_heros = [...marvel_heros, ...dc_heros]; // same as concat
console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];

const real_Another_Array = another_array.flat(Infinity); // give all array in one array
console.log(real_Another_Array);

console.log(Array.isArray(["Rahul"])); // if array format give ture else false
console.log(Array.from("Rahul")); // makes all characters in array
console.log(Array.from({ name: "Rahul" })); // undefined

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3)); // makes array of variables
