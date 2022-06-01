// const cors = require("cors"); // use proxy
const morgan = require("morgan");
const uniqid = require("uniqid");
const express = require("express");

const PORT = 5000;

const app = express();

// app.use(cors());
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));

let data = [
  { id: uniqid(), task: "clean up", done: true },
  { id: uniqid(), task: "buy milk", done: false },
  { id: uniqid(), task: "wash dishes", done: false },
];

app.get("/api/v1/lists", (req, res) => {
  res.json(data);
});

// headers, params, query, body
app.delete("/api/v1/items/:itemId", (req, res) => {
  data = data.filter((item) => item.id !== req.params.itemId);
  res.json({});
});

app.listen(PORT, () => {
  console.log("Server started");
});
