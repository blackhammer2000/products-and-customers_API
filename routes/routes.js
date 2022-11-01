const router = require("express").Router();
const Customer = require("../schemas/customer");
const Product = require("../schemas/products");
const {
  customerValidator,
  productValidator,
} = require("../validators/joi_validators");

router.post("/register/user", async (req, res) => {
  try {
  } catch (err) {}
});

router.post("/register/product", (req, res) => {});

module.exports = router;
