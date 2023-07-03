/* eslint-disable no-param-reassign */
export default function updateStudentGradeByCity(students, city, grades) {
  return students.filter((student) => student.location === city).map((student) => {
    const filtered = grades.filter((grade) => grade.studentId === student.id);
    if (filtered.length > 0) { student.grade = filtered[0].grade; } else student.grade = 'N/A';
    return student;
  });
}
