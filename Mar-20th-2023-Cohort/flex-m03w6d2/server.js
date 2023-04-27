const express = require("express");
const morgan = require("morgan");
const PORT = 5000;

const app = express();

app.set("view engine", "ejs");
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));

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

const getNewId = () => {
  return Math.max(...Object.keys(cars)) + 1;
};

// .get(), .post(), .delete()

// READ collection route
app.get("/", (req, res) => {
  const templateVars = {
    cars,
  };
  res.render("cars", templateVars);
});

// tesla.com/cars/modelY                 // path parameters
// tesla.com/cars/modelX                 // path parameters
// tesla.com/cars?model=modelY           // query parameters

// READ a single resource route
app.get("/cars/:carId", (req, res) => {
  // console.log(req.params, req.query);
  const carId = req.params.carId;
  const car = cars[carId];
  const templateVars = {
    car,
  };
  res.render("car", templateVars);
});

// DELETE a single resource
app.post("/cars/:carId/delete", (req, res) => {
  const carId = req.params.carId;
  delete cars[carId];

  res.redirect("/");
});

// path params aka req.params
// query params
// cookies
// headers
// body

// Create a single resource
app.post("/cars", (req, res) => {
  console.log(req.body);
  const color = req.body.color;
  const make = req.body.make;
  const model = req.body.model;
  const year = req.body.year;
  const newId = getNewId();

  cars[newId] = {
    id: newId,
    color,
    make,
    model,
    year,
  };

  // write a process to check if user has maxed out the numbers of like
  // and if yes, delete the oldest like

  res.redirect(`/cars/${newId}`);
});

// Update a single resource
app.post("/cars/:carId", (req, res) => {
  const carId = req.params.carId;
  const color = req.body.color;

  cars[carId].color = color;

  res.redirect(`/`);
});

app.listen(PORT, () => {
  console.log("App started!");
});
