const mongoose = require("mongoose");
const secret = require("../config.js");
var connectionURL = secret.connectionURL;

if (process.env.NODE_ENV === "production") {
  var connectionURL = process.env.connectionURL;
} else {
  var connectionURL = secret.connectionURL;
}

mongoose
  .connect(connectionURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => {
  })
  .catch((err) => {
    console.log("Can't connect to the database", err);
    process.exit();
  });