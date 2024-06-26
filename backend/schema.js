const Joi = require("joi");

module.exports = SignUpSchema = Joi.object({
  username: Joi.string().required(),
  password: Joi.string().required(),
  email: Joi.string().email({
    minDomainSegments: 2,
    tlds: { allow: ["com", "net"] },
  }),
});


