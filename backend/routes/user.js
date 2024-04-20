const express = require("express");
const router = express.Router();
const {validateListing} = require("../utils/ValidationError");
const User = require("../models/signUp");
const wrapAsync = require("../utils/wrapAsync");
const passport = require("passport");

router.post(
    "/signup",
    wrapAsync(async (req, res) => {
      const { username, email, password } = req.body;
      console.log(username,email,password)
      const newUser = new User({
        username,
        email,
      });
      await User.register(newUser,password);
      res.send(200);
    })
  );



  
router.post("/login",passport.authenticate("local"),wrapAsync(async(req,res)=>{

    res.send(200);
}))



router.post("/logout", (req, res, next) => {
  req.logOut((err) => {
    if (!err) {
      return res.status(200).send("User logged out successfully!");
    }
    next(err);
  });
});


  module.exports = router;