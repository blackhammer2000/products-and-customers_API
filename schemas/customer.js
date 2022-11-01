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

customerSchema.pre("save", (next) => {});

const Customer = model("customer", customerSchema);

module.exports = Customer;
