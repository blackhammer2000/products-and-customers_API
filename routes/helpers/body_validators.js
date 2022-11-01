const {
  customerValidator,
  productValidator,
} = require("../../validators/joi_validators");

async function validateCustomerBody(req, res, next) {
  try {
    const validBody = await customerValidator.validateAsync(req.body);

    if (!validBody) throw new Error(validBody);

    req.body = validBody;

    next();
  } catch (err) {
    res.json({ error: err.message });
  }
}

async function validateProductBody(req, res, next) {
  try {
    const validBody = await productValidator.validateAsync(req.body);

    if (!validBody) throw new Error(validBody);

    req.body = validBody;
    next();
  } catch (err) {
    res.json({ error: err.message });
  }
}

module.exports = { validateCustomerBody, validateProductBody };
