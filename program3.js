let units = ("Enter units consumed:");
let bill;

if (units <= 100) {
    bill = units * 5;
} else {
    bill = units * 8;
}

console.log("Total Bill = Rs.", bill);
