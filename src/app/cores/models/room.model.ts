import { Student } from './student.model';

export class Room {
	private id: number;
	private name: string;
	// private students: Student[];

	constructor(id: number = 0, name: string = ''/*, students: Student[] = []*/) {
		this.id = id;
		this.name = name;
		// this.students = [];
		// for(let i = 0; i < students.length; i++) {
		// 	let student = new Student(students[i].getId(), students[i].getFirstName(), students[i].getLastName(), students[i].getBorn(), students[i].getRoom() );
		// 	this.addStudent(student);
		// }
	}

	getId() { return this.id; }

	getName() { return this.name; }

	setName(name: string) { this.name = name; }

	// getStudents() { return this.students; }

	// addStudent(student: Student) {
	// 	this.students.push(student);
	// }

	// removeStudent(student: Student) {
	// 	let oneIndex = this.students.findIndex(elt => elt.getId() === student.getId());
	// 	this.students.splice(oneIndex, 1);
	// }

}