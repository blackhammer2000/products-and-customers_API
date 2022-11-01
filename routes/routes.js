const router = require("express").Router();
const Customer = require("../schemas/customer");
const Product = require("../schemas/products");
const {
  customerValidator,
  productValidator,
} = require("../validators/joi_validators");

router.post("/register/user", async (req, res) => {
  try {
    const validBody = await customerValidator.validateAsync(req.body);

    if (!validBody) throw new Error(validBody);

    const newUser = await Customer.create(validBody);
  } catch (err) {
    res.json({ error: err.message });
  }
});

router.post("/register/product", (req, res) => {});

module.exports = router;
