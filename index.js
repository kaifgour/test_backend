const express = require("express"); //import express form express
require("dotenv").config();
const app = express();
const port = 4000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/insta", (req, res) => {
  res.send("kaifi5<h1>This is Home page</h1>");
});

app.get("/home", (req, res) => {
  res.send("<h1>This is Home page</h1>");
});

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`);
});
