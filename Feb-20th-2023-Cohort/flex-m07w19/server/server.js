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
  { id: 1, task: "clean up", done: true },
  { id: 2, task: "buy milk", done: false },
  { id: 3, task: "wash dishes", done: false },
  { id: 4, task: "Wash car", done: true },
  { id: 5, task: "Get a haircut", done: false },
  { id: 6, task: "Sleep zzzzzzzzzz", done: false },
  { id: 7, task: "Book travel", done: true },
  { id: 8, task: "Groceries", done: false },
  { id: 9, task: "Read!", done: false },
  { id: 10, task: "Laundry", done: false },
];

const getNextId = () => {
  const lastTaskId = data.slice(-1)[0].id;
  return lastTaskId + 1;
};

app.get("/tasks", (req, res) => {
  const cursor = req.query.cursor;
  if (cursor) {
    const newData = data.filter((item) => item.id > Number(cursor));
    res.json(newData.slice(0, 3));
  } else {
    res.json(data.slice(0, 3));
  }
});

// req.query, req.body, req.headers, req.params
app.delete("/tasks/:id", (req, res) => {
  data = data.filter((item) => item.id !== req.params.id);
  res.json({ success: true });
});

app.listen(PORT, () => {
  console.log("Server started");
});
