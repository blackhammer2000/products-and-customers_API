const router = require("express").Router();
const Customer = require("../schemas/customer");
const Product = require("../schemas/product");

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

router.post("/register/product", validateProductBody, async (req, res) => {
  try {
    const newProduct = await Product.create(req.body);

    if (!newProduct) throw new Error(newProduct);

    res.send({ message: "product created" });
  } catch (err) {
    res.json({ error: err.message });
  }
});

module.exports = router;
