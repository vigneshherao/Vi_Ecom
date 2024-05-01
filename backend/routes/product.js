const express = require("express");
const wrapAsync = require("../utils/wrapAsync");
const Listing = require("../models/listing");
const { validateProduct } = require("../utils/ValidationError");
const router = express.Router({ mergeParams: true });

router.get(
  "/:id",
  wrapAsync(async (req, res) => {
    let { id } = req.params;
    console.log(id);
    const data = await Listing.findById(id).populate("ratings");
    res.send(data);
  })
);

router.post(
  "/add",
  validateProduct,
  wrapAsync(async (req, res) => {
    const productDetail = req.body;
    const newProduct = new Listing(productDetail);
    await newProduct.save();
    res.status(200).json({ message: "Product added successfully" });
  })
);

module.exports = router;
