// Initial Balance
let balance = 1000;

// Withdraw Function
let amountWithdrawn = function(amount){
    return amount;
}

// Amount to withdraw
let amount = 200;   // Yahan withdrawal amount likho

// Deduct balance
balance = balance - amountWithdrawn(amount);

// Check balance
console.log("Balance after withdrawal: " + balance);

if(balance >= 0){
    console.log("Withdraw successful");
}
else{
    console.log("Insufficient balance");
}


// Card Verification
let cardVerification = function(cardNumber){
    return cardNumber;
}

let cardNumber = 1234567890;

if(cardVerification(cardNumber) === 1234567890){
    console.log("Card verified");
}       
else{
    console.log("Card verification failed");
}


// Login Attempts
let loginAttempts = 3;

if(loginAttempts > 0){
    console.log("Login successful");
}           
else{
    console.log("Login failed");
    console.log("Account locked");      
}
