var Director = /** @class */ (function () {
    function Director() {
    }
    Director.prototype.workFromHome = function () {
        return 'Working from home';
    };
    Director.prototype.getToWork = function () {
        return 'Getting a coffee break';
    };
    Director.prototype.workDirectorTasks = function () {
        return 'Getting to director tasks';
    };
    return Director;
}());
var Teacher = /** @class */ (function () {
    function Teacher() {
    }
    Teacher.prototype.workFromHome = function () {
        return 'Cannot work from home';
    };
    Teacher.prototype.getCoffeeBreak = function () {
        return 'Cannot have a break';
    };
    Teacher.prototype.workDirectorTasks = function () {
        return 'getting to director tasks';
    };
    return Teacher;
}());
function creteEmployee(salary) {
    if (typeof salary === 'number' && salary < 500) {
        return new Teacher();
    }
    else
        return new Director();
}
function isDirector(employee) {
    if (employee instanceof Director) {
        return true;
    }
    else
        return false;
}
function executeWork(employee) {
    if (employee instanceof Director) {
        employee.workDirectorTasks();
    }
    else
        employee.workTeacherTasks();
}
