
function takeOrder() {
  console.log("Customer order taken.");
}

function prepareFood() {
  return new Promise((resolve) => {
    console.log("Food is being prepared...");
    
    setTimeout(() => {
      resolve("Food is ready.");
    }, 3000);
  });
}

function serveFood() {
  console.log("Food served to customer.");
}

async function restaurant() {
  console.log("Restaurant Opened");

  takeOrder();

  let result = await prepareFood(); 
  console.log(result);

  serveFood();

  console.log("Restaurant Closed");
}

restaurant();
