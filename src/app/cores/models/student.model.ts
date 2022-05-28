import { Room } from './room.model';

export class Student {
	private id: number;
	private firstName: string;
	private lastName: string;
	private born: Date;
	private room: Room;

	constructor(id: number = 0, firstName: string = '', lastName: string = '', born: Date = new Date(), room: Room = new Room()) {
		this.id = id;
		this.firstName = firstName;
		this.lastName = lastName;
		this.born = born;
		this.room = room;
	}

	getId() {
		return this.id;
	}

	getFirstName() { return this.firstName; }

	setFirstName(firstName: string) {
		this.firstName = firstName;
	}

	getLastName() { return this.lastName; }

	setLastName(lastName: string) {
		this.lastName = lastName;
	}

	getBorn() { return this.born; }

	setBorn(born: Date) {
		this.born = born;
	}

	getRoom() { return this.room; }

	setRoom(room: Room) {
		this.room = room;
	}
}