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

const getNextId = () => {
  const ids = Object.keys(cars);
  const lastId = ids[ids.length - 1];
  return Number(lastId) + 1;
};

app.get("/cars", (req, res) => {
  const templateVars = {
    cars,
  };
  res.render("cars", templateVars);
});

app.post("/cars", (req, res) => {
  const { color, model, make, year } = req.body;
  const newId = getNextId();
  cars[newId] = {
    id: newId,
    color,
    model,
    make,
    year,
  };
  res.redirect(`/cars/${newId}`);
});

// req.params ... { carId: 5, color: 'red' }
// req.query .... { type: 'suv', doors: '4' }
// req.body
// req.headers

app.get("/cars/:carId", (req, res) => {
  const carId = req.params.carId;
  const templateVars = {
    car: cars[carId],
  };
  res.render("car", templateVars);
});

app.post("/cars/:carId", (req, res) => {
  const carId = req.params.carId;
  const { color, make } = req.body;

  cars[carId].color = color;
  cars[carId].make = make;

  res.redirect("/cars");
});

app.post("/cars/:carId/delete", (req, res) => {
  const carId = req.params.carId;
  delete cars[carId];
  res.redirect("/cars");
});

app.listen(PORT, () => {
  console.log("server is running");
});
