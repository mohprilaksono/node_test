const express = require("express");
const app = express();
require("./db"); //db connection

const index_routes = require("./routes/index");
const book_routes = require("./routes/books");
const user_routes = require("./routes/user");

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  return res.send("Welcome to the beginning of nothingness");
});

app.use("/index", index_routes);
app.use("/book", book_routes);
app.use("/user", user_routes);

app.listen(3300, () => {
  console.log("Example app   listening on port 3300");
});
