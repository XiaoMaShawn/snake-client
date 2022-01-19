const net = require("net");
const { stdin } = require("process");
const { IP, PORT } = require("./constants");


const connect = function() {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on('connect', () => {
    console.log('Successfully connected to game server');
    conn.write('Name: XMS');
    conn.write('Say: LOL')
    // setInterval(() => { conn.write("Move: up") }, 50)

  })

  conn.on("data", (data) => {
    // code that log out data when player get it from the server.
    console.log('Server says: ', data);
  });

  return conn;
};

module.exports = { connect };