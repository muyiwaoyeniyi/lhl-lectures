const net = require("net");
const port = 9876;

const server = net.createServer();
server.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

let id = 0;
const nextId = () => {
  return id++;
};

/* OR use a closure with an immediately invoked function!
const nextId = (() => {
  let id = 0;
  return () => {
    return id++;
  }
})();*/

const listOfClients = [];

const writeToAllClients = (data, client, listOfClients) => {
  for (const individualClient of listOfClients) {
    if (individualClient.id !== client.id) {
      individualClient.write(`\t: ${data}`);
    }
  }
};

// listening for when a client connects
server.on("connection", (client) => {
  // NOTE: client = connection
  client.setEncoding("utf8");

  console.log(client.toString());

  client.id = nextId();

  listOfClients.push(client);

  console.log(`${client.avatar} ${client.id} is connected to the server`);

  // sending data to our client
  client.write("Welcome to our server!\n");
  client.write(`Your avatar is ${client.avatar} and id is ${client.id}\n`);

  // listening for data coming from our client
  client.on("data", (data) => {
    console.log(`${client.id}: ${data}`);
    writeToAllClients(data, client, listOfClients);
  });
});
