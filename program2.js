let balance = 10000;
let amount = ("Enter amount to withdraw:");

if (amount <= balance) {
    balance = balance - amount;
    console.log("Withdraw Successful");
    console.log("Remaining Balance =", balance);
} else {
    console.log("Insufficient Balance");
}
