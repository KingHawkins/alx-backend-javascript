const fs = require("fs");

module.exports = function countStudents(path) {
  try {
    const contents = fs.readFileSync(path, "utf-8");
    const number = contents.split("\n").length - 1;
    const logs = contents.split("\n").slice(1);
    const list = {};
    for (const fields in logs) {
      const field = logs[fields].split(",");
      if (list[field[3]]) {
        list[field[3]].push(field[0]);
      } else {
        list[field[3]] = [field[0]];
      }
    }
    console.log(`Number of students: ${number}`);
    for (const i in Object.keys(list)) {
      console.log(
        `Number of students in ${Object.keys(list)[i]}: ${
          list[Object.keys(list)[i]].length
        }. List: ${list[Object.keys(list)[i]].join(", ")}`
      );
    }
  } catch (err) {
    throw new Error("Cannot load database");
  }
};
