const express = require("express");
const app = express();
const mongoose = require("mongoose");
const port = 8080;
const Listing = require("./models/listing");
const SignUp = require("./models/signUp");
const wrapAsync = require("./utils/wrapAsync");
const ExpressError = require("./utils/ExpressError");
const validateListing = require("./utils/ValidationError");
const validateReview = require("./utils/ValidationError");
const Rating = require("./models/review");

const cors = require("cors");
const corsOptions = {
  origin: "http://localhost:5173",
};

app.use(cors(corsOptions));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

mongoose
  .connect("mongodb://127.0.0.1:27017/viecom")
  .then(() => console.log("Connected!"))
  .catch((error) => console.log(error));

app.get("/", async (req, res) => {
  try {
    const data = await Listing.find({})
      .then((data) => res.send(data))
      .catch(() => {
        console.log("data is not found in db");
      });
  } catch (error) {
    console.log(error);
  }
});

app.post(
  "/login",
  validateListing,
  wrapAsync(async (req, res) => {
    const { name, email, password } = req.body;
    const newUser = new SignUp({
      name,
      email,
      password,
    });
    await newUser.save();
    res.send("working");
  })
);

app.get("/product/:id", async (req, res) => {
  let { id } = req.params;
  try {
    await Listing.findById(id).populate("ratings")
      .then((data) => {
        res.send(data);
      })
      .catch((error) => console.log(error));
  } catch (error) {
    console.log(error);
  }
});

//review route for rating

app.post(
  "/product/:id/rating",
  validateReview,
  wrapAsync(async (req, res) => {
    const { rating, comment } = req.body;
    const product = await Listing.findById(req.params.id);
    const ratingDB = new Rating({
      rating,
      comment,
    });
    await ratingDB.save();
    const ok = product.ratings.push(ratingDB);

    await product.save();
    res.sendStatus(200);
  })
);

app.all("*", (req, res, next) => {
  next(new ExpressError(500, "Error occured in request"));
});

app.use((err, req, res) => {
  console.log("Error Found");
  let { status = 404, message = "unhalded" } = err;
  res.status(status).send(message);
});

app.listen(port, () => {
  console.log("server is running in port " + port);
});
