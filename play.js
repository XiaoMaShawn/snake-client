
// const connect = require('./client');

const { connect } = require("./client");
const { setupInput } = require("./input");

// // setup interface to handle user input from stdin
// const setupInput = function() {
//   const stdin = process.stdin;
//   stdin.setRawMode(true);
//   stdin.setEncoding("utf8");
//   stdin.resume();
//   stdin.on("data", handleUserInput);

//   return stdin;
// };

// const handleUserInput = function(data) {
//   // your code here
//   // stdin.on('data', (key) => {
//   // \u0003 maps to ctrl+c input
//   // if (key === '\u0003') {
//   //   process.exit();
//   // }
//   // })
//   if (data === '\u0003') {
//     process.exit();
//   }
// };


console.log("Connecting ...");
connect();
setupInput();


