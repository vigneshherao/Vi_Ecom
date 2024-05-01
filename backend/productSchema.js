const Joi = require("joi");

const productSchema = Joi.object({
  id: Joi.number().required(),
  title: Joi.string().required(),
  price: Joi.number().required(),
  description: Joi.string().required(),
  images: Joi.array().items(Joi.string()).required(),
  category: Joi.object({
    id: Joi.number().required(),
    name: Joi.string().required(),
    image: Joi.string().required(),
  }).required(),
});

module.exports = productSchema;
