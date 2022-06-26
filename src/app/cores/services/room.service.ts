import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Room } from '../models/room.model';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class RoomService {

  // rooms: Room[] = [
  //   new Room(1, "Second S1A"),
  //   new Room(2, "Première S1A"),
  //   new Room(3, "Terminale S1A"),
  // ];

  constructor(private api: ApiService) { }

  getCount() {
    return 10;
  }

  getRooms():Observable<Room[]> {
    return this.api.getObjects('rooms');
  }

  getRoom(id: number):Observable<Room>{
    return this.api.getOneObject('rooms/' + id);
  }

  createRoom(room: Room): Observable<Room> {
    return this.api.insertOneObject('rooms', room);
  }

  updateRoom(id: number, room: Room): Observable<Room>  {
    return this.api.updateOneObject('rooms/' + id, room)  
  }

  deleteRoom(room: Room): Observable<Room>  {
    return this.api.deleteOneObject('rooms/' + room.id);
  }
}
