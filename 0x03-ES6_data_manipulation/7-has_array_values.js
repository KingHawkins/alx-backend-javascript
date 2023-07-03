export default function hasValuesFromArray(set, list) {
  const array = [];
  list.every((item) => Array.from(set).forEach((value) => {
    if (value === item) {
      array.push(value);
    }
  }));
  if (array.length !== list.length) return false;
  return true;
}
