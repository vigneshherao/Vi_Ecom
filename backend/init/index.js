const mongoose = require("mongoose");
const products = require("./listingData");
const Listing = require("../models/listing");


mongoose
  .connect("mongodb://127.0.0.1:27017/viecom")
  .then(() => console.log("Connected!"))
  .catch((error) => console.log(error));



const dataInit =async ()=>{
    await Listing.deleteMany();
    await Listing.insertMany(products);
    console.log("data added to database");
}

dataInit();

