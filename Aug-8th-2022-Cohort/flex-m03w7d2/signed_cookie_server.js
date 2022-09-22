const express = require("express");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");

const PORT = 5000;

const app = express();

app.set("view engine", "ejs");

app.use(morgan("dev"));
app.use(cookieParser("some random secret here"));
app.use(bodyParser.urlencoded({ extended: true }));

/* FAKE DATABASE */
const users = {
  123: {
    id: "123",
    name: "Louie Louie",
    email: "louie@louie.com",
    password: "abcd",
  },
  234: {
    id: "234",
    name: "Cat Dog",
    email: "catdog@hungry.com",
    password: "meow",
  },
};

const findUser = (email, password) => {
  const usersAry = Object.values(users);
  const user = usersAry.find((user) => {
    return user.email === email && user.password === password;
  });
  return user;
};

app.get("/", (req, res) => {
  let user;

  console.log(req.signedCookies);

  if (req.signedCookies.user_id) {
    user = users[req.signedCookies.user_id];
  }

  res.render("home", { user });
});

app.get("/login", (req, res) => {
  res.render("login");
});

app.post("/login", (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).send("Email or password can't be blank");
  }

  const user = findUser(email, password);
  console.log("user", user);

  if (!user) {
    return res.status(400).send("Invalid credentials");
  }
  res.cookie("user_id", user.id, { signed: true });
  res.redirect("/");
});

app.post("/logout", (req, res) => {
  res.clearCookie("user_id");
  res.redirect("/");
});

app.listen(PORT, () => {
  console.log("Server is running!");
});
