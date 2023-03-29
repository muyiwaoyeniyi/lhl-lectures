const http = require("http");

const server = http.createServer((req, res) => {
  console.log("server received request!!", req.url, req.method);

  const route = `${req.method} ${req.url}`; // GET /, POST /, PUT /signup

  if (route === "GET /") {
    res.end("Welcome to the home page");
  } else if (route === "GET /signup") {
    res.end("Please sign up!");
  } else {
    res.end("404 sorry :( \n\n"); // 404
  }
});

server.listen(9000, () => {
  console.log("Server is listening");
});

// tesla.com

// GET tesla.com/   --- return html
// POST tesla.com/  --- add user to waitlist
// PUT tesla.com
// DELETE tesla.com/

// GET tesla.com/signup   --- return sign up page html
// POST tesla.com/signup  --- sign up the user
