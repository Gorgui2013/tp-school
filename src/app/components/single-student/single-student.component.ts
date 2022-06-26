import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { StudentService } from './../../cores/services/student.service';
import { RoomService } from './../../cores/services/room.service';

import { Student } from './../../cores/models/student.model';
import { Room } from './../../cores/models/room.model';

@Component({
  selector: 'app-single-student',
  templateUrl: './single-student.component.html',
  styleUrls: ['./single-student.component.css']
})
export class SingleStudentComponent implements OnInit {

  student: Student;
  mode: string;

  rooms: Room[];

  studentForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private roomService: RoomService, private studentService: StudentService, private route: Router, private actRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.mode = this.actRoute.snapshot.params['mode'];
    if( this.mode === "edit") {
      this.getStudent(parseInt(this.actRoute.snapshot.params['id']));
    } else {
      this.student = new Student();
      this.initForm();
    }
    this.getRooms();
  }

  getStudent(id: number) {
    this.studentService.getStudent(id)
    .subscribe(
      (data: Student) => {
        this.student = data;
        this.initForm();
      },
      (error) => {
        console.log("error" + error);
      });
  }

  getRooms() {
    this.roomService.getRooms()
      .subscribe(
        (data: Room[]) => {
          this.rooms = data;
        },
        (error) => {
          console.log ('error : '+ error);
        });
  }

  initForm() {
    this.studentForm = this.formBuilder.group({
      firstname : [this.student.firstname, Validators.required],
      lastname : [this.student.lastname, Validators.required],
      born : [this.student.born, Validators.required],
      room : ['', Validators.required],
    });
  }

  saveStudent() {
    if(this.student.id ===  undefined) {
      this.studentService.createStudent(this.studentForm.value)
        .subscribe(
          (data) => {
            console.log('success');
          },
          (error) => {
            console.log('error : ' + error);
          });
    } else {
      let room;
      if(this.studentForm.get('room').value === "") {
        this.studentForm.controls['room'].setValue(this.student.room.id);
      }
      this.studentService.updateStudent(this.student.id, this.studentForm.value)
        .subscribe(
          (data) => {
            console.log('success');
          },
          (error) => {
            console.log('error : ' + error);
          });
    }
    this.route.navigate(['sys/students']);
  }

}
