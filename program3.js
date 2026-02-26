let electricityBill = function(units){
    return units;
}       
let unitsConsumed = 150;  
let billAmount = electricityBill(unitsConsumed) * 5;                
console.log("Electricity Bill Amount: " + billAmount);

if(billAmount > 500){       
    console.log("High Bill Amount");
}
else{
    console.log("Bill Amount is within limit");
}

