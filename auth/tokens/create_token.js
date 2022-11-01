const jwt = require("jsonwebtoken");
require("dotenv").config();

const signAccessToken = (_id) => {
  return new Promise((resolve, reject) => {
    const token = jwt.sign({ _id }, process.env.SECRET_KEY);
  });
};
