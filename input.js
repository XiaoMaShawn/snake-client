let connection;
let { connect } = require('./client');

const setupInput = (conn) => {
  connection = conn;
  // const setupInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);

  return stdin;
};

const handleUserInput = function(data) {
  // your code here
  if (data === '\u0003') {
    process.exit();
  }
  if (data === 'w') {
    connection.write("Move: up");
    // console.log("Move: up");

  }
  if (data === 'a') {
    connection.write("Move: left");
    // console.log("Move: left");
  }
  if (data === 's') {
    connection.write("Move: down");
    // console.log("Move: down");
  }
  if (data === 'd') {
    connection.write("Move: right");
    // console.log("Move: right");
  }
};

setupInput(connect());

module.exports = { setupInput };