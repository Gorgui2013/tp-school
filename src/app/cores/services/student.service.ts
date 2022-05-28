import { Injectable } from '@angular/core';
import { Student } from '../models/student.model';
import { Room } from '../models/room.model';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  students: Student[] = [
    // new Student(1, "Fallou", "DIOP", new Date(), new Room()),
    // new Student(2, "Modou", "Fall", new Date(), new Room()),
  ];

  constructor() { }

  getCount() {
    return this.students.length;
  }

  getStudent(id: number) {
    return this.students.find(elt => elt.getId() === id);
  }

  createStudent(student: Student) {
    let n;
    if(this.students.length === 0) {
      n = 1;
    } else {
      let lastStudent = this.students[this.students.length-1];
      n = lastStudent.getId()+1;
    }
    let s = new Student(n, student.getFirstName(), student.getLastName(), student.getBorn(), student.getRoom());
    this.students.push(s);
  }

  updateStudent(student: Student) {
    let oneIndex = this.students.findIndex(elt => elt.getId() === student.getId());
    this.students.splice(oneIndex, 1, student);
  }

  deleteStudent(student: Student) {
    let oneIndex = this.students.findIndex(elt => elt.getId() === student.getId());
    this.students.splice(oneIndex, 1);
  }
}
