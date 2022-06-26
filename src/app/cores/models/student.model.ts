import { Room } from './room.model';

export class Student {

	constructor(
	public id?: number,
	public firstname?: string,
	public lastname?: string,
	public born?: Date,
	public room?: Room,
	) {}
}