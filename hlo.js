const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter Principal: ", function(p) {
  rl.question("Enter Rate: ", function(r) {
    rl.question("Enter Time: ", function(t) {

      p = parseFloat(p);
      r = parseFloat(r);
      t = parseFloat(t);

      let si = (p * r * t) / 100;

      console.log("Simple Interest =", si);
      rl.close();
    });
  });
});
