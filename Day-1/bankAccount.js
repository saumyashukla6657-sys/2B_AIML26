class Account {
    constructor(accountNumber, accountHolder, balance){
        this.accountNumber = accountNumber;
        this.accountHolder = accountHolder;
        this.balance = balance;
    }

    deposit(amount){
        this.balance += amount;
        console.log(`Deposited: ${amount}. New Balance: ${this.balance}`);
    }   
    withdraw(amount){
        if(amount <= this.balance){
            this.balance -= amount;
            console.log(`Withdrew: ${amount}. New Balance: ${this.balance}`);
        } else {
            console.log("Insufficient balance.");
        }
        
        
    }
    display() {
            console.log(`Account Number: ${this.accountNumber}`);
            console.log(`Account Holder: ${this.accountHolder}`);
            console.log(`Balance: ${this.balance}`);
        }
}

    let A1 = new Account(123456, "John Doe", 1000); 
    A1.display();   
    A1.deposit(500);
    A1.withdraw(200);
    A1.withdraw(1500);
    console.log("After transactions:");
    A1.display();