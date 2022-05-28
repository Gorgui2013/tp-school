import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { RoomService } from './../../cores/services/room.service';

import { Student } from './../../cores/models/student.model';
import { Room } from './../../cores/models/room.model';

@Component({
  selector: 'app-list-rooms',
  templateUrl: './list-rooms.component.html',
  styleUrls: ['./list-rooms.component.css']
})
export class ListRoomsComponent implements OnInit {

  rooms: Room[];

  constructor(private roomService: RoomService, private route: Router) { }

  ngOnInit(): void {
    this.rooms = this.roomService.getRooms();
  }

  goToSingle(room?: Room) {
    if(room !== undefined) {
      this.route.navigate(['sys/rooms/edit', room.getId()]);
    } else {
      this.route.navigate(['sys/rooms/add', 'newStudent']);    
    }
  }

  removeRoom(room: Room) {
    this.roomService.deleteRoom(room);
  }

}
