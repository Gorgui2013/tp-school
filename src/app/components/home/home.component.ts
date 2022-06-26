import { Component, OnInit } from '@angular/core';

import { Student } from './../../cores/models/student.model';
import { Room } from './../../cores/models/room.model';
import { StudentService } from './../../cores/services/student.service';
import { RoomService } from './../../cores/services/room.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  countRoom = 0;
  countStudent = 0;

  constructor(public rooms: RoomService, public students: StudentService) { }

  ngOnInit(): void {
    this.emitStudents();
    this.emitRooms();
  }

  emitStudents() {
    this.students.getStudents()
      .subscribe(
        (data: Student[]) => {
          this.countStudent = data.length;
        },
        (error) => {
          console.log('error : ' + error);
        }
      );
  }

  emitRooms() {
    this.rooms.getRooms().subscribe(
        (data: Room[]) => {
          this.countRoom = data.length;
        },
        (error) => {
          console.log('error : ' + error);
        }
      );
  }

}
