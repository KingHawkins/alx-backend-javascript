const http = require("http");
const countStudents = require("./3-read_file_async");
const path = process.argv[2];

const app = http.createServer((req, res, next) => {
  if (req.url == "/") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.end("Hello Holberton School!");
  }
  if (req.url == "/students") {
    if (req.url === "/") {
      res.statusCode = 200;
      res.setHeader("Content-Type", "text/plain");
      res.end("Hello Holberton School!");
    }
    if (req.url === "/students") {
      res.statusCode = 200;
      res.setHeader("Content-Type", "text/plain");
      countStudents(path)
        .then((data) => {
          res.end(`This is the list of our students\n${data.join("\n")}`);
        })
        .catch((error) => {
          res.end(error);
        });
    }
  }
});
app.listen("1245");
module.exports = app;
