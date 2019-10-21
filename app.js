const express = require("express");
const app = express();
require("./db"); // database connection

/**
 * Import routes files
 */
const index_routes = require("./routes/index");
const book_routes = require("./routes/books");
const users = require("./routes/user");

// for parsing application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

require("./routes/main")(app); // import routes

app.listen(3300, () => {
  console.log(`Example app listening on port 3300`);
});
