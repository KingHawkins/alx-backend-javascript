export default function cleanSet(set, string) {
  const array = [];
  set.forEach((item) => {
    if (string.length !== 0 && item.startsWith(string)) {
      array.push(item.slice(string.length, item.length));
    }
  });
  return array.join('-');
}
