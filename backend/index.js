const express = require("express");
const app = express();
const mongoose = require("mongoose");
const port = 8080;
const Listing = require("./models/listing");
const SignUp = require("./models/signUp");
const wrapAsync = require("./utils/wrapAsync");
const ExpressError = require("./utils/ExpressError");
const validateListing = require("./utils/ValidationError");
const product = require("./routes/product")
const review = require("./routes/review")
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

  
app.use("/product",product);
app.use("/product/:id/rating",review)

app.get("/", wrapAsync(async (req, res) => {
  const data = await Listing.find({})
  res.send(data);
}));

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
