const express = require("express");
const app = express();

app.set("view engine", "ejs");

const books = require("./books.json");

app.use((req, res, next) => {
  console.log("in middleware 1");
  next();
});

// http method and a route/path

app.get("/", (request, response) => {
  // response.write("Homepage");
  // response.send();

  // send me an email about the route here

  // response.end("Homepage");
  // response.json({ page: "Homepage" });
  // response.end('<div style="background: red;">hello world!</div>');
  const templateVars = { list: books, storeName: "Amazon" };
  response.render("books", templateVars);
});

app.get("/books/:id", (request, response) => {
  // send me an email about the route here
  // params
  console.log(request.params.id);
  response.render("book", { book: books[request.params.id] });
});

app.get("/signup", (request, response) => {
  // send me an email about the route here

  // response.write("Homepage");
  // response.end();

  response.end("Homepage");
});

app.get("/login", (request, response) => {
  response.write("Please sign in here");
  response.end();
});

// catch all route
app.get("*", (request, response) => {
  response.write("404 Page doesn't exist :(");
  response.end();
});

app.listen(9000, () => {
  console.log("express server is up!");
});
