const Bank = require("./bank/bank.js");
let b1 = Bank.createAccount("Aniket", "Shetty", 22);

console.log(b1);
console.log("---------------------------");
console.log(JSON.stringify(b1, null, 2));
console.log("---------------------------------");
console.log("Get bank user by ID");
console.log(Bank.getPersonByID(1));

b1.createAnotherAccount();
console.log("-----------------");
console.log(b1);

console.log("*****************************");
console.log("All account balance of b1", Bank.getTotalBalanceOfUserByID(1));
console.log("-----------------------------------------");
Bank.depositUserAccountByID(1, 2, 6766);
console.log("******************************");
console.log("All account balance of b1", Bank.getTotalBalanceOfUserByID(1));
console.log(
  "Specific account balance of b1 by Account id",
  Bank.getUserAccountBalanceByID(1, 2)
);
console.log("-----------------------");
console.log(b1);
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
console.log("Take money : ", Bank.withdrawMoneyByAccountID(1, 2, 3000));
console.log("Now check b1");
console.log(b1);
console.log("|||||||||||||||||||||||||||||||||||||||");
let b2 = Bank.createAccount("Aneesh", "Kumar", 25);
b2.createAnotherAccount();
console.log(b2);

Bank.transferFromUserToUser(1, 2, 2, 3, 500);
console.log("%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%");
console.log(b1);
console.log(b2);

console.log("^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^");
console.log(b1);
Bank.transferWithinSameUserAccounts(1, 2, 1, 500);
console.log(b1);
console.log("############################");
Bank.createAnotherAccountByID(1);
console.log(b1);
