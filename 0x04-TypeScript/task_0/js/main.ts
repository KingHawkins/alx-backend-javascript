interface Student{
	firstName: string,
	lastName: string,
	age: number,
	location: string
}

const student1: Student = {
	firstName: 'Bob',
	lastName: 'Hawkins',
	age: 20,
	location: 'Kakamega'
};
const student2: Student = {
	firstName: 'Kim',
	lastName: 'Possible',
	age: 30,
	location: 'Nairobi'
};
const studentsList: Array<Student> = [student1, student2];

const body: HTMLBodyElement = document.querySelector('body');
const table: HTMLTableElement = document.createElement('table');
const row: HTMLTableRowElement = document.createElement('tr');

row.innerHTML = `<tr><th>Firstname</th><th>Location</th></tr>`;
table.appendChild(row);

studentsList.forEach((student) => {
  const row: HTMLTableRowElement = document.createElement('tr');
  row.innerHTML = `<td>${student.firstName}</td><td>${student.location}</td>`;
  table.appendChild(row);
});

body.appendChild(table);
