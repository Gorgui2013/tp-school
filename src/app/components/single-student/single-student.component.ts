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

  student?: Student;
  mode: string;

  rooms: Room[];

  studentForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private roomService: RoomService, private studentService: StudentService, private route: Router, private actRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.mode = this.actRoute.snapshot.params['mode'];
    if( this.mode === "edit") {
      this.student = this.studentService.getStudent(parseInt(this.actRoute.snapshot.params['id']));
    } else {
      this.student = new Student();
    }
    this.rooms = this.roomService.getRooms();
    this.initForm();
  }

  initForm() {
    this.studentForm = this.formBuilder.group({
      firstname : [this.student?.getFirstName(), Validators.required],
      lastname : [this.student?.getLastName(), Validators.required],
      born : [this.student?.getBorn(), Validators.required],
      room : ['', Validators.required],
    });
  }

  saveStudent() {
    let room = this.roomService.getRoom(parseInt(this.studentForm.get('room')?.value));
    if(this.student?.getId() === 0) {
      let student = new Student(
        0, 
        this.studentForm.get('firstname')?.value, 
        this.studentForm.get('lastname')?.value, 
        this.studentForm.get('born')?.value, 
        room
        );
      this.studentService.createStudent(student);
    } else {
      let student = new Student(
        this.student?.getId(), 
        this.studentForm.get('firstname')?.value, 
        this.studentForm.get('lastname')?.value, 
        this.studentForm.get('born')?.value, 
        room
        );
      this.studentService.updateStudent(student);
    }
    this.route.navigate(['sys/students']);
  }

}
