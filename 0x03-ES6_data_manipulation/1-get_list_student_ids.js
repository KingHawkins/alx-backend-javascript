export default function getListStudentsIds(func) {
  const object = func;
  if (!Array.isArray(object)) {
    return [];
  }
  return object.map((item) => item.id);
}
