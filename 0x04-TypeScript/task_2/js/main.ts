interface DirectorInterface{
	workFromHome(): string;
	getCoffeeBreak(): string;
	workDirectorTasks(): string;
}

interface TeacherInterface{
	workFromHome(): string;
	getCoffeBreak(): string;
	workTeacherTasks(): string;
}

class Director implements DirectorInterface{
	workFromHome(): string{
		return 'Working from home';
	}
	getToWork(): string{
		return 'Getting a coffee break';
	}
	workDirectorTasks(): string{
		return 'Getting to director tasks';
	}
}

class Teacher implements TeacherInterface{
	workFromHome(): string{
		return 'Cannot work from home';
	}
	getCoffeeBreak(): string{
		return 'Cannot have a break';
	}
	workDirectorTasks(): string{
		return 'getting to director tasks';
	}
}

function creteEmployee(salary: number | string): Director | Teacher{
	if(typeof salary === 'number' && salary < 500){
		return new Teacher();
	}else return new Director();
}

function isDirector(employee: Teacher | Director): boolean{
	if(employee instanceof Director){
		return true;
	}else return false;
}

function executeWork(employee: Teacher | Director): void{
	if(employee instanceof Director){
		employee.workDirectorTasks();
	}else employee.workTeacherTasks();
}
