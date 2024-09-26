const Account = require("../account/account.js");
class Person {
  #personID;
  accounts;
  static #accountID = 0;
  constructor(personID, personFullName, age, accounts) {
    this.#personID = personID;
    this.personFullName = personFullName;
    this.personAge = age;
    this.accounts = accounts;
  }

  //getters

  getPersonID() {
    return this.#personID;
  }
  getPersonFullName() {
    return this.personFullName;
  }
  getPersonAllAccounts() {
    return this.accounts;
  }
  //person factory function
  static newPerson(personID, firstName, lastName, age) {
    try {
      if (typeof firstName != "string")
        throw new Error("Enter a valid first name!");
      if (typeof lastName != "string")
        throw new Error("Enter a valid last name!");
      if (firstName === lastName) throw new Error("Enter a valid name!");
      if (typeof age != "number") throw new Error("Enter a valid age!");
      if (age < 0) throw new Error("Invalid age!");
      if (age < 18)
        throw new Error("Below age than 18 cannot create a bank account!");

      let personFullName = firstName + " " + lastName;
      let account = Account.newAccount(++Person.#accountID);

      // console.log(account);
      let accounts = [];
      accounts.push(account);
      let person = new Person(personID, personFullName, age, accounts);
      return person;
    } catch (error) {
      throw error;
    }
  }

  //get specific user account
  getAccountByID(accountID) {
    try {
      if (accountID < 0) throw new Error("enter a valid account iD...");
      let allAccounts = this.accounts;
      for (let account of allAccounts) {
        if (account.getAccountID() == accountID) {
          return account;
        }
      }
      return null;
    } catch (error) {
      throw error;
    }
  }

  //creating another account by same user..
  createAnotherAccount() {
    try {
      if (this.accounts.length > 5)
        throw new Error(
          "Sorry 1 user cannot create more than 5 accounts in the same bank!"
        );
      let account = Account.newAccount(++Person.#accountID);
      this.accounts.push(account);
    } catch (error) {
      throw error;
    }
  }

  //get all accounts balance
  getTotalBalanceOfUserByID() {
    try {
      let allAccountsOfPerson = this.accounts;
      let totalBalance = 0;
      for (let account of allAccountsOfPerson) {
        totalBalance += account.getAccountBalance();
      }
      return totalBalance;
    } catch (error) {
      throw error;
    }
  }

  //deposit
  depositUserAccountByID(accountID, amount) {
    try {
      if (accountID < 0) throw new Error("Enter a valid account id..");
      let account = this.getAccountByID(accountID);
      account.depositUserAccountByID(amount);
    } catch (error) {
      throw error;
    }
  }

  //get specific user account balance
  getUserAccountBalanceByID(accountID) {
    try {
      let account = this.getAccountByID(accountID);
      return account.getAccountBalance();
    } catch (error) {
      throw error;
    }
  }

  //withdraw money by account id
  withdrawMoneyByAccountID(accountID, amount) {
    try {
      let account = this.getAccountByID(accountID);
      let money = account.withdrawMoneyByAccountID(amount);
      return money;
    } catch (error) {
      throw error;
    }
  }

  //debit by account id
  debitAmountByAccountID(senderAccountID, amount) {
    try {
      let senderAccount = this.getAccountByID(senderAccountID);

      senderAccount.debitAmountByAccountID(amount);
    } catch (error) {
      throw error;
    }
  }

  //credit by account id
  creditAmountByAccountID(receiverAccountID, amount) {
    try {
      let receiverAccount = this.getAccountByID(receiverAccountID);
      receiverAccount.creditAmountByAccountID(amount);
    } catch (error) {
      throw error;
    }
  }

  //transfer within same user account by account id
  transferWithinSameUserAccounts(senderAccountID, receiverAccountID, amount) {
    try {
      let senderAccount = this.getAccountByID(senderAccountID);
      let receiverAccount = this.getAccountByID(receiverAccountID);
      senderAccount.debitAmountByAccountID(amount);
      receiverAccount.creditAmountByAccountID(amount);
    } catch (error) {
      throw error;
    }
  }
}

module.exports = Person;
