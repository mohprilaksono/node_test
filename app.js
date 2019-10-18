const express = require("express");
const app = express();
const task_condition = require("./lib/task_condition");
const loop_for = require("./lib/loop/loop_for");
const loop_foreach = require("./lib/loop/loop_foreach");
const loop_map = require("./lib/loop/loop_map");
const map_object = require("./lib/loop/loop_map_object");

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  return res.send("Welcome to the beginning of nothingness");
});

app.get("/task1", (req, res) => {
  let { key1, key2 } = req.query;
  let result = task_condition.task1(key1, key2);

  result.map(v => console.log(`hasil ${v}`));

  return res.send(result);
});

app.post("/task2", (req, res) => {
  let { name, email } = req.body;
  let result = task_condition.task2(name, email);

  return res.send(result.email);
});

app.get("/loop-for", (req, res) => {
  let data = ["Red", "Blue", "Green", "Yellow"];
  let result = loop_for(data);

  return res.send(result);
});

app.get("/loop-foreach", (req, res) => {
  let data = ["Red", "Blue", "Green"];
  let result = loop_foreach(data);

  return res.send(result);
});

app.get("/loop-map", (req, res) => {
  let data = [
    "Red", // 0
    "Blue", // 1
    "Green" // 2
  ];
  let result = loop_map(data);

  return res.send(result);
});

app.get("/object-loop", (req, res) => {
  let data = [
    {
      name: "Red",
      note: "Danger"
    }, // 0
    {
      name: "Yellow",
      note: "Warning"
    }, // 1
    {
      name: "Green",
      note: "Success"
    } // 2
  ];

  let result = map_object(data);

  return res.send(result);
});

app.listen(3300, () => {
  console.log("Example app listening on port");
});
