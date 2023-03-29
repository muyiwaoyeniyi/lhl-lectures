const express = require("express");
const morgan = require("morgan");

const app = express();

app.set("view engine", "ejs");

const books = require("./books.json");

app.use(morgan("dev"));
// app.use((req, res, next) => {
//   // todo
//   console.log("user visited page ", req.url);
//   next();
// });

app.get("/", (req, res) => {
  // res.write("Welcome to the home page");
  // res.send();

  // res.end("Welcome to the home page");
  // res.json({ route: "homepage" });
  // res.end('<div style="background: red">Homepage</div>');

  res.render("books", { name: "Harry Potter" });
});

app.get("/signup", (req, res) => {
  // console.log("User is on signup page");
  res.end("Please sign up!");
});

// /books/harrypotter
// /books/coding

// "/books/:bookId" => { bookId: 'coding' }

app.get("/books/:bookId", (req, res) => {
  // console.log("User is on book show page");

  console.log(req.params);
  const book = books[req.params.bookId];
  // res.end(`Book id is ${req.params.bookId}`);
  // res.json(book);
  const templateVars = {
    book,
    page: "book show page",
  };
  res.render("book", templateVars);
});

app.listen(9001, () => {
  console.log("express server started!");
});
// app.post()
// app.delete()
