class BankAccount {
    constructor(accountNumber, accountHolder, balance) {
        this.accountNumber = accountNumber;
        this.accountHolder = accountHolder;
        this.balance = balance;
    }

    deposit(amount) {
        this.balance += amount;
        console.log(amount, "deposited successfully");
    }
    
    withdraw(amount) {
        if (amount <= this.balance) {
            this.balance -= amount;
            console.log(amount, "withdrawn successfully");
        } else {
            console.log("Insufficient funds");
        }
    }

    displayBalance() {
        console.log("Account Number: ", this.accountNumber);
        console.log("Account Holder: ", this.accountHolder);
        console.log("Balance: ", this.balance);
        console.log("*************************");
    }
    static bankInfo() {
        console.log("Welcome to the Bank");
        console.log("This is a bank account management system");
    }
}
let account1 = new BankAccount(101, "Alice", 5000);
let account2 = new BankAccount(102, "Bob", 3000);

account1.deposit(2000);
account1.withdraw(1000);
account1.displayBalance();
BankAccount.bankInfo();
account2.deposit(1500);
account2.withdraw(5000);
account2.displayBalance();
BankAccount.bankInfo();
