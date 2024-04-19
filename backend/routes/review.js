const express = require("express");
const wrapAsync = require("../utils/wrapAsync");
const validateReview = require("../utils/ValidationError");
const Rating = require("../models/review");
const router = express.router({mergeParams:true});

//review route for rating

router.post(
    "/",
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


  module.exports = router;