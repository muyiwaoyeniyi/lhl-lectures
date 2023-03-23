const net = require("net");
const port = 5000;

const server = net.createServer();

server.listen(port, () => {
  console.log("server is listening");
});

// events
// data, connection, end, close

let id = 0;

const nextId = () => {
  id = id + 1;
  return id;
};

const allClients = [];

server.on("connection", (client) => {
  allClients.push(client);

  client.setEncoding("utf8");

  client.clientId = nextId();
  client.write("You're welcome to the chat room");

  client.on("data", (data) => {
    console.log("data came from client id", client.clientId);
    console.log("client sent this data", data);

    for (const individualClient of allClients) {
      if (individualClient.clientId !== client.clientId) {
        individualClient.write(`Client ${client.clientId} said ${data}`);
      }
    }
  });
});
