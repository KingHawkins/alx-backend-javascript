export default function appendToEachArrayValue(array, appendString) {
  const store = [];
  array.forEach((idx) => {
    store.push(appendString + idx);
  });
  return store;
}
