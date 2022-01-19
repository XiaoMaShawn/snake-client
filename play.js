const net = require("net");

// const connect = require("./client");

// establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: '165.227.47.243',
    port: 50541
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("data", (data) => {
    // code that log out data when player get it from the server.
    console.log('Server says: ', data);
  });

  return conn;
};

// const connect = require('./client')

console.log("Connecting ...");
connect();

