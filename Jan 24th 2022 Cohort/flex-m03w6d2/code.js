const express = require("express");
const morgan = require("morgan");
const PORT = 5000;

const app = express();

const cars = {
  5: {
    id: 5,
    color: "red",
    make: "Toyota",
    model: "Tacoma",
    year: 2005,
  },
  10: {
    id: 10,
    color: "purple",
    make: "Ford",
    model: "F-150",
    year: 2010,
  },
};

app.set("view engine", "ejs");
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));

app.listen(PORT, () => {
  console.log("App is listening on ", PORT);
});

// On 1 or many resources
// C - Create
// R - Read
// U - Update
// D - Delete/Destroy
// GET - Read
// POST - Create
// Delete - Delete
// Put/Patch - Update

// User Resource
// /users      --- get req to list all users
// /users      --- post req to create new user
// /users/(id) --- get req to show specific user
// /users/(id) --- put req to update specific user
// /users/(id) --- del req to remove specific user

app.get("/cars", (req, res) => {
  console.log(cars);
  const templateVars = { cars: cars, paintColor: "red" };
  res.render("cars", templateVars);
});

// headers, body (form), url params/path, url query
app.get("/cars/:car_id", (req, res) => {
  // TODO
  const carId = req.params.car_id;
  const car = cars[carId];

  res.render("car", { car });
});

app.post("/cars", (req, res) => {
  const id = Number(Object.keys(cars).reverse()[0] || 0) + 1;
  const newCar = {
    id,
    color: req.body.color,
    make: req.body.make,
    model: req.body.model,
    year: req.body.year,
  };

  cars[id] = newCar;

  res.redirect("/cars");
});

app.post("/cars/:car_id/delete", (req, res) => {
  const carId = req.params.car_id;
  delete cars[carId];
  res.redirect("/cars");
});

app.post("/cars/:car_id", (req, res) => {
  const carId = req.params.car_id;
  const newColor = req.body.color;
  cars[carId].color = newColor;
  res.redirect("/cars");
});
