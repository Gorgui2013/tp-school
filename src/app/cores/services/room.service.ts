import { Injectable } from '@angular/core';
import { Room } from '../models/room.model';
import { Student } from '../models/student.model';

@Injectable({
  providedIn: 'root'
})
export class RoomService {

  rooms: Room[] = [
    new Room(1, "Second S1A"),
    new Room(2, "Première S1A"),
    new Room(3, "Terminale S1A"),
  ];

  constructor() { }

  getCount() {
    return this.rooms.length;
  }

  getRooms() {
    return this.rooms;
  }

  getRoom(id: number){
    return this.rooms.find(elt => elt.getId() === id);
  }

  createRoom(name: string) {
    let n;
    if(this.rooms.length === 0) {
      n = 1;
    } else {
      let lastRoom = this.rooms[this.rooms.length-1];
      n = lastRoom.getId()+1;
    }
    let r = new Room(n, name);
    this.rooms.push(r);
  }

  updateRoom(room: Room) {
    let oneIndex = this.rooms.findIndex(elt => elt.getId() === room.getId());
    this.rooms.splice(oneIndex, 1, room);  
  }

  deleteRoom(room: Room) {
    let oneIndex = this.rooms.findIndex(elt => elt.getId() === room.getId());
    this.rooms.splice(oneIndex, 1);
  }

  // addStudentToRoom(room: Room, student: Student) {
  //   let oneIndex = this.rooms.findIndex(elt => elt.getId() === student.getId());
  //   this.rooms[oneIndex].addStudent(student);
  // }

  // removeStudentToRoom(room: Room, student: Student) {
  //   let oneIndex = this.rooms.findIndex(elt => elt.getId() === student.getId());
  //   this.rooms[oneIndex].removeStudent(student);
  // }
}
