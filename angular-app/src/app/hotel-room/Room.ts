export class Room {
	id: number;
	size: number;
	price: number;
	roomNumber: string;

	constructor(id: number, size: number, price: number, roomNumber: string) {
		this.id = id;
		this.size = size;
		this.price = price;
		this.roomNumber = roomNumber;
	}
}