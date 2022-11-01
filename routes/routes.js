const router = require("express").Router();
const Customer = require("../schemas/customer");
// const Product = require("../schemas/products");
const {
  customerValidator,
  productValidator,
} = require("../validators/joi_validators");
const {
  validateCustomerBody,
  validateProductBody,
} = require("./helpers/body_validators");

router.post("/register/user", validateCustomerBody, async (req, res) => {
  try {
    const newUser = await Customer.create(req.body);

    if (!newUser) throw new Error(newUser);

    res.send({ message: "user created" });
  } catch (err) {
    res.json({ error: err.message });
  }
});

router.post("/register/product", validateProductBody, async (req, res) => {});

module.exports = router;
