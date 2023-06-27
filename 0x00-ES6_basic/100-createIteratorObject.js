export default function createIteratorObject(report) {
  const array = [];
  Object.values(report.allEmployees).forEach((value) => {
    value((item) => {
      array.push(item);
    });
  });
  return array;
}
