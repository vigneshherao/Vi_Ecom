const SignUpSchema = require("../schema");
const reviewSchema = require("../reviewSchema");
const ExpressError = require("./ExpressError");


module.exports.validateListing = (req,res,next)=>{
    const {error} = SignUpSchema.validate(req.body);
    if(error){
      throw new ExpressError(400,error.message);
    }
    next();
  }
 module.exports.validateReview = (req,res,next)=>{
    const {error} = reviewSchema.validate(req.body);
    if(error){
      throw new ExpressError(400,error.message);
    }
    next();
  }