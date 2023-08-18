const net = require("net");
const port = 5000;

const server = net.createServer();

server.listen(port, () => {
  console.log("Server is listening!!");
});

const allClients = [];

let id = 0;

const nextId = () => {
  id = id + 1;
  return id;
};

server.on("connection", (client) => {
  // console.log("client ---", client);
  allClients.push(client);
  client.setEncoding("utf8");

  client.clientId = nextId();
  client.write("Welcome to the chat room");

  client.on("data", (data) => {
    console.log("data came from client with id ", client.clientId);
    console.log("client sent info -- ", data);

    allClients.forEach((item) => {
      if (item.clientId !== client.clientId) {
        item.write(`Client ${client.clientId} said ${data}`);
      }
    });
  });
});

// 1. Need a way to register a connected client
// 2. When a client broadcast info, send to the other clients

// 80 http
// 443 https
// 5432 - postgres
// 3306 - mysql
// 3000 - local server for web app
// 6379 - redis
