var student1 = {
    firstName: 'Bob',
    lastName: 'Hawkins',
    age: 20,
    location: 'Kakamega'
};
var student2 = {
    firstName: 'Kim',
    lastName: 'Possible',
    age: 30,
    location: 'Nairobi'
};
var studentsList = [student1, student2];
var body = document.querySelector('body');
var table = document.createElement('table');
var row = document.createElement('tr');
row.innerHTML = "<tr><th>Firstname</th><th>Location</th></tr>";
table.appendChild(row);
studentsList.forEach(function (student) {
    var row = document.createElement('tr');
    row.innerHTML = "<td>".concat(student.firstName, "</td><td>").concat(student.location, "</td>");
    table.appendChild(row);
});
body.appendChild(table);
