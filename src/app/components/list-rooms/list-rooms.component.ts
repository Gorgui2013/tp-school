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
    this.emitRooms();
  }

  emitRooms() {
    this.roomService.getRooms().subscribe(
        (data: Room[]) => {
          this.rooms = data;
        },
        (error) => {
          console.log('error : ' + error);
        }
      );
  }

  goToSingle(room?: Room) {
    if(room !== undefined) {
      this.route.navigate(['sys/rooms/edit', room.id]);
    } else {
      this.route.navigate(['sys/rooms/add', 'newStudent']);    
    }
  }

  removeRoom(room: Room) {
    this.roomService.deleteRoom(room).subscribe(
        (data) => {
          this.emitRooms();
          console.log ('Success');
        },
        (error) => {
          console.log('error : ' + error);
        }
      );
  }

}
