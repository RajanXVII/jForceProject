import { Room } from './Room';


export class Booking {
	room: Room;
	beginDate: Date;
	endDate: Date;
	
	constructor(room: Room, beginDate: Date, endDate: Date) {
		this.room = room;
		this.beginDate = beginDate;
		this.endDate = endDate; 
	}
}