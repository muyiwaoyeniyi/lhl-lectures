const { Client } = require("pg");

const config = {
  user: "USER",
  password: "PASSWORD",
  host: "localhost",
  port: "5432",
  database: "sql_intro",
};

const client = new Client(config);

client.connect(() => {
  console.log("Connected to the DB");
});

module.exports = { client };
