import { Component, OnInit } from '@angular/core';

import { StudentService } from './../../cores/services/student.service';
import { RoomService } from './../../cores/services/room.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public rooms: RoomService, public students: StudentService) { }

  ngOnInit(): void {
  }

}
