const express = require("express");
const app = express();
const mongoose = require("mongoose");
const port = 8080;
const Listing = require("./models/listing");
const wrapAsync = require("./utils/wrapAsync");
const ExpressError = require("./utils/ExpressError");
const productRouter = require("./routes/product");
const reviewRouter = require("./routes/review");
const userRouter = require("./routes/user");
const cors = require("cors");
app.use(cors({
  origin: 'http://localhost:5173', // Allow requests from your React app
  credentials: true, // Allow credentials
}));
const sessionOptions = {
  secret: "thisiscode",
  resave: false,
  saveUninitialized: true,
  cookie:{
    expires:Date.now() + 7 * 24 * 60 *60 *1000,
    maxAge:7 * 24 * 60 *60 *1000,
    httpOnly:true
  }
};
const session = require("express-session");
const passport = require("passport")
const LocalStrategy = require("passport-local");
const User = require("./models/signUp")


app.use(cors(corsOptions));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(session(sessionOptions));
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));


passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());




mongoose
  .connect("mongodb://127.0.0.1:27017/viecom")
  .then(() => console.log("Connected!"))
  .catch((error) => console.log(error));

app.get(
  "/",
  wrapAsync(async (req, res) => {
    const data = await Listing.find({});
    res.send(data);
  })
);



app.use("/product", productRouter);
app.use("/product/:id/rating", reviewRouter);
app.use("/", userRouter);

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
