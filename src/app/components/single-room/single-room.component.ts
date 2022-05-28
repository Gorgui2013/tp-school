import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { RoomService } from './../../cores/services/room.service';

import { Room } from './../../cores/models/room.model';

@Component({
  selector: 'app-single-room',
  templateUrl: './single-room.component.html',
  styleUrls: ['./single-room.component.css']
})
export class SingleRoomComponent implements OnInit {

  room?: Room;
  mode: string;

  roomForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private roomService: RoomService, private route: Router, private actRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.mode = this.actRoute.snapshot.params['mode'];
    if( this.mode === "edit") {
      this.room = this.roomService.getRoom(parseInt(this.actRoute.snapshot.params['id']));
    } else {
      this.room = new Room();
    }
    this.initForm();
  }

  initForm() {
    this.roomForm = this.formBuilder.group({
      name : [this.room?.getName(), Validators.required],
    });
  }

  saveRoom() {
    if(this.room?.getId() === 0) {
      this.roomService.createRoom(this.roomForm.get('name')?.value);
    } else {
      let room = new Room(
        this.room?.getId(),
        this.roomForm.get('name')?.value,
        );
      this.roomService.updateRoom(room);
    }
    this.route.navigate(['sys/rooms']);
  }

}
