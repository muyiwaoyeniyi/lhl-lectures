const http = require("http");

const server = http.createServer((request, response) => {
  console.log("request, ", request.method, request.url);

  const route = `${request.method} ${request.url}`; // GET /login, GET /, POST /

  if (route === "GET /" || route === "GET /signup") {
    response.write("Homepage");
  } else if (route === "GET /login") {
    response.write("Please sign in");
  } else {
    response.write("404 Page doesn't exist :(");
  }
  response.end();
});

server.listen(9000, () => {
  console.log("server is listening");
});
