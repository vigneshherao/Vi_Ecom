const express = require("express");
const wrapAsync = require("../utils/wrapAsync");
const router = express.router();

router.get(
  "/:id",
  wrapAsync(async (req, res) => {
    let { id } = req.params;
    const data = await Listing.findById(id).populate("ratings");
    res.send(data);
  })
);

module.exports = router;
