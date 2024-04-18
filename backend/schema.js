const Joi = require("joi");

module.exports = SignUpSchema = Joi.object({
  name: Joi.string().required(),
  password: Joi.string().required(),
  email: Joi.string().email({
    minDomainSegments: 2,
    tlds: { allow: ["com", "net"] },
  }),
});


module.exports = reviewSchema = Joi.object({
  rating:Joi.number().min(1).max(5).required(),
  comment:Joi.string().required()

})
