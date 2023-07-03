export default function getStudentsByLocation(list, string) {
  return list.filter((item) => item.location === string);
}
