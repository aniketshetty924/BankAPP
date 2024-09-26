const Account = require("../account/account.js");
const Person = require("../person/person.js");
class Bank {
  static #persons = [];
  static #personID = 0;

  constructor() {}
  getAllPersons() {
    return Bank.#persons;
  }

  //bank factory function
  static createAccount(firstName, lastName, age) {
    let person = Person.newPerson(++Bank.#personID, firstName, lastName, age);

    Bank.#persons.push(person);

    return person;
  }

  static getPersonByID(personID) {
    try {
      if (typeof personID != "number")
        throw new Error("Enter a valid person ID");
      if (personID < 0) throw new Error("Enter a valid person ID...");

      // console.log(Bank.#persons);
      for (let person of Bank.#persons) {
        // console.log("person id : ", person.getPersonID());
        if (person.getPersonID() == personID) {
          return person;
        }
      }
      return null;
    } catch (error) {
      console.log(error);
    }
  }
  //create another account by user id
  static createAnotherAccountByID(personID) {
    try {
      let person = Bank.getPersonByID(personID);
      person.createAnotherAccountByID();
    } catch (error) {
      console.log(error);
    }
  }
  //create another account directly by user obj
  createAnotherAccount() {
    try {
      let person = this;

      person.createAnotherAccount();
    } catch (error) {
      console.log(error);
    }
  }

  //get total balance of person by person id
  static getTotalBalanceOfUserByID(personID) {
    try {
      if (personID < 0) throw new Error("Enter a valid person ID...");
      let person = Bank.getPersonByID(personID);
      let totalBalance = person.getTotalBalanceOfUserByID();
      return totalBalance;
    } catch (error) {
      console.log(error);
    }
  }

  //get balance of specific user account by ID
  static getUserAccountBalanceByID(personID, accountID) {
    try {
      let person = Bank.getPersonByID(personID);
      let balance = person.getUserAccountBalanceByID(accountID);
      return balance;
    } catch (error) {
      console.log(error);
    }
  }

  //deposit
  static depositUserAccountByID(personID, accountID, amount) {
    try {
      if (personID < 0) throw new Error("Enter a valid personID...");
      if (accountID < 0) throw new Error("enter a valid account id...");
      if (amount <= 0) throw new Error("Enter a valid amount to deposit!");
      let person = Bank.getPersonByID(personID);
      person.depositUserAccountByID(accountID, amount);
    } catch (error) {
      console.log(error);
    }
  }

  static withdrawMoneyByAccountID(personID, accountID, amount) {
    try {
      let person = Bank.getPersonByID(personID);

      let money = person.withdrawMoneyByAccountID(accountID, amount);
      return money;
    } catch (error) {
      console.log(error);
    }
  }

  //transfer from one person to another person
  static transferFromUserToUser(
    senderPersonID,
    senderAccountID,
    receiverPersonID,
    receiverAccountID,
    amount
  ) {
    try {
      let senderPerson = Bank.getPersonByID(senderPersonID);
      let receiverPerson = Bank.getPersonByID(receiverPersonID);

      senderPerson.debitAmountByAccountID(senderAccountID, amount);

      receiverPerson.creditAmountByAccountID(receiverAccountID, amount);

      console.log(
        `Rs ${amount} has been debited from ${senderPerson.getPersonFullName()} and credited to ${receiverPerson.getPersonFullName()},ThankYou for performing the transaction...`
      );
    } catch (error) {
      console.log(error);
    }
  }

  //transfer within same user account by account id
  static transferWithinSameUserAccounts(
    personID,
    senderAccountID,
    receiverAccountID,
    amount
  ) {
    try {
      let person = Bank.getPersonByID(personID);
      person.transferWithinSameUserAccounts(
        senderAccountID,
        receiverAccountID,
        amount
      );
      console.log(
        `Rs ${amount} has been debited from ${person.getPersonFullName()}'s  account ${senderAccountID} to account ${receiverAccountID}`
      );
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = Bank;
