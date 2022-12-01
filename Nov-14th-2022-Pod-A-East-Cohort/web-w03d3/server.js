const express = require("express");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");

const app = express();
const port = 4545;

app.use(morgan("dev"));

app.use(express.urlencoded({ extended: false })); // body-parser
app.use(cookieParser());

app.set("view engine", "ejs");

app.listen(port, () => console.log("App is running!!"));

const users = {
  1: {
    id: 1,
    name: "tom Hanks",
    email: "tom@hanks.com",
    password: "123",
  },
  2: {
    id: 1,
    name: "Debra Morgan",
    email: "debra@morgan.com",
    password: "234",
  },
};

const findUserByEmail = (email) => {
  const usersAry = Object.values(users); // or for in
  const user = usersAry.find((user) => user.email === email);
  return user;
};

app.get("/", (req, res) => {
  const { user } = req.cookies;

  res.render("home", { user });
});

app.get("/login", (req, res) => {
  res.render("login");
});

app.post("/login", (req, res) => {
  const email = req.body.email.trim();
  const { password } = req.body;

  console.log(email, password);

  if (!email || !password) {
    return res.status(400).send("Invalid credentials");
  }

  const user = findUserByEmail(email);

  if (!user || user.password !== password) {
    return res.status(400).send("Invalid credentials");
  }

  res.cookie("user", { id: user.id, name: user.name });
  res.redirect("/");
});

app.get("/protected", (req, res) => {
  const user = req.cookies.user;

  if (user) {
    res.render("protected");
  } else {
    res.redirect("/login");
  }
});

app.post("/logout", (req, res) => {
  res.clearCookie("user");
  res.redirect("/");
});
