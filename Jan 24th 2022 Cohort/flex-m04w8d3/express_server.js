const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");

const app = express();

app.listen(4000);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(morgan("dev"));
