const mongoose = require("mongoose");
const Rating = require("./review");

const listingSchema = mongoose.Schema({
  id: Number,
  title: String,
  price: Number,
  description: String,
  images: [String],
  category: {
    id: Number,
    name: String,
    image: String,
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
  },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  ratings: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Rating",
    },
  ],
});

const Listing = mongoose.model("Listing", listingSchema);

module.exports = Listing;
