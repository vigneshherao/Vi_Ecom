const express = require("express");
const wrapAsync = require("../utils/wrapAsync");
const {validateReview} = require("../utils/ValidationError");
const Rating = require("../models/review");
const router = express.Router({mergeParams:true});
const Listing = require("../models/listing");

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
      console.log(ok)
      await product.save();
      res.sendStatus(200);
    })
  );


  router.post("/:rating_id", wrapAsync(async (req, res) => {
    const { rating_id } = req.params;
    const deletedRating = await Rating.findByIdAndDelete(rating_id);
    if (deletedRating) {
        res.status(200).json({ message: "Rating deleted successfully" });
    } else {
        res.status(404).json({ message: "Rating not found" });
    }
}));


  module.exports = router;