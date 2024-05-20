const population = require('../public/json/country-by-population.json')
const flag = require("../public/json/country-by-flag.json")
const express = require("express");
const app = express();
const PORT = 3003;
const path = require("path");
const viewsDirectory = path.join(process.cwd(), "views");
const fs = require('fs');

//MIDDLEWARE
app.use(express.static(path.join(__dirname, "public")));
app.use(express.static("public"));
app.set("views", viewsDirectory);
app.set("view engine", "pug");

app.listen(PORT, () => {
  console.log(PORT);
});

app.get("/", (req, res) => {
  res.render("index");
});

