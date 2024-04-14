const express = require("express");
const app = express();
const mongoose = require('mongoose');
const port = 8080;

mongoose
  .connect("mongodb://127.0.0.1:27017/viecom")
  .then(() => console.log("Connected!"))
  .catch((error) => console.log(error));

app.listen(port, () => {
  console.log("server is running in port " + port);
});

app.get("/", (req, res) => {
  res.send("Working");
});
