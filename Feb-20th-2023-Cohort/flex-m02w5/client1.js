const net = require("net");
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
});

// creating a coonnection with a server
const client = net.createConnection({
  host: "127.0.0.1", // localhost
  port: 5000,
});

// set the encoding
client.setEncoding("utf8");

client.on("data", (data) => {
  console.log("client received data", data);
});

rl.on("line", (line) => {
  // console.log("You entered", line);
  client.write(line);
});
