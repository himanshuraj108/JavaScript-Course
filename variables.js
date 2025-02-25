const accountId = 144553;
let accountEmail = "rahul@google.com"; // use let always
var accountPassword = "12345";
accountCity = "Jalandhar";
let accountState;

//accountId = 2; we cant change because it's already in (const) format;

console.log(accountId);

accountEmail = "himanshu@gmail.com";
accountPassword = 24555;
accountCity = "Bengaluru";

console.table([
  accountEmail,
  accountId,
  accountPassword,
  accountCity,
  accountState,
]); // for display in tabular (table) form;

/*
Prefer not to use var
because of issue in block scope and functional scope
*/
