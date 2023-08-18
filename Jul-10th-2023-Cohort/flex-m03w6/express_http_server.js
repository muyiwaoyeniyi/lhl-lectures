const express = require("express");
const morgan = require("morgan");

const app = express();

const books = require("./books.json");
// console.log(books);

// middleware

app.set("view engine", "ejs");

app.use(morgan("dev"));
// ex_01 ==> define a simple middleware function that logs all requests
// app.use((req, res, next) => {
//   console.log(`${req.method} ${req.url}`);
//   next()
// })

// ex_02 ==> allow the loading of static files from server only for the `public` folder
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.write("welcome to home page");
  res.send();
  // const templateVars = {
  //   some: "data to pass to the template",
  //   any: "valid JavaScript values can be passed",
  // };
  // res.render("books", templateVars);
});

// query option
// app.get("/book", (req, res) => {
app.get("/book/:book_id", (req, res) => {
  const bookId = req.params.book_id;
  // const bookId = req.query.book_id;
  const book = books[bookId];
  res.json(book);
});

app.listen(9876);
