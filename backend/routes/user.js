const express = require("express");
const router = express.Router();
const { validateListing } = require("../utils/ValidationError");
const User = require("../models/signUp");
const wrapAsync = require("../utils/wrapAsync");
const passport = require("passport");

router.post(
  "/signup",
  wrapAsync(async (req, res, next) => {
    const { username, email, password } = req.body;
    try {
      const newUser = new User({ username, email });
      await User.register(newUser, password);
      req.login(newUser, (err) => {
        if (err) {
          return next(err);
        }
        res.status(200).json(req.session);
      });
    } catch (error) {
      next(error);
    }
  })
);

router.post(
  "/login",
  passport.authenticate("local"),
  wrapAsync(async (req, res) => {
    res.status(200).json(req.session);
  })
);

router.post("/logout", (req, res, next) => {
  req.logOut((err) => {
    if (!err) {
      return res.send(200);
    }
    next(err);
  });
});

module.exports = router;
