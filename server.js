const express = require("express");
const app = express();
const PORT = 5001;
const routes = require("./routes/routes");
const { connect } = require("mongoose");

app.use(express.json());
app.use(routes);

app.listen(PORT, () => {
  console.log(`server listening on port ${PORT}`);
});
