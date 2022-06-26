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
    this.emitStudents();
  }

  emitStudents() {
    this.studentService.getStudents()
      .subscribe(
        (data: Student[]) => {
          this.students = data;
        },
        (error) => {
          console.log('error : ' + error);
        }
      );
  }

  goToSingle(student?: Student) {
    if(student !== undefined) {
      this.route.navigate(['sys/students/edit', student.id]);
    } else {
      this.route.navigate(['sys/students/add', 'newStudent']);    
    }
  }
  
  removeStudent(student: Student) {
    this.studentService.deleteStudent(student)
    .subscribe(
        (data: Student) => {
          this.emitStudents();
          console.log ('Success');
        },
        (error) => {
          console.log('error : ' + error);
        }
      );
  }

}
