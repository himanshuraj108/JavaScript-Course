// Immediately Invoked Function Expression (IIFE)
// Problem of Global Scope many times so for remove pollution of scope, we use IIFE

(function chai() {
  // named IIFE
  console.log(`DB CONNECTED`);
})(); // Semi-Colon should be in IIFE function()

((name) => {
  // Un-named IIFE
  console.log(`DB CONNECTED TO ${name}`);
})(`"Rahul`);
