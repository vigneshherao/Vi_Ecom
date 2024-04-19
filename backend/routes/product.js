const express = require("express");
const wrapAsync = require("../utils/wrapAsync");
const Listing = require("../models/listing");
const router = express.Router({mergeParams:true});

router.get(
  "/:id",
  wrapAsync(async (req, res) => {
    let { id } = req.params;
    console.log(id)
    const data = await Listing.findById(id).populate("ratings");
    res.send(data);
  })
);

module.exports = router;
