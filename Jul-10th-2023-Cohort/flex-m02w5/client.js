const net = require("net");
const readline = require("readline");

const client = net.createConnection({
  host: "127.0.0.1",
  port: 5000,
});

client.setEncoding("utf8");

// end
// closed
// disconnect
client.on("data", (data) => {
  console.log("Client received data!!!", data);
});

const rl = readline.createInterface({
  input: process.stdin,
});

rl.on("line", (line) => {
  //console.log("Line is ...", line);
  client.write(line);
});
