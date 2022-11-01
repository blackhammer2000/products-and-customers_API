require("dotenv").config()
const express = require("express");
const app = express();
const PORT = process.env.PORT || 5002;
const routes = require("./routes/routes");
const { connect } = require("mongoose");

app.use(express.json());
app.use(routes);

app.listen(PORT, () => {
  console.log(`server listening on port ${PORT}`);
});

connect(process.env.DB_URL, () => console.log("connected to db"));
