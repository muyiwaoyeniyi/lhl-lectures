const express = require("express");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");

const app = express();
const port = 4545;

app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.set("view engine", "ejs");

app.listen(port, () => console.log(`Express listening on port ${port}`));

const users = {
  1: {
    id: 1,
    name: "Tom hanks",
    email: "abc@yahoo.com",
    password: 123,
  },
  2: {
    id: 2,
    name: "Debra Morgan",
    email: "debra@morgan.com",
    password: 234,
  },
};

const findUserByEmail = (email) => {
  for (const userId in users) {
    const user = users[userId];
    if (user.email === email) {
      return user;
    }
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
  const email = req.body.email.trim();
  const password = req.body.password.trim();

  console.log(email, password);

  if (!email || !password) {
    return res.status(400).send("Invalid credentials");
  }

  const user = findUserByEmail(email);
  console.log("user", user);

  if (!user || user.password !== parseInt(password)) {
    return res.status(400).send("Invalid credentials");
  }

  res.cookie("user", { id: user.id, name: user.name });
  res.redirect("/");
});

app.post("/logout", (req, res) => {
  res.clearCookie("user");
  res.redirect("/");
});

app.get("/protected", (req, res) => {
  const user = req.cookies.user;

  if (!user || !users[user.id]) {
    return res.status(401).send("Unauthorized");
  }

  res.render("protected");
});
