// iterator
export default function createIteratorObject (report) {
  const array = [];
  [...Object.values(report.allEmployees)].forEach(value => {
    for (const item of value) {
      array.push(item);
    }
  }
  );
  return array;
}

