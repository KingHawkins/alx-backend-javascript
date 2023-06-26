export default function appendToEachArrayValue (array, appendString) {
  const store = [];
  for (const idx of array) {
    store.push(appendString + idx);
  }

  return store;
}

