const name = "Rahul";
const repoCount = 50;

//console.log(name + repoCount + " value"); // old Model

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`); //new Model // use backtics `` and doller sign `${variable}`

const gameName = new String(`hitestic`);
console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf("s"));

const newString = gameName.substring(0, 4);
console.log(newString);

const anotherString = gameName.slice(0, 4); // also use negative value in slice like slice(-8,4)
console.log(anotherString);

const newStringOne = "    hitesh  ";
console.log(newStringOne.trim()); // for remove spaces
console.log(newStringOne.trimStart()); //trim from start
console.log(newStringOne.trimEnd()); // trim for end

const url = "https://rahul.com/rahul%3769";

console.log(url.replace("%", "-")); // for repalce

console.log(url.includes("rahul")); // for find

console.log(url.split("%")); //for seprate
