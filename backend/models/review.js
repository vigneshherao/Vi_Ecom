const mongoose = require("mongoose");

const ratingSchema = mongoose.Schema({
    comment:{
        type:String,
        required:true
    },
    rating:{
        type:Number,
        min:1,
        max:5,
        required:true
    },
    createdAt:{
        type:Date,
        default:Date.now()
    }
})


const Rating = mongoose.model("Rating",ratingSchema);


module.exports = Rating;