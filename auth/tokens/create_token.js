const jwt = require("jsonwebtoken");
require("dotenv").config();

const signAccessToken = (customerID) => {
  return new Promise((resolve, reject) => {
    const token = jwt.sign({ customerID }, process.env.SECRET_KEY);

    if (!token) reject(token);

    resolve(token);
  });
};

const verifyAccessToken = async (req, res, next) => {
  try {
    if (!req.headers.token) throw new Error("Unauthorized");
    const { customerID } = await jwt.verify(
      req.headers.token,
      process.env.SECRET_KEY,
      options
    );
  } catch (err) {
    res.json({ error: err.message });
  }
};
