
function takeOrder() {
  console.log("Customer order taken.");
}


function prepareFood() {
  console.log("Food is being prepared...");
  
  for (let i = 0; i < 1000000000; i++) {
  }

  console.log("Food is ready.");
}

function serveFood() {
  console.log("Food served to customer.");
}

console.log("Restaurant Opened");

takeOrder();
prepareFood();
serveFood();

console.log("Restaurant Closed");
