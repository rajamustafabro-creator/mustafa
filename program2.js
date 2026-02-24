
let balance = 1000;


let amountWithdrawn = function(amount){
    return amount;
}
let amount = 200;   
balance = balance - amountWithdrawn(amount);

console.log("Balance after withdrawal: " + balance);

if(balance >= 0){
    console.log("Withdraw successful");
}
else{
    console.log("Insufficient balance");
}


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

let loginAttempts = 3;

if(loginAttempts > 0){
    console.log("Login successful");
}           
else{
    console.log("Login failed");
    console.log("Account locked");      
}

