const Joi = require("joi");

const customerValidator = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().required().min(8),
});

const productValidator = Joi.object({
  name: Joi.string().required(),
  price: Joi.string().email().required(),
  description: Joi.string().required().min(8),
});

module.exports = { customerValidator, productValidator };
