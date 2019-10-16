let mongoose = require("mongoose");
require("dotenv").config();
var host = process.env.HOST;

mongoose.connect(host, {
  useNewUrlParsee: true
});

mongoose.set("useCreateIndex", true);
