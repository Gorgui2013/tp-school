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

  room: Room;
  mode: string;

  roomForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private roomService: RoomService, private route: Router, private actRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.mode = this.actRoute.snapshot.params['mode'];
    if( this.mode === "edit") {
      this.getRoom(parseInt(this.actRoute.snapshot.params['id']));
    } else {
      this.room = new Room();
      this.initForm();
    }
  }

  getRoom(id: number) {
    this.roomService.getRoom(id)
    .subscribe(
      (data: Room) => {
        this.room = data;
        this.initForm();
      },
      (error) => {
        console.log("error" + error);
      });
  }

  initForm() {
    this.roomForm = this.formBuilder.group({
      name : [this.room.name, Validators.required],
    });
  }

  saveRoom() {
    if(this.room.id === undefined) {
      // let oneRoom = new Room(this.roomForm.get('name')?.value)
      this.roomService.createRoom(JSON.parse('{"name":"'+ this.roomForm.get('name').value +'" }'))
      .subscribe(
        (data) => {
          console.log('success !');
        },
        (error) => {
          console.log('error' + error);
        });
    } else {
      this.roomService.updateRoom(
        this.room.id, 
        JSON.parse('{"name":"'+ this.roomForm.get('name').value +'" }')
        ).subscribe(
        (data) => {
          console.log('success');
        },
        (error) => {
          console.log('error' + error);
        });
    }
    this.route.navigate(['sys/rooms']);
  }

}
