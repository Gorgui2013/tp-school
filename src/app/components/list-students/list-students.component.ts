import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { StudentService } from './../../cores/services/student.service';

import { Student } from './../../cores/models/student.model';
import { Room } from './../../cores/models/room.model';

@Component({
  selector: 'app-list-students',
  templateUrl: './list-students.component.html',
  styleUrls: ['./list-students.component.css']
})
export class ListStudentsComponent implements OnInit {

  students: Student[];

  constructor(private studentService: StudentService, private route: Router) { }

  ngOnInit(): void {
    this.students = this.studentService.students;
  }

  goToSingle(student?: Student) {
    if(student !== undefined) {
      this.route.navigate(['sys/students/edit', student.getId()]);
    } else {
      this.route.navigate(['sys/students/add', 'newStudent']);    
    }
  }

  // addStudent() {
  //   let lastStudent = this.students[this.students.length-1];
  //   let student = new Student(lastStudent.getId()+1, "Khady", "Seck", new Date(), new Room());
  //   this.studentService.createStudent(student);
  // }

  removeStudent(student: Student) {
    this.studentService.deleteStudent(student);
  }

}
