const express = require("express");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");

const app = express();
const port = 4545;

app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser()); // cookies

app.set("view engine", "ejs");

app.listen(port, () => {
  console.log("server is up!");
});

const users = {
  1: {
    id: 1,
    email: "abc@gmail.com",
    name: "Tom Hanks",
    password: "123",
  },
  2: {
    id: 2,
    email: "xyz@gmail.com",
    name: "Debra Morgan",
    password: "456",
  },
};

const findUserByEmail = (email) => {
  for (const userId in users) {
    const user = users[userId];
    if (user.email === email) return user;
  }

  return null;
};

app.get("/", (req, res) => {
  const templateVars = { cookies: req.cookies };
  res.render("home", templateVars);
});

app.get("/login", (req, res) => {
  res.render("login");
});

app.post("/login", (req, res) => {
  console.log("body", req.body);
  console.log("cookies", req.cookies);

  const email = req.body.email.trim();
  const password = req.body.password;

  if (!email || !password) {
    return res.status(401).send("Invalid credentials");
  }

  const user = findUserByEmail(email);

  if (user && user.password === password) {
    res.cookie("user", { id: user.id, name: user.name });
    res.redirect("/dashboard");
  } else {
    return res.status(401).send("Invalid credentials");
  }
});

app.get("/dashboard", (req, res) => {
  const user = req.cookies.user;

  if (user && users[user.id]) {
    res.render("dashboard");
  } else {
    res.redirect("/login");
  }
});

app.post("/logout", (req, res) => {
  res.clearCookie("user");
  res.redirect("/");
});
