const express = require("express");
const app = express();
const countStudents = require("./3-read_file_async");
const path = process.argv[2];

app.get("/", (req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.send("Hello Holberton School!");
});

app.get("/students", (req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  countStudents(path)
    .then((data) => {
      res.end(`This is the list of our students\n${data.join("\n")}`);
    })
    .catch((error) => {
      res.end(error);
    });
});
app.listen("1245");
module.exports = app;
