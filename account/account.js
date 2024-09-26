class Account {
  accountBalance;

  constructor(accountID, accountBalance) {
    this.accountID = accountID;
    this.accountBalance = accountBalance;
  }
  //getters
  getAccountID() {
    return this.accountID;
  }
  getAccountBalance() {
    return this.accountBalance;
  }

  static newAccount(accountID) {
    if (accountID < 0) throw new Error("Enter a valid account ID!");
    let initialBalance = 1000;
    let account = new Account(accountID, initialBalance);
    return account;
  }

  depositUserAccountByID(amount) {
    try {
      if (amount <= 0) throw new Error("enter a valid amount to deposit!");
      this.accountBalance += amount;
    } catch (error) {
      throw error;
    }
  }

  //withdraw money by account id
  withdrawMoneyByAccountID(amount) {
    try {
      if (amount <= 0) throw new Error("enter a valid money to withdraw!");
      if (this.getAccountBalance() <= 1000)
        throw new Error(
          "oops you cannot withdraw money since you have to maintain a minimum of Rs 1000 in account!"
        );

      if (amount > 200000)
        throw new Error(
          "oops you can withdraw a maximum of 200000 from one withdrawal!"
        );

      let accountBalance = this.getAccountBalance();
      if (accountBalance - amount < 1000)
        throw new Error(
          "oops you cannot withdraw money since you have to maintain a minimum of Rs 1000 in account!"
        );

      accountBalance -= amount;
      this.accountBalance = accountBalance;
      return amount;
    } catch (error) {
      throw error;
    }
  }

  //debit by account id
  debitAmountByAccountID(amount) {
    try {
      if (amount <= 0) throw new Error("Enter a valid amount to debit....");
      if (this.getAccountBalance() <= 1000)
        throw new Error(
          "oops you cannot transfer money since you have to maintain a minimum of Rs 1000 in account!"
        );

      let accountBalance = this.getAccountBalance();
      if (accountBalance - amount < 1000)
        throw new Error(
          "oops you cannot transfer money since you have to maintain a minimum of Rs 1000 in account!"
        );

      accountBalance -= amount;
      this.accountBalance = accountBalance;
    } catch (error) {
      throw error;
    }
  }

  //credit by account id
  creditAmountByAccountID(amount) {
    try {
      if (amount < 0) throw new Error("invalid amount to credit...");
      let accountBalance = this.getAccountBalance();
      accountBalance += amount;
      this.accountBalance = accountBalance;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = Account;
