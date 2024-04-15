const express = require("express");
const app = express();
const mongoose = require("mongoose");
const port = 8080;
const Listing = require("./models/listing");

mongoose
  .connect("mongodb://127.0.0.1:27017/viecom")
  .then(() => console.log("Connected!"))
  .catch((error) => console.log(error));

app.get("/", async (req, res) => {
  try {
    const data = await Listing.find({})
      .then((data) => console.log(data))
      .catch(() => {
        console.log("data is not found in db");
      });
    res.send(data);
  } catch (error) {
    console.log(error);
  }
});

app.listen(port, () => {
  console.log("server is running in port " + port);
});
