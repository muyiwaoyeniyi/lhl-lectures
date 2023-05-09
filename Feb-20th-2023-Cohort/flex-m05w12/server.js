const express = require("express");
const morgan = require("morgan");

const {
  getAllAlbums,
  createAlbum,
  deleteAlbum,
} = require("./database/queries");

const PORT = 5000;

const app = express();

app.set("view engine", "ejs");

app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  getAllAlbums().then((result) => {
    const templateVars = { albums: result.rows };
    res.render("albums", templateVars);
  });
});

// req.query, req.body, req.params, req.headers
app.post("/albums", (req, res) => {
  console.log("req.body is: ", req.body);
  createAlbum(req.body).then((result) => {
    console.log("result is: ", result);
    res.redirect("/");
  });
});

app.post("/albums/:albumId/delete", (req, res) => {
  deleteAlbum(req.params.albumId).then((result) => {
    console.log("result is: ", result);
    res.redirect("/");
  });
});

app.listen(PORT, () => {
  console.log("Server started");
});
