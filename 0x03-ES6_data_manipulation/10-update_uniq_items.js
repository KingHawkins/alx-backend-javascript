export default function updateUniqueItems(set) {
  if (set instanceof Map) {
    return set.forEach((value, key) => {
      if (value === 1) {
        set.set(key, 100);
      }
    });
  }
  throw new Error('Parameter must be a map object');
}
