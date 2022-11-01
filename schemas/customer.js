const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");

const customerSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

customerSchema.pre("save", async function (next) {
  try {
    const hashedPassword = await bcrypt.hash(this.password, 10);
    this.password = hashedPassword;
    next();
  } catch (err) {
    res.json({ error: err.message });
  }
});

const Customer = model("customer", customerSchema);

module.exports = Customer;
