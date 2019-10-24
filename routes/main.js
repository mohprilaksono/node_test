const users = require("./user");
const index = require("./index");
const books = require("./books");
const shops = require("./shop.route");
const verifyToken = require("../middlewares/verify_token.middleware");

const routes = app => {
  app.use("/", index);
  app.use("/book", books);
  app.use("/shop", verifyToken(), shops);
  app.use("/user", users);
};

module.exports = routes;
