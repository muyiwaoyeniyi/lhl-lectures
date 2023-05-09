const { Client } = require("pg");

// password authentication
// ident authentication etc
const config = {
  user: "USERNAME",
  password: "PASSWORD",
  host: "localhost", // 192.12.13.12
  port: "5432",
  database: "sql_intro",
};

const client = new Client(config);

client.connect(() => {
  console.log("Connected to DB!");
});

module.exports = {
  client,
};
