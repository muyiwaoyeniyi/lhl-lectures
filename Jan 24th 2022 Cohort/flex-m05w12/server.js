const express = require("express");
const morgan = require("morgan");
const {
  getAllAlbums,
  createNewAlbum,
  deleteAlbum,
} = require("./database/queries");
const PORT = 5000;

const app = express();

app.set("view engine", "ejs");

const links = [
  { id: 1, url: "google.com", title: "Google" },
  { id: 2, url: "apple.com", title: "Apple" },
];

app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));

app.get("/albums", (req, res) => {
  getAllAlbums().then((albums) => {
    // console.log("albums", albums);
    const templateVars = { albums };
    res.render("albums", templateVars);
  });
});

// request.params, req.query, req.headers, req.body
app.post("/albums", (req, res) => {
  // Validation code here!!
  createNewAlbum(req.body).then((response) => {
    // console.log(response);
    res.redirect("/albums");
  });
});

app.post("/albums/:albumId/delete", (req, res) => {
  deleteAlbum(req.params.albumId).then((response) => {
    // console.log(response);
    res.redirect("/albums");
  });
  // .catch((err) => {
  //   res.redirect('/albums', { errors: "Unaable to delete album. Try again :("})
  // });
});

app.listen(PORT, () => {
  console.log("Server started");
});
