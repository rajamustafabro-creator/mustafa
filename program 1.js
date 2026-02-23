const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter sentence: ", function(sentence) {

  let words = sentence.trim().split(/\s+/);
  console.log("Total words:", words.length);

  rl.close();
});
