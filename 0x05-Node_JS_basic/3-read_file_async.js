const fs = require("fs");

module.exports = function countStudents(path) {
  const promise = (res, rej) => {
    fs.readFile(path, "utf-8", (error, contents) => {
      if (error) {
        rej(new Error("Cannot load database"));
      }
      const number = contents.split("\n").length - 1;
      const logs = contents.split("\n").slice(1);
      const list = {};
      const resolve = [];
      for (const fields in logs) {
        const field = logs[fields].split(",");
        if (list[field[3]]) {
          list[field[3]].push(field[0]);
        } else {
          list[field[3]] = [field[0]];
        }
      }
      console.log(`Number of students: ${number}`);
      resolve.push(`Number of students: ${number}`);
      for (const i in Object.keys(list)) {
        console.log(
          `Number of students in ${Object.keys(list)[i]}: ${
            list[Object.keys(list)[i]].length
          }. List: ${list[Object.keys(list)[i]].join(", ")}`
        );
        resolve.push(
          `Number of students in ${Object.keys(list)[i]}: ${
            list[Object.keys(list)[i]].length
          }. List: ${list[Object.keys(list)[i]].join(", ")}`
        );
      }
      res(resolve);
    });
  };
  return new Promise(promise);
};
